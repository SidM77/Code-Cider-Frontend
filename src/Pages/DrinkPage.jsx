import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const DrinkPage = () => {
  const [reviewData, setReviewData] = useState({
    user_name: '',
    rating: 1,
    review: '',
    drink_id:1
  });

  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const response = axios.post(`http://localhost:8080/addReview`, reviewData);
      console.log(response)
      alert("Review Submitted!")


    }catch (e){
      console.log(e);
    }
  };
  const {name} = useParams();
  const [currentDrink, setCurrentDrink] = useState({});
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    console.log(name);
    const fetchDrink = async () => {
      const response1 = await axios.get(`http://localhost:8080/drinkByName/${name}`);
      setCurrentDrink(response1.data);
      console.log(JSON.stringify(currentDrink));
      setReviewData(prevState => ({
        ...prevState,
        drink_id: response1.data.id
      }));

    };

    fetchDrink();

  }, []);

  useEffect(()=> {
    const fetchReviews = async () => {
      const id = currentDrink.id;
      console.log(id);
      const response2 = await axios.get(`http://localhost:8080/getReviewsByDrinkId/${id}`);
      setReviews(response2.data);
    }

    fetchReviews();
  },[currentDrink])

  return (
    <div className={"flex flex-row"}>
      <div>
        <img src={currentDrink.image_url} className={"h-96"}></img>
        <h1>{currentDrink.info}</h1>
      </div>
      <div>
        <div className={"border-amber-300 border-2"}>
          <h2 className={"font-black"}>Add a review</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" name="user_name" value={reviewData.user_name} onChange={handleChange}/>
            </label>
            <label>
              Rating:
              <input type="number" min="0" max="5" name="rating" value={reviewData.rating} onChange={handleChange}/>
            </label>
            <label>
              Review:
              <textarea name="review" value={reviewData.review} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <h1 className="my-12 font-black">Reviews</h1>
        {reviews.map((review, key) => (
          <div key={key} className={"mb-20"}>
            <h2>{review.user_name}</h2>
            <h2>{review.review}</h2>
            <h2>{review.rating}/5</h2>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkPage;