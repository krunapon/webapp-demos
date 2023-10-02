import {useState} from 'react';
import { sculptureList } from "./data.js";
export default function Gallery() {
  // index is a state varialbe
  // setIndex is the setter function
  // The array returned by useState always has exactly two items
  const [index, setIndex] = useState(0);
  
  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handleClick}>
      Next
    </button>
    <h2>
      <i>{sculpture.name}</i>
      by {sculpture.artist}
    </h2>
    <h3>({index + 1} of {sculptureList.length})</h3>
    <img 
    src = {sculpture.url} alt={sculpture.alt}
    />
    <p>
      {sculpture.description}
    </p>
    </>
  )
}