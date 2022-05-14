import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #160e5a,
    0 20px 15px #988feb;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 100%;
  width: 220px;
  height: 260px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  padding: 4px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #331fe4;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #331fe4;
`;
