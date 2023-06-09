import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  padding: 20px;
  font-size: 42px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: fit-content;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 28px;
  text-transform: uppercase;
  text-decoration: none;
  color: #373737;
  border: none;
  border-radius: 10.3108px;
  appearance: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: #ebd8ff;
`;
