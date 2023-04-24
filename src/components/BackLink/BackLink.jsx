const { StyledLink } = require('./BackLink.styked');

const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default BackLink;
