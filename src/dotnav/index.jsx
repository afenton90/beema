import React from 'react';
import styled from 'styled-components';

export const DotNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const DotNavItemContainer = styled.li`
  flex: none;
  padding-left: 12px;
`;

const DotNavAnchor = styled.a`
  display: block;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  text-indent: 100%;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid rgba(102, 102, 102, 0.4);
  transition: 0.2s ease-in-out;
  transition-property: background-color, border-color;

  ${({ active }) =>
    active &&
    `
      background-color: rgba(102,102,102,0.6);
      border-color: transparent;
  `}

  :hover, :focus {
    background-color: rgba(102, 102, 102, 0.6);
    outline: none;
    border-color: transparent;
  }

  :active {
    background-color: rgba(102, 102, 102, 0.2);
    border-color: transparent;
  }
`;

export const DotNavItem = ({ children, ...props }) => (
  <DotNavItemContainer>
    <DotNavAnchor {...props}>{children}</DotNavAnchor>
  </DotNavItemContainer>
);
