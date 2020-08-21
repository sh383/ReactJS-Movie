import React from "react";

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}
// jsx 는 HTML + javascript
function App() {
  return (
    <div className="App">
      <h1>Hello 22</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pork" />
      <Food fav="beef" />
    </div>
  );
}

export default App;
