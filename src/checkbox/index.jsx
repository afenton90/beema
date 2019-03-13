import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  height: 16px;
  width: 16px;
  overflow: hidden;
  margin-top: -4px;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 1px solid #ccc;
  transition: 0.2s ease-in-out;
  transition-property: background-color, border;

  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  font: inherit;

  :not(:disabled) {
    cursor: pointer;
  }

  :focus {
    outline: none;
    border-color: #1e87f0;
  }

  :checked,
  :indeterminate {
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A');
  }

  :checked:focus,
  :indeterminate:focus {
    background-color: #0e6dcd;
  }

  :disabled {
    background-color: #f8f8f8;
    border-color: #e5e5e5;
  }

  :disabled:checked,
  :disabled:indeterminate {
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A');
  }
`;

export const Checkbox = props => <Input {...props} type="checkbox" />;
