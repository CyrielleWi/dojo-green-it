import styled from 'styled-components';
import {
  colorUsage,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from '../../stylesheet';
import Input from '../Input';

export const ChooseDestinationContainer = styled.header`
  display: flex;
  flex-direction: column;
`;
ChooseDestinationContainer.displayName = 'ChooseDestinationContainer';

export const DestinationInput = styled(Input)`
  margin-bottom: ${getSpacing(3)};
`;
DestinationInput.displayName = 'DestinationInput';

export const Title = styled.h3`
  font-weight: ${fontWeight.normal};
  font-family: ${fontFamily.main};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.primaryTextColor};
  margin-bottom: ${getSpacing(5)};
`;
Title.displayName = 'Title';

export const Tooltip = styled.div`
  padding: ${getSpacing(3)};
  background-color: ${colorUsage.secondaryColorLight};
  color: ${colorUsage.tooltipTextColor};
  border-radius: 8px;
`;
Tooltip.displayName = 'Tooltip';
