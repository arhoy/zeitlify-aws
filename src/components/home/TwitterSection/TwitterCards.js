import React from 'react';

import styled from '@emotion/styled';

import { FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  border-radius: 8px;
  color: rgba(14, 30, 37, 0.8);
  -webkit-box-shadow: 10px 10px 16px -8px rgba(240, 240, 240, 1);
  -moz-box-shadow: 10px 10px 16px -8px rgba(240, 240, 240, 1);
  box-shadow: 10px 10px 16px -8px rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 0.8rem;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  max-width: 50rem;
  padding: 2rem;
  margin: 0 1rem;
  position: relative;
  text-align: left;
  text-shadow: none;
  outline: none;
`;

const Blurb = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  & span {
    color: ${props => props.theme.colors.primaryLight};
    font-weight: 500;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  font-weight: bold;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;

  &.red {
    background: #ff7070;
  }
  &.green {
    background: #89ffb6;
  }
  &.blue {
    background: #89ccff;
  }
  &.purple {
    background: #9989ff;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  & h6 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & .profileSection {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
  }

  & .profileSubSection {
    display: flex;
    align-items: center;
  }
`;

const TwitterIcon = styled(FaTwitter)`
  font-size: 1.4rem;
  margin-right: 3px;
  color: ${props => props.theme.colors.grey};
`;

const TwitterCard1 = () => {
  return (
    <Container>
      <Blurb>
        <span> http://ReVuejs.org </span> is now powered by{' '}
        <span>@Zeitlify </span>
        with a free open source team plan. Really really impressive and smooth
        deployment experience.
      </Blurb>
      <ProfileContainer>
        <Circle className="red"> E </Circle>
        <div className="profileSection">
          <h6>Evan Vu</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @evanvu </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard2 = () => {
  return (
    <Container>
      <Blurb>
        I am extremely impressed by the power and automation that
        <span>@Zeitlify </span>
        delivers. It has really made a difference in the workflow at
        <span> @NoRealTesla </span>
      </Blurb>
      <ProfileContainer>
        <Circle className="green"> E </Circle>
        <div className="profileSection">
          <h6>Elon Musk</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @elongmusk </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard3 = () => {
  return (
    <Container>
      <Blurb>
        <span>@VirginGalaxy </span> we using <span> @Zeitlify </span> to power
        our engine booster rockets to deliver privatization of space flights.
        What a journey
      </Blurb>
      <ProfileContainer>
        <Circle className="purple"> R </Circle>
        <div className="profileSection">
          <h6>Richard Hanson</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @richhanson </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const TwitterCard4 = () => {
  return (
    <Container>
      <Blurb>
        <span>@Amazone </span> using <span> @Zeitlify </span> to for our drone
        project, Thanks for parterning with us to make this project a reality
        and billions more to my wallet.
        <span>@ZeitlifyRocks!</span>
      </Blurb>
      <ProfileContainer>
        <Circle className="blue"> J </Circle>
        <div className="profileSection">
          <h6>Jeff Bayzos</h6>
          <div className="profileSubSection">
            <TwitterIcon /> <span> @beyzosunreal </span>
          </div>
        </div>
      </ProfileContainer>
    </Container>
  );
};

export { TwitterCard1, TwitterCard2, TwitterCard3, TwitterCard4 };
