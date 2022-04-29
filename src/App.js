import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TitleText from './TitleText';
import ExpenseTracker from './ExpenseTracker';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <TitleText />
      <ExpenseTracker />
    </Container>
  );
}

export default App;
