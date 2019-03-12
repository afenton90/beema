import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const Spinner = styled.div`
  border: 2px solid #585858;
  border-radius: 50%;
  border-right: 2px solid transparent;
  width: ${props => props.scale || 50}px;
  height: ${props => props.scale || 50}px;
  animation: ${Spin} 1s linear infinite;
`
