import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Button, Card, CardBody } from './index';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Preview = () => (
  <Fragment>
    <h2>Button</h2>
    <Button>Click Me!</Button>
    <h2>Cards</h2>
    <Container>
      {['one', 'two', 'three'].map(val => (
        <Card key={val}>
          <CardBody>
            <h3>Cards are great {val}</h3>
            <p>Some stuff happened, and it was awesome!</p>
          </CardBody>
        </Card>
      ))}
    </Container>
  </Fragment>
);

ReactDOM.render(<Preview />, document.getElementById('app'));
