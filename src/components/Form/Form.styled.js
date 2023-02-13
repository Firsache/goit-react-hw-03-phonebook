import styled from 'styled-components';

export const FormComponent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 5px 5px 5px 10px;
  width: 250px;
  border: 2px solid #000000;
  border-radius: 3px;
  background-color: transparent;
  font-size: 16px;
  transition: border-color 200ms ease-in-out, outline-color 200ms ease-in-out;

  &:hover {
    border-color: #ff6b08;
    outline-color: #ff6b08;
    background-color: transparent;
  }
  &:focus {
    border-color: #ff6b08;
    outline-color: #ff6b08;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 7px 5px;
  width: 120px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 1.3px;
  text-align: center;
  background-color: #ff6b08;
  color: #ffffff;
  border-radius: 3px;
  border: 2px solid #ff6b08;
  outline: none;

  transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
    transform 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: #000000;
    transform: translateY(-2px);
  }
`;
