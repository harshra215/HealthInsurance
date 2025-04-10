import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Premium Amount (₹)",
            data: [10000, 15000, 12000, 18000, 20000, 25000],
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Subtle fill gradient
            borderWidth: 2,
            fill: true,
            tension: 0.4, // Smooth curve
            pointRadius: 4, // Visible points
            pointHoverRadius: 6, // Larger points on hover
            pointBackgroundColor: "rgb(75, 192, 192)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows better control over height
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Amount (₹)",
              font: { size: 14 },
            },
            grid: { color: "rgba(0, 0, 0, 0.05)" }, // Light gridlines
          },
          x: {
            title: {
              display: true,
              text: "Months",
              font: { size: 14 },
            },
            grid: { display: false }, // Hide vertical gridlines
          },
        },
        plugins: {
          legend: {
            position: "top",
            labels: { font: { size: 12 } },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
          },
        },
      },
    };

    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, chartConfig);

    // Cleanup to prevent duplicate chart instances
    return () => chartInstance.destroy();
  }, []);

  return (
    <div
      className="
        mt-6 
        p-6 
        bg-white 
        rounded-lg 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        border 
        border-gray-100 
        max-w-4xl 
        mx-auto
      "
    >
      <h2
        className="
          text-2xl 
          font-semibold 
          mb-4 
          text-gray-800 
          border-b 
          border-gray-200 
          pb-2
        "
      >
        Premium Amount Trends
      </h2>
      <div className="relative h-80">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Charts;