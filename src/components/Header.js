import styled from 'styled-components'

import DBLogo from '../images/db.svg'

const DBHeader = styled("div")`
  z-index: 2001;
  position: relative;
  background: #4A4A4A;
  width: 100%;
  height: 2vh;
  padding: 0.2em 0;
  color: white;
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
`;

const Header = () => {
  return (
    <DBHeader>
      <img src={DBLogo} alt="Daily Bruin" />
    </DBHeader>
  )
}

export default Header;