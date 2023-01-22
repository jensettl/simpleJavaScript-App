import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MediaCard from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='card'>
        <h1>Overview</h1>
        <p>Click on a card to learn more about the chapter</p>
      </div>
      <div className='grid'>
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}
export default App;
