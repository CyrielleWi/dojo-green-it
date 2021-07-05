import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import {
  ChooseDestinationContainer,
  DestinationInput,
  Tooltip,
  Title,
} from './ChooseDestination.style';
import * as _ from 'lodash';

const ChooseDestination: React.FC = () => {
  const [destination, setDestination] = useState('');

  const handleDestinationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDestination(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => _.debounce(handleDestinationChange, 300), []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  return (
    <ChooseDestinationContainer>
      <Title>Choisissez votre prochaine destination !</Title>
      <DestinationInput
        onChange={debouncedChangeHandler}
        placeholder={'Où souhaitez-vous aller ?'}
        hasError={false}
      ></DestinationInput>
      {destination && (
        <Tooltip>
          Oups, vous avez sélectionné {destination}, mais cette destination n&lsquo;est pas encore
          disponible !
        </Tooltip>
      )}
    </ChooseDestinationContainer>
  );
};

export default ChooseDestination;
