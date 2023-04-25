import { Container, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <Container>
      Hello, dear user!
      <StyledLink to="/tweets">Go to tweets</StyledLink>
    </Container>
  );
};

export default Home;
