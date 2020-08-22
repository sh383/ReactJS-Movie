import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
  },
  {
    name: "bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg",
  },
];

// jsx 는 HTML + javascript
function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
