import React from "react";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
  },
  {
    id: 2,
    name: "bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      {/* img 는 alt prop 이 있어야 함. 시각 장애인 위한 것 */}
      <img src={picture} alt={name} />
    </div>
  );
}

// jsx 는 HTML + javascript
function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        // key 를 주는 이유. React 의 모든 element 는 다르게 보여야 함. Food component 로 전달되지 않고, 리액트 내부에서 사용
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
