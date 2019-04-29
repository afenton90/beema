import styled from 'styled-components';
import { space, flexWrap, flex, display, alignItems } from 'styled-system';

import { ss } from '../styled-with-default';

export const Avatar = styled.div`
  list-style: none;
  ${ss(display, { display: 'flex' })}
  ${ss(flexWrap, { flexWrap: 'wrap' })}
  ${ss(space, { margin: 0, padding: 0 })}
  ${ss(alignItems, { alignItems: 'center' })}
`;

export const AvatarImage = styled.img`
  height: 80px;
  width: 80px;
  ${ss(space, { paddingRight: 6 })}
`;

export const AvatarHeading = styled.div`
  ${ss(flex, { flex: 1 })}
`;
