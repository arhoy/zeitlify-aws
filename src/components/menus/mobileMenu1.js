import React from 'react';

import styled from '@emotion/styled';

import NoStyleLink from '../Links/NoStyleLink';

const ModalBackground = styled.div`
  transition: all 0.6s ease-in;
  visibility: ${props => (props.display !== 'false' ? 'block' : 'hidden')};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => (props.display !== 'false' ? 'black' : 'transparent')};
  opacity: 0.7;
`;

const MobileMenuContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin: 0;

  transition: all 0.4s ease-in;
  z-index: 11;
  background: ${props => props.theme.colors.white};
  visibility: ${props => (props.display !== 'false' ? 'block' : 'hidden')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  position: fixed;
  font-size: 2.2rem;
  top: 0;
  right: ${props => (props.display !== 'false' ? '0' : '-100%')};
`;

const LinkContainerUl = styled.ul`
  padding: 80px 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LinkWrapper = styled.li`
  padding: 1rem;
  border-bottom: 2px solid black;
`;

const StyledLink = styled(NoStyleLink)`
  width: 100%;
  color: ${props => props.theme.colors.black};
  padding: 0 1rem;

  transition: all 0.25s;

  text-align: left;
  &:hover {
    background-image: linear-gradient(
      0deg,
      ${props => props.theme.colors.lightgrey} 50%,
      transparent 50%
    );
  }
`;

export const MobileMenu1 = ({ mobileMenuHandler, display }) => {
  return (
    <>
      <ModalBackground display={display} onClick={mobileMenuHandler} />
      <MobileMenuContainer display={display}>
        <LinkContainerUl>
          <LinkWrapper>
            <StyledLink to="/about"> About </StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/services"> Services </StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/blog"> Blog </StyledLink>
          </LinkWrapper>
          <LinkWrapper style={{ borderBottom: 'none' }}>
            <StyledLink to="/contact"> Contact </StyledLink>{' '}
          </LinkWrapper>
        </LinkContainerUl>
      </MobileMenuContainer>
    </>
  );
};
