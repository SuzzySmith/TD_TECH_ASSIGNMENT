import React from "react";
import Card from "react-bootstrap/Card";
import "./Food.css";
import food1 from './assets/Food1.png'; // Tell webpack this JS file uses this image

function Food(props) {

  const {
    closed = true,
    image = { food1 },
    price = 0,
    foodtitle = "Fish and chicken",
    restaurant = "KFC",
    rating = 4,
    time = "10-15",
    comment = 100,
  } = props.food || {};
  return (
    <Card className="mb-3 food-card pt-2 border-0 shadow-sm bg-body-tertiary rounded" >
      {closed && (
        <div
          className=" mt-2 ms-4 rounded-pill text-white fs-6 px-2 closed" >
          Closed
        </div>
      )}
      <Card.Img className="pt-1 px-3 picture" variant="top" src={image}  />
      
      <Card.Body>
      
          {/* Title, Restaurant name and Price */}
          <div className="d-flex">
            <div className="d-flex align-items-start flex-column  title">
              <Card.Title>{foodtitle}</Card.Title>
              <div className="flex-fill restaurant-name">
              <i class="bi bi-shop pe-2"></i>
              {restaurant}
              </div>
            </div>
            <div className="ps-5 flex-fill fs-3 align-items-end">¢{price}.00</div>
          </div>

          {/* Rating and Time */}
          <div className="row pt-2">
            <div className="col-8">
              <div className="d-flex justify-content-between rating" >
                <div className="pt-2 px-2 border rounded">
                  <div className="d-flex">
                    <i
                      className="bi bi-star-half rateicon"
                     
                    ></i>
                    <div className="flex-fill ps-2">
                      {rating}.0({comment})
                    </div>
                  </div>
                </div>

                <div className="pt-2  px-2 border rounded">
                  <div className="d-flex time">
                    <i className="bi bi-alarm"></i>
                    <div className="flex-fill ps-2">{time} min</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div
                className="p-2 add-to-cart">
                <div
                  className="d-flex align-items-end flex-column mb-3 add-to-cart-border "> 
                  <i className="bi bi-cart2 fs-2 pt-2 pe-3"></i>
                </div>
              </div>
            </div>
          </div>

        
      </Card.Body>
    </Card>
  );
}

export default Food;
