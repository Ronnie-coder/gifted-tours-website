import styled from 'styled-components';

const Foot = styled.footer`
  background:${({ theme }) => theme.colours.text};
  color:#fff;
  padding:32px;
  text-align:center;
`;

function Footer() {
  return <Foot>© {new Date().getFullYear()} Gifted Tours • Cape Town</Foot>;
}

export default Footer;