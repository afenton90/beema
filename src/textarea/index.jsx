import styled from 'styled-components';

export const Textarea = styled.textarea`
  padding-top: 4px;
  padding-bottom: 4px;
  vertical-align: top;

  max-width: 100%;
  width: 100%;
  border: 0 none;
  padding: 0 10px;
  background: #fff;
  color: #666;
  border: 1px solid #e5e5e5;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;

  -webkit-appearance: none;

  overflow: auto;

  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  font: inherit;

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

  ::placeholder,
  ::-moz-placeholder {
    opacity: 1;
    color: #999;
  }
`;
