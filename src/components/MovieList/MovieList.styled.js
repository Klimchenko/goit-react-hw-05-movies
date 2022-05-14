import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
