import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  transition: box-shadow 0.1s ease-in-out;
  background: #fff;
  color: #666;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

export const CardBody = styled.div`
  padding: 30px 30px;

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

  @media (min-width: 1200px) {
    padding: 40px 40px;
  }
`;
