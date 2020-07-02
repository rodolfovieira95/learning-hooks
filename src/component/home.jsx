import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

const CustomContainer = styled(Container)`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:500px;
  font-family:Roboto;
  font-size:72px;
`;

const Display = styled.div`
  display:flex;
  justify-content:flex-end;
`;

const ButtonsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  width: 500px;
`;

const NumberButton = styled(Button)`
width:${ (props) => props.button === 0 ? '220px' : '100px'};
height:100px;
margin:10px;
font-family:Roboto;
font-size:40px;
`;

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
    }
    if (operator === '%') {
      percentageClickHandler();
    } 
    else {
      numberHelper(display)
      setDisplay(operator === 'C' || operator === 'AC' ? '' : operator);
      setOperator(operator);
      resetDisplay(true)
    }
  }

  const operationHandler = (firstValue, secondValue) => {
    switch (operator) {
      case '+': return Number(firstValue) + Number(secondValue);
      case '-': return Number(firstValue) - Number(secondValue);
      case 'x': return Number(firstValue) * Number(secondValue);
      case '÷': return Number(firstValue) / Number(secondValue);
      // case 'C': return Number(secondValue);
      case 'AC': {
        numberHelper('')
        setOperator('')
        resetDisplay(false)
        setDisplay('')
        return 0;
      }
      default: return 0;
    }
  }

  const equalClickHandler = () => {
    const result = operationHandler(numberhelper, display)
    setDisplay(result)
    resetDisplay(true)
  }

  const percentageClickHandler = () => {
    let result = 0;
    const percentage = Number(display) / 100;

    switch (operator) {
      case '+': result = Number(numberhelper) + Number(numberhelper) * percentage; break;
      case '-': result = Number(numberhelper) - Number(display) * percentage; break;
      case 'x': result = Number(numberhelper) * percentage; break;
      case '÷': result = Number(numberhelper) / percentage; break;
      // case 'C': return Number(secondValue);
      case 'AC': {
        numberHelper('')
        setOperator('')
        resetDisplay(false)
        setDisplay('')
        return 0;
      }
      default: return 0;
    }
    setDisplay(result)
  }

  const keys = ['C', 'AC', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <CustomContainer>
      <Display>{display === '' ? 0 : display}</Display>
      <ButtonsContainer>
        {keys.map((item, index) => {
          return (
            <NumberButton
              variant="secondary"
              key={index}
              button={item}
              onClick={() => clickHandler(item)}
            >
              {item}
            </NumberButton>
          )
        })}
      </ButtonsContainer>
    </CustomContainer>
  );
}
export default Home;