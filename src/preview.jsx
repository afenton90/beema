import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Button, Card, CardBody, Avatar, AvatarHeading, AvatarImage } from './index';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
`;

const Preview = () => (
  <Fragment>
    <h2>Avatars</h2>
    <Container>
      <Avatar>
        <AvatarImage src="https://avatars2.githubusercontent.com/u/8963736?s=460&v=4" />
        <AvatarHeading>Alex Fenton</AvatarHeading>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatars3.githubusercontent.com/u/14904083?s=460&v=4" />
        <AvatarHeading>Stefan McCready</AvatarHeading>
      </Avatar>
    </Container>
    <h2>Avatars - No Label</h2>
    <Container>
      <Avatar>
        <AvatarImage src="https://avatars2.githubusercontent.com/u/8963736?s=460&v=4" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatars3.githubusercontent.com/u/14904083?s=460&v=4" />
      </Avatar>
    </Container>
    <h2>Button</h2>
    <StyledButton>Click Me!</StyledButton>
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
    <h2>Cards - Hover</h2>
    <Container>
      {['one', 'two', 'three'].map(val => (
        <Card key={val} hover>
          <CardBody>
            <h3>Cards are great {val}</h3>
            <p>Some stuff happened, and it was awesome!</p>
          </CardBody>
        </Card>
      ))}
    </Container>
    <h2>Cards - Images</h2>
    <Container>
      <Card hover>
        <img
          src="https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="skyline"
        />
        <CardBody>
          <h3>Cards are great</h3>
          <p>Some stuff happened, and it was awesome!</p>
        </CardBody>
      </Card>
      <Card hover>
        <CardBody>
          <h3>Cards are great</h3>
          <p>Some stuff happened, and it was awesome!</p>
        </CardBody>
        <img
          src="https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="skyline"
        />
      </Card>
    </Container>
  </Fragment>
);

ReactDOM.render(<Preview />, document.getElementById('app'));
