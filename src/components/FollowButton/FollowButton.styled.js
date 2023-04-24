import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;
  border: none;
  border-radius: 10.3108px;
  appearance: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: ${props => (props.isFollowing ? '#5CD3A8' : '#EBD8FF')};
`;
