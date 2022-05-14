import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 5px;
  text-align: center;
  color: #000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 22px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  min-width: 180px;
  background-image: linear-gradient(
    to right,
    #08042b 15%,
    #331fe4 50%,
    #08042b
  );
  color: #fff;
  text-shadow: 0 2px 1px #fff;
  opacity: 0.8;
  box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
    color: #fff;
    box-shadow: 0 2px 1px #331fe4, 0 5px 4px #473cad, 0 11px 8px #2c2285;
  }
`;
