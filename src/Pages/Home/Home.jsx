import React from 'react';
import Wavy from '../../assets/wavy.svg';
import Image from './image.svg';
import p1 from './p1.svg';
import Ellipse1 from './Ellipse 1.png';
import Ellipse2 from './Ellipse 2.png';
import HomePage from './HomePage.png';
import {useNavigate} from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <img src={HomePage} alt="" className="absolute top-0 right-0 z-0"/>
      {/*<img src={Wavy} alt="Wavy" className="absolute top-44 left-0 z-20" />*/}
      {/*<img src={p1} alt="p1" className="absolute top-0 right-48 z-0"/>*/}
      {/*<div className="h-screen w-full bg-[#E2662D]">*/}
      {/*  <div>*/}
      {/*</div>*/}
      <button onClick={()=>navigate('/allDrinks')} className={"z-10 w-20 bg-amber-50 absolute top-3/4 left-48 p-2 text-[#E2662D] font-sidSans font-semibold rounded-3xl"}>Start</button>
      <button className={"z-10 w-40 bg-[#E2662D] absolute top-3/4 left-80 p-2 text-white font-sans text-wrap border-2 font-semibold rounded-3xl"}>Find My Drink</button>
    </>
  );
};

export default Home;