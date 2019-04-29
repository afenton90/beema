import styled from 'styled-components';
import { space, backgroundColor, color, position } from 'styled-system';

import { ss } from '../styled-with-default';

export const Card = styled.div`
  box-sizing: border-box;
  transition: box-shadow 0.1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  ${ss(position, { position: 'relative' })}
  ${ss(backgroundColor, { backgroundColor: '#fff' })}
  ${ss(color, { color: '#666' })}

  ${({ hover }) =>
    hover
      ? `
    :hover {
      box-shadow: 0 14px 25px rgba(0,0,0,0.16);
    }
  `
      : ``}
`;

export const CardBody = styled.div`
  ${ss(space, { p: 6 })}

  ::before,
  ::after {
    content: '';
    display: table;
  }

  ::after {
    clear: both;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
