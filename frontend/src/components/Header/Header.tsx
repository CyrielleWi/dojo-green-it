import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from 'assets/AirTheodo.png';
import { PATHS } from 'routes';
import { Logo, HeaderContainer } from './Header.style';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <RouterLink to={PATHS.HOME}>
        <Logo alt="Forge logo" src={logo} />
      </RouterLink>
    </HeaderContainer>
  );
};

export default Header;
