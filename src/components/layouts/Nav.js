import React, { useState } from 'react';

import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus/mobileMenu1';

import NoStyleLink from '../Links/NoStyleLink';

import '../../scss/menu_hovers/menuhover.scss';

const Header = styled.header`
  position: relative;
  padding: 3rem 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  & ${LogoLink} {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: 4px;
    color: ${props => props.theme.colors.white};
  }
`;

const LogoSpan2 = styled.span`
  font-size: 4.5rem;
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  color: inherit;
  font-size: 3rem;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomLink = styled(NoStyleLink)`
  overflow: hidden;
  display: inline;
  position: relative;

  font-size: 2rem;
  color: ${props => props.theme.colors.white};
  margin: 1rem;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0px;
    background: ${props => props.theme.colors.white};
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <Header>
      <HeaderTop>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>Z</LogoSpan2>eitlify
          </LogoLink>
        </Logo>

        <MenuLinks>
          <CustomLink className="underline" to="/about">
            About
          </CustomLink>
          <CustomLink className="underline" to="/services">
            Services
          </CustomLink>
          <CustomLink className="underline" to="/blog">
            Blog
          </CustomLink>
          <CustomLink className="underline" to="/contact">
            Contact
          </CustomLink>
        </MenuLinks>

        <BurgerIcon onClick={mobileMenuHandler} />

        <MobileMenu1
          display={mobileMenuOpen.toString()}
          mobileMenuHandler={mobileMenuHandler}
        />
      </HeaderTop>
    </Header>
  );
};

export default Nav;
