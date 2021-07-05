import * as React from 'react';
import { HomeContainer, Title, SubTitle, Announcement } from './Home.style';
import Slider from 'components/Slider';
import moment from 'moment';

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
    </HomeContainer>
  );
};

export default Home;
