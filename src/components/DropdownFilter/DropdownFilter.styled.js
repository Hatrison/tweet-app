import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 18px;
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

export const Popup = styled.div`
  position: absolute;
  z-index: 2;
  top: 70px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
