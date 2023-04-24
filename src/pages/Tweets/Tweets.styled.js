import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
`;

export const InnerContainer = styled.div`
  max-width: 1236px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  align-self: center;
`;
