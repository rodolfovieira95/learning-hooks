import React, { useState } from 'react';

const Home = () => {
  // [stateName, functionName] = useState(initialValue)
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Couner: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button> {/*functionName(whatToDo)*/}
    </>
  );
}
export default Home;