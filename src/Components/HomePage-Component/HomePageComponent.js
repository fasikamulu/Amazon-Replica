import React, { useReducer } from "react";
import "./HomePageComponent.css";
import { useStateValue } from "../StateProvider/StateProvider";

function HomePageComponent({ title, url, linkUrl, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: url,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="HomePageComponent">
      <div className="title">{title}</div>
      <div>{price}</div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>
      <div className="homeComponetImgWrapper">
        <img src={url} />
      </div>
      <div className="homeComponentTitle">
        <a href={linkUrl}>See more</a>
      </div>
      <div>
        <button onClick={addToBasket}>Add to cart</button>{" "}
      </div>
    </div>
  );
}

export default HomePageComponent;
