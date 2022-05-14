import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  height: 460px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #fff;
  box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #160e5a,
    0 20px 15px #988feb;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 100%;
  width: 300px;
  height: 400px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 2px 1px #fff, 0 5px 4px #473cad, 0 11px 8px #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #66d1a4;
  }
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #331fe4;
  text-shadow: 0 2px 1px #fff, 0 5px 4px #08042b;
`;
