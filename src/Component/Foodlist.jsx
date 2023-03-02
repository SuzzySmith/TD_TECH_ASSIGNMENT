import React from 'react'
import Food from './Food'
import food1 from './assets/Food1.png';
import food2 from './assets/Food2.png';
import food3 from './assets/Food3.png';
import food4 from './assets/Food4.png';
import food5 from './assets/Food5.png';

function Foodlist() {
    const foods = [
        {foodtitle : "Potato Chips with Chicken", 
        restaurant : "KFC",
        price : 70,
        closed : true,
        image : food1,
        rating : 4.0,
        comment : 100,
        time : "10-15"
     },
     {foodtitle : "Chicken Khebab", 
     restaurant : "Bourbon Kitchen",
     price : 70,
     closed : false,
     image : food2,
     rating : 4.0,
     comment : 100,
     time : "10-15"
  },
  {foodtitle : "Rice spagetti stir-fry", 
     restaurant : "Tasty rails",
     price : 70,
     closed : true,
     image : food3,
     rating : 4.0,
     comment : 100,
     time : "10-15"
  },
  {foodtitle : "Jollof rice with Khebab ", 
     restaurant : "Jollof restaurant",
     price : 30,
     closed : false,
     image : food4,
     rating : 4.0,
     comment : 100,
     time : "10-15"
  } ,
  {foodtitle : "Potato Chips with burger", 
     restaurant : "Jojo Foods",
     price : 30,
     closed : false,
     image : food5,
     rating : 4.0,
     comment : 100,
     time : "10-15"
  } 
        
    ]
  return (
    <>{ foods.map((food, index) => (<Food food = {food} key = {index}/>) )}</>
   
 
  )
}

export default Foodlist