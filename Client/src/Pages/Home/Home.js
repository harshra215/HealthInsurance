import React from 'react'
import Header from './Header';
import Stat from './Stat';
import Bcard from './Bcard';
import Banner from './Banner';
import Claimp from './Claimp';
import Cim from './Cim';
import Tsp from './Tsp'; 
import Review from './Review';
import BenefitIsu from './BenefitIsu';
import Accordian from './Accordian';
import Chatbot from './Chatbot';

const Home = () => {
  return (
    <div >
      <Header /> 
      <Stat /> 
      <Bcard /> 
      <Banner /> 
      <Claimp /> 
      <Cim /> 
      <Tsp /> 
      <Review/> 
      <BenefitIsu /> 
      <Accordian />
      <Chatbot />
    </div>
  );
}

export default Home