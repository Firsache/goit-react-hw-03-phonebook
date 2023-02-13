import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 20px;
  padding-top: 0;

  &:last-of-type {
    padding-bottom: 0px;
  }
`;

export const Title = styled.h2`
  padding-bottom: 15px;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 1.2px;
  text-shadow: 2px 2px 2px #ff6b08;
  text-align: ${({ titlePosition }) => titlePosition};
`;
