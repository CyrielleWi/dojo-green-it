import styled from 'styled-components';
import { colorUsage, fontFamily, fontSize, fontWeight, getSpacing, lineHeight } from 'stylesheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${getSpacing(10)};
`;
HomeContainer.displayName = 'HomeContainer';

export const Title = styled.h1`
  font-weight: ${fontWeight.normal};
  font-family: ${fontFamily.title};
  font-size: ${fontSize.XXLarge};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.primaryTextColor};
  margin-bottom: ${getSpacing(12)};
`;
Title.displayName = 'Title';

export const SubTitle = styled.h1`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.subtitle};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.secondaryTextColor};
  margin-bottom: ${getSpacing(5)};
`;
SubTitle.displayName = 'SubTitle';

export const Announcement = styled.h1`
  font-weight: ${fontWeight.normal};
  font-family: ${fontFamily.subsubtitle};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  color: ${colorUsage.primaryTextColor};
  margin-bottom: ${getSpacing(5)};
`;
Announcement.displayName = 'Announcement';

export const Section = styled.div`
  margin-top: ${getSpacing(5)};
  // align-self: start;
`;
Section.displayName = 'Section';
