import * as React from 'react';
import { HomeContainer, Title, SubTitle, Announcement, Section } from './Home.style';
import Slider from 'components/Slider';
import moment from 'moment';
import ChooseDestination from '../../components/ChooseDestination';
import Mapbox from 'components/Mapbox';

const Home: React.FunctionComponent = () => {
  const getFormattedDate = (): string => {
    return moment(Date.now())
      .add(7, 'days')
      .format('DD/MM/YYYY');
  };

  return (
    <HomeContainer>
      <Title>Bienvenue sur AirTheodo</Title>
      <SubTitle>
        Nous vous accompagnons sur vos plus beaux voyages, de Paris aux Etat-Unis, en passant par
        l&apos;Angleterre !
      </SubTitle>
      <Announcement>Prochain embarquement &gt; Nantes le {getFormattedDate()}</Announcement>
      <Slider></Slider>

      <Section>
        <ChooseDestination></ChooseDestination>
      </Section>
      <Section>
        <SubTitle>Où nous trouver ?</SubTitle>
        <Mapbox />
      </Section>
    </HomeContainer>
  );
};

export default Home;
