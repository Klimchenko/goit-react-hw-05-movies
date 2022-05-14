import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  width: 330px;
  height: 450px;
  margin-bottom: 50px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #08042b;
  box-shadow: 0 2.8px 2.2px #08042b, 0 6.7px 5.3px #473cad, 0 12.5px 10px #fff,
    0 22.3px 17.9px #160e5a, 0 41.8px 33.4px #08042b, 0 100px 80px #988feb;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

export const Description = styled.div`
  margin-left: 40px;
  flex-direction: column;
`;

export const MainTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 35px;
  font-weight: 600;
  color: #160e5a;
  text-shadow: 0 2px 1px #160e5a, 0 5px 4px #fff, 0 8px 6px #331fe4,
    0 13px 10px #988feb;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #08042b;
  text-shadow: 0 2px 1px #fff, 0 3px 4px #08042b;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const ListGenres = styled.ul``;

export const Genres = styled.li`
  font-size: 20px;
  font-weight: 500;
`;

export const ButtonArrow = styled.button`
  padding: 6px 18px;
  margin-left: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  background-image: linear-gradient(
    to right,
    #08042b 15%,
    #331fe4 50%,
    #08042b
  );
  color: #ffffff70;
  text-shadow: 0 2px 1px #fff;
  box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #2c2285;
  }
`;

export const ListLink = styled.ul`
  margin-left: 40px;
`;

export const TitleLink = styled.h3`
  margin-left: 40px;
  font-size: 28px;
  font-weight: 600;
  color: #08042b;
  text-shadow: 0 2px 1px #fff, 0 3px 4px #08042b;
`;

export const LinkStyled = styled(NavLink)`
  color: #331fe4;
  font-weight: 600;
  font-size: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #160e5a;
  }

  &.active {
    color: #160e5a;
  }
`;
