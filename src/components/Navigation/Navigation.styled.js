import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 40px;
  font-weight: 700;
  font-size: 35px;
  color: #331fe4;
  text-shadow: 1px 1px 2px #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-shadow: 0 2px 1px #fff, 0 5px 4px #fff, 0 11px 8px #fff;
  }

  &.active {
    color: #fff;
    text-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #2c2285;
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  height: 100px;
  margin-bottom: 10px;
  box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #2c2285;
  transition: box-shadow 600ms cubic-bezier(0.4, 0, 0.3, 1);
  background-image: linear-gradient(
    to right,
    #08042b 15%,
    #331fe4 50%,
    #08042b
  );
  &:hover {
  }
`;
