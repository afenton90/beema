import styled from 'styled-components';

export const Select = styled.select`
  max-width: 100%;
  width: 100%;
  border: 0 none;
  padding: 0 10px;
  background: #fff;
  color: #666;
  border: 1px solid #e5e5e5;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;

  text-transform: none;

  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  font: inherit;

  :not([multiple]):not([size]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 20px;
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A');
    background-repeat: no-repeat;
    background-position: 100% 50%;

    height: 40px;
    vertical-align: middle;
    display: inline-block;
  }

  :not([multiple]):not([size])::-ms-expand {
    display: none;
  }

  :focus {
    outline: none;
    background-color: #fff;
    color: #666;
    border-color: #1e87f0;
  }

  :not([multiple]):not([size]):disabled {
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A');
  }

  :disabled {
    background-color: #f8f8f8;
    color: #999;
    border-color: #e5e5e5;
  }
`;
