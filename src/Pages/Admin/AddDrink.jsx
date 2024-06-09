import React, { useState } from 'react';
import axios from "axios";

const AddDrink = () => {
  const [drinkData, setDrinkData] = useState({
    name: '',
    price: 0,
    info: '',
    image_url: ''
  });

  const handleChange = (e) => {
    setDrinkData({
      ...drinkData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const response = axios.post(`http://localhost:8080/addDrink`, drinkData);
      console.log(response)

    }catch (e){
      console.log(e);
    }
    console.log(drinkData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={drinkData.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={drinkData.price} onChange={handleChange} />
        </label>
        <label>
          Info:
          <input type="text" name="info" value={drinkData.info} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image_url" value={drinkData.image_url} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/*<h1>{response}</h1>*/}
    </div>
  );
};

export default AddDrink;