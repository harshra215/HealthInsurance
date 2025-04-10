import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Auth/auth";

const Hplan = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPlan, setNewPlan] = useState({
    title: "",
    img: "",
    content1: "",
    content2: "",
    content3: "",
    category: "Family",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user } = useAuth();

  const categories = [
    "All categories",
    "Family",
    "Diabetes",
    "Cardiac",
    "Disease Specific",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prev) => ({ ...prev, [name]: value }));
  };

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/plans/getAll");
      const plansData = response.data;
      const filtered = plansData.filter((plan) => {
        const matchesSearch = plan.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "All categories" || plan.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      setFilteredPlans(filtered);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/plans/add", newPlan);
      setNewPlan({
        title: "",
        img: "",
        content1: "",
        content2: "",
        content3: "",
        category: "Family",
      }); // Reset form
      setIsFormOpen(false); // Close form
      fetchPlans(); // Refetch plans to update the list
      alert("Plan added successfully!");
    } catch (error) {
      console.error("Error adding plan:", error);
      alert("Failed to add plan. Please try again.");
    }
  };

  useEffect(() => {
    fetchPlans(); // Initial fetch on mount and when search/category changes
  }, [searchQuery, selectedCategory]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            All Health Plans
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 tracking-tight">
            Secure Your Future with the Best Health Plans
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore tailored insurance options designed for every need and stage of life.
          </p>
          {user && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Add New Plan
            </button>
          )}
        </div>

        {/* Add Plan Form (Modal) */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add New Plan</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newPlan.title}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input
                    type="text"
                    name="img"
                    value={newPlan.img}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Content 1</label>
                  <input
                    type="text"
                    name="content1"
                    value={newPlan.content1}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Content 2</label>
                  <input
                    type="text"
                    name="content2"
                    value={newPlan.content2}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Content 3</label>
                  <input
                    type="text"
                    name="content3"
                    value={newPlan.content3}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    name="category"
                    value={newPlan.category}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  >
                    {categories.slice(1).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full md:w-64">
            <button
              onClick={toggleDropdown}
              className="w-full bg-white text-gray-800 font-medium py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex items-center justify-between"
            >
              {selectedCategory}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                      selectedCategory === category ? "bg-blue-100 font-semibold" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-white text-gray-800 py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
              placeholder="Search by plan name or category..."
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Plans List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center text-gray-600 text-lg">
              Loading plans...
            </div>
          ) : filteredPlans.length === 0 ? (
            <div className="col-span-full text-center text-red-600 font-semibold text-lg">
              No plans found matching your criteria.
            </div>
          ) : (
            filteredPlans.map((plan) => (
              <div
                key={plan.id || plan._id} // Handle both id formats
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={plan.img}
                    alt={`${plan.title} Health Plan`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-gray-600 text-sm space-y-1 mb-4 h-20 overflow-hidden">
                    <p>{plan.content1}</p>
                    <p>{plan.content2}</p>
                    <p>{plan.content3}</p>
                  </div>
                  <div className="flex justify-end">
                    {user ? (
                      <Link
                        to={`/plans/${plan._id || plan.id}`} // Handle both _id and id
                        className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-colors duration-200"
                      >
                        View Plan
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Hplan;