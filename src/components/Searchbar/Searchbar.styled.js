import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  max-width: 800px;
  border-radius: 5px;
  border: 1px solid #740526;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 2px 1px #331fe4, 0 5px 4px #fff, 0 11px 8px #2c2285;
    border: 1px solid #331fe4;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;

  &::placeholder {
    font: inherit;
  }
`;

export const Button = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 180px;
  height: 100%;
  border: 0;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  line-height: 24px;
  font-weight: 600;
  color: #000;
  text-shadow: 0 2px 1px #000;
  opacity: 0.7;
  background-image: linear-gradient(
    to right,
    #331fe4 15%,
    #988feb 50%,
    #331fe4
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
    color: #fff;
  }
`;
