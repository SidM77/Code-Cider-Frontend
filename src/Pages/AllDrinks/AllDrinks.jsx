import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Drinks from "../../Components/Drinks.js";
import NavBar from "./NavBar.png";
import {Link} from "react-router-dom";

const AllDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await axios.get('http://localhost:8080/drinks');
      setDrinks(response.data);
    };
    fetchDrinks();
  }, []);


  return (
    <>
      <div className={"h-screen w-screen bg-white flex justify-center"}>
        <div className="w-9/12 h-screen  mt-20">
            <img src={NavBar} alt="" className=" z-0"/>
            <div className=" w-full font-sans font-semibold text-[#E2662D] my-28">All Drinks</div>
          <div className={" flex flex-row grid grid-cols-3"}>
            {drinks.map((drink, index) => (
              <div key={index} className="justify-center h-96 w-96 mt-12">
                <Link to={`/drink/${drink.name}`}>
                <div className="">
                  <div className="flex justify-center">
                    <img src={drink.image_url} alt="" className="w-48"/>
                  </div>
                  <div className=" flex-col justify-center w-1/2">
                    <div className="flex font-mono font-semibold text-lg justify-center">{drink.name}</div>
                    <div className="flex text-[#E2662D] font-mono font-semibold text-sm">Price: ₹{drink.price}</div>
                    <div className="text-[#E2662D] font-sans text-sm font-semibold font-thin h-full">{drink.info}</div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDrinks;