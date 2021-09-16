import React, { useState } from "react";
import "./styles.css";
const foodDB = {
  indian: [
    {
      name: "chicken tikka masala",
      rating: "4.5/5",
      description:
        " dish consisting of roasted marinated chicken chunks in spiced curry sauce"
    },
    {
      name: "Biryani",
      rating: "4/5",
      description:
        "Dish made with Indian spices, rice, and meat usually that of chicken, goat, lamb"
    },
    {
      name: "Butter chicken",
      rating: "3.5/5",
      description: "curry of chicken in a spiced tomato, butter and cream sauce"
    },
    {
      name: "samosa",
      rating: "4.3/5",
      description:
        "fried or baked pastry with a savory filling like spiced potatoes, onions, peas"
    },
    {
      name: "Naan",
      rating: "4.1/5",
      description: " leavened, oven-baked or tawa-fried flatbread"
    }
  ],
  chinese: [
    {
      name: "orange chicken",
      rating: "4.0/5",
      description:
        "chopped, battered and fried chicken pieces coated in a sweet orange-flavored chili sauce"
    },
    {
      name: "sweet and sour pork",
      rating: "4.5/5",
      description:
        "ubes of white meat chicken deep-fried in batter and served with sweet and sour sauce"
    },
    {
      name: "sesame chicken",
      rating: "2.5/5",
      description:
        "chickenpieces are de-boned, battered and Chinese deep-fried, then dressed with a translucent, reddish-brown sweet sauce"
    },
    {
      name: "peking duck",
      rating: "4.8/5",
      description:
        "Duck bred are slaughtered and seasoned before being roasted in a closed or hung oven"
    },
    {
      name: "dim sums",
      rating: "4.9/5",
      description:
        "dishes are made of seafood, chopped meats, or vegetables wrapped in dough or thin wrappings and steamed, deep-fried, or pan-fried."
    }
  ],
  continental: [
    {
      name: "yorkshire Lamb patties",
      rating: "4.5/5",
      description:
        "chicken hearts, spleens and liver mixed with bits of lamb cooked on a flat grill, seasoned with onion, garlic"
    },
    {
      name: "chicken and cheese salad",
      rating: "4.4/5",
      description:
        "Dishes comprise of chopped chicken meat and a binder, such as mayonnaise, salad dressing or cream cheese"
    },
    {
      name: "strudel",
      rating: "3.5/5",
      description:
        "layered pastry with a filling that is usually sweet of Austrian origin"
    },
    {
      name: "Currywurst",
      rating: "2.5/5",
      description:
        " fast food dish of German origin consisting of steamed, and fried pork sausage "
    },
    {
      name: "Pierogi",
      rating: "4.6/5",
      description:
        "Poland dishcomprises filled dumplings made by wrapping unleavened dough around a savoury or sweet filling"
    }
  ],
  korean: [
    {
      name: "Hoeddeok",
      rating: "4.2/5",
      description: " type of filled Korean pancake"
    },
    {
      name: "Bulgogi",
      rating: "3.8/5",
      description:
        "Korean-style grilled or roasted dish made of thin, marinated slices of beef or pork grilled on a barbecue"
    },
    {
      name: "Samgyeopsal",
      rating: "3.2/5",
      description:
        "hick, fatty slices of pork belly  are grilled on a slanted metal griddle or a gridiron at the diners"
    },
    {
      name: "japchae",
      rating: "4.4/5",
      description:
        "savory and slightly sweet dish of stir-fried glass noodles and vegetables that is popular in Korean cuisine"
    },
    {
      name: "kimchi",
      rating: "4.0/5",
      description:
        " traditional side dish of salted and fermented vegetables, such as napa cabbage and Korean radish, made with a widely varying selection of seasonings"
    }
  ]
};
export default function App() {
  const [foodItem, setFoodItem] = useState("indian");
  function buttonClickHandler(item) {
    // console.log("clicked");
    setFoodItem(item);
  }

  return (
    <div className="App">
      <h1>
        <span role="img">🥙🥗</span>goodcuisine
      </h1>
      <p>
        checkout my favourite dishes.
        <br />
        select a genre to get started.
      </p>
      <div>
        {Object.keys(foodDB).map((item) => (
          <button
            onClick={() => buttonClickHandler(item)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              margin: "1rem 0.3rem",
              borderRadius: "0.5rem",
              border: "1px Solid black "
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div
        style={{
          textAlign: "left"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {foodDB[foodItem].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                border: "1px solid ",
                width: "70%",
                padding: "1rem 1rem",
                margin: "0.3rem ",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  fontWeight: "bolder",
                  marginBottom: "0.3rem"
                }}
              >
                {food.name}
              </div>
              <div style={{ fontSize: "smaller", marginBottom: "0.3rem" }}>
                {food.rating}
              </div>
              <div style={{ fontSize: "smaller" }}>{food.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
