import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {
  Button,
  Card,
  CardBody,
  Avatar,
  AvatarHeading,
  AvatarImage,
  DotNav,
  DotNavItem,
  Divider,
  Input,
  Checkbox,
  RadioButton,
  Textarea,
  Select
} from './index';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
`;

const StyledDivider = styled(Divider)`
  width: 100%;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 5px;
`;

const StyledRadioButton = styled(RadioButton)`
  margin-right: 5px;
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
    <h2>DotNav</h2>
    <Container>
      <DotNav>
        <DotNavItem>Item 1</DotNavItem>
        <DotNavItem active>Item 2</DotNavItem>
        <DotNavItem>Item 3</DotNavItem>
      </DotNav>
    </Container>
    <h2>Divider</h2>
    <Container>
      <StyledDivider />
    </Container>
    <h2>Input</h2>
    <Container>
      <Input type="text" placeholder="Type some stuff" />
    </Container>
    <h2>Checkbox</h2>
    <Container>
      <label htmlFor="opt-1">
        <StyledCheckbox id="opt-1" />
        Option 1
      </label>
      <label htmlFor="opt-2">
        <StyledCheckbox id="opt-2" />
        Option 2
      </label>
    </Container>
    <h2>Radio Button</h2>
    <Container>
      <label htmlFor="opt-3">
        <StyledRadioButton id="opt-3" />
        Option 3
      </label>
      <label htmlFor="opt-4">
        <StyledRadioButton id="opt-4" />
        Option 4
      </label>
    </Container>
    <h2>Textarea</h2>
    <Container>
      <Textarea placeholder="Write something neat here" />
    </Container>
    <h2>Select</h2>
    <Container>
      <Select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    </Container>
  </Fragment>
);

ReactDOM.render(<Preview />, document.getElementById('app'));
