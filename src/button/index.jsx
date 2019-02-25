import styled from 'styled-components';

export const Button = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  font: inherit;
  color: inherit;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 30px;
  vertical-align: middle;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  transition-property: color, background-color, border-color;

  background-color: transparent;
  color: #222;
  border: 1px solid #e5e5e5;

  :not(:disabled) {
    cursor: pointer;
  }

  :active,
  :hover,
  :focus {
    background-color: transparent;
    color: #222;
    border-color: #b2b2b2;
  }

  :active {
    border-color: #999;
  }

  :hover {
    text-decoration: none;
  }

  :focus {
    outline: none;
  }
`;
