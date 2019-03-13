import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  vertical-align: middle;
  display: inline-block;

  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  font: inherit;
  overflow: visible;

  max-width: 100%;
  width: 100%;
  padding: 0 10px;
  background: #fff;
  color: #666;
  border: 1px solid #e5e5e5;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;

  -webkit-appearance: none;

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  ::placeholder,
  ::-moz-placeholder {
    opacity: 1;
    color: #999;
  }

  :focus {
    outline: none;
    background-color: #fff;
    color: #666;
    border-color: #1e87f0;
  }

  :disabled {
    background-color: #f8f8f8;
    color: #999;
    border-color: #e5e5e5;
  }
`;
