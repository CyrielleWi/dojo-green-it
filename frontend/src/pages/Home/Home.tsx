import * as React from 'react';
import { HomeContainer, Logo, Title, SubTitle, Announcement } from './Home.style';
import logo from 'assets/AirTheodo.png';

const Home: React.FunctionComponent = () => (
  <HomeContainer>
    <Title>Bienvenue sur AirTheodo</Title>
    <SubTitle>
      Nous vous accompagnons sur vos plus beaux voyages, de Paris aux Etat-Unis, en passant par
      l&apos;Angleterre !
    </SubTitle>
    <Announcement>Prochain embarquement &gt; Nantes !</Announcement>
    <Logo alt="forgelogo" src={logo} />
  </HomeContainer>
);

export default Home;
