import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Components/Assets/css/main.scss";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
