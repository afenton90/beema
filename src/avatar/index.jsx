import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  padding-right: 30px;
  height: 80px;
  width: 80px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;

export const AvatarImage = ({ src }) => {
  return <Image src={src} />;
};

export const AvatarHeading = styled.div`
  flex: 1;
`;
