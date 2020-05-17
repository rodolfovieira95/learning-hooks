import React, { useState, useEffect } from 'react';

const Home = () => {
  // [stateVariableName, functionName] = useState(initialValue)
  const [count, setCount] = useState(0);

  // Works as componentDidMount, componentDidUpdate and componentWillUnmount.
  useEffect(() => {
    console.log('You loaded the component for the first time or changed some state. ');
  })
  return (
    <>
      <p>Couner: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button> {/*functionName(whatToDo)*/}
    </>
  );
}
export default Home;