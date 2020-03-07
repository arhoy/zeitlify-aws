import React, { useState } from 'react';

import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus/mobileMenu1';

const Header = styled.header`
  margin-top: 2rem;
  color: ${props => props.theme.colors.white};
  position: relative;
  padding: 1rem 0;
  background: transparent;
  display: grid;
  grid-template-columns: 1fr;

  & img {
    & .static {
      position: absolute;
      background: black;
      display: none;
    }
  }
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
  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.white};
  }
  & ${LogoLink} {
    text-decoration: none !important;
    font-size: 3rem;
    line-height: 2.4rem;
  }
`;

const LogoSpan2 = styled.span``;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
`;

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <Logo>
            <LogoLink to="/">
              <i>
                <LogoSpan2>Zeitlify</LogoSpan2>
              </i>
            </LogoLink>
          </Logo>
          <BurgerIcon onClick={mobileMenuHandler} />
          {/* <img className="static" src={cloud} alt="Otter dancing with a fish" /> */}
          <MobileMenu1
            display={mobileMenuOpen.toString()}
            mobileMenuHandler={mobileMenuHandler}
          />
        </HeaderTop>
      </Header>
    </>
  );
};

export default Nav;
