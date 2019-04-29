import styled from 'styled-components';
import { space, border, display, fontSize, textAlign, backgroundColor, color } from 'styled-system';

import { ss } from '../styled-with-default';

export const Button = styled.button`
  overflow: visible;
  text-transform: none;
  box-sizing: border-box;
  vertical-align: middle;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  transition-property: color, background-color, border-color;

  ${ss(space, { m: 0, pt: 1, pb: 1, pl: 6, pr: 6 })}
  ${ss(border, { border: 'none' })}
  ${ss(display, { display: 'inline-block' })}
  ${ss(fontSize, { fontSize: 1 })}
  ${ss(textAlign, { textAlign: 'center' })}
  ${ss(backgroundColor, { backgroundColor: 'transparent' })}
  ${ss(color, { color: '#222' })}

  :not(:disabled) {
    cursor: pointer;
  }

  :active,
  :hover,
  :focus {
    ${ss(backgroundColor, { backgroundColor: 'transparent' })}
    ${ss(color, { color: '#222' })}
  }

  :hover {
    text-decoration: none;
  }

  :focus {
    outline: none;
  }
`;
