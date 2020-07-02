import React from 'react';
import Home from './container/home'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const CustomContainer = styled.div`
  background-color:#303841;
`;

const BodyContainer = styled(Container)`
  display: flex;
  justify-content:center;
  flex-direction:column;
  background-color:#303841;
  color:#EEEEEE;
  width:100%;
  height:100%;
`;

function App() {
  return (
    <CustomContainer>
      <BodyContainer >
        <Home />
      </BodyContainer>
    </CustomContainer>
  );
}

export default App;
