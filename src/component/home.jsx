import React, { useState, useEffect } from 'react';

const Home = () => {
  // [stateVariableName, functionName] = useState(initialValue)
  const [display, setDisplay] = useState('');
  const [numberhelper, numberHelper] = useState('');
  const [operator, setOperator] = useState('');
  const [reset, resetDisplay] = useState(false);

  // Works as componentDidMount, componentDidUpdate and componentWillUnmount.
  useEffect(() => {
  }, [operator]);

  const clickHandler = value => typeof value === 'number' ? numberClickHandler(value) : operatorClickHandler(value);
  const numberClickHandler = number => {
    if (reset) {
      resetDisplay(false)
      setDisplay('');
      setDisplay(oldNumber => oldNumber + String(number))
    } else {
      setDisplay(oldNumber => oldNumber + String(number));
    }
  }

  const operatorClickHandler = operator => {
    if (operator === '=') {
      equalClickHandler();
    } else {
      numberHelper(display)
      setDisplay(operator);
      setOperator(operator);
      resetDisplay(true)
    }
  }

  const operationHandler = (firstValue, secondValue) => {
    switch (operator) {
      case '+': return Number(firstValue) + Number(secondValue);
      case '-': return Number(firstValue) - Number(secondValue);
      case 'x': return Number(firstValue) * Number(secondValue);
      case ':': return Number(firstValue) / Number(secondValue);
      default: return 0;
    }
  }

  const equalClickHandler = () => {
    const result = operationHandler(numberhelper, display)
    setDisplay(result)
    resetDisplay(true)
  }

  const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', ':', 'x', '='];
  return (

    <>
      <p>Display: {display}</p>
      {keys.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        )
      })}
    </>
  );
}
export default Home;