import styled from 'styled-components';
import {
  space,
  alignItems,
  borderRadius,
  justifyContent,
  display,
  minWidth,
  verticalAlign,
  background,
  color,
  fontSize
} from 'styled-system';

import { ss } from '../styled-with-default';

export const Badge = styled.span`
  box-sizing: border-box;
  height: 22px;
  ${ss(space, { pt: 0, pb: 0, pl: 1, pr: 1 })}
  ${ss(minWidth, { minWidth: '22px' })}
  ${ss(borderRadius, { borderRadius: '500px' })}
  ${ss(verticalAlign, { verticalAlign: 'middle' })}
  ${ss(justifyContent, { justifyContent: 'center' })}
  ${ss(alignItems, { alignItems: 'center' })}
  ${ss(display, { display: 'inline-flex' })}
  ${ss(background, { background: '#1e87f0' })}
  ${ss(color, { color: '#fff' })}
  ${ss(fontSize, { fontSize: '1' })}
`;
