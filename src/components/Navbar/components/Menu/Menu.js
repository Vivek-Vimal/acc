import React,{ useState } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import styled from 'styled-components';
import logo from '../../logo.svg';
// import twitter from '../../../page/Footer/twitter.svg'
// import opensea from '../../../page/Footer/opensea.svg'
import { Link, animateScroll as scroll } from "react-scroll";

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`

const Link1 = styled(Link)`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    position: absolute;
    left: 2rem;
    top: -0.75rem;

`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    align-items: center;
`;

const Img = styled.img`
    width: 3rem;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`;

const T = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const H = styled(Link)`
      font-size: 1.5rem;
      font-weight: bold;
    font-family: 'Montserrat', sans-serif;
      color: #000;
`;

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  return (
    <StyledMenu open={open}  aria-hidden={!isHidden} {...props}  >
      <Link1 to="home" spy={true} smooth={true}><img src={logo} alt="Logo" style={{width:"8rem",height:"6rem"}}/></Link1>

      <MenuItems >
        <a href="http://accredited-vaults.s3-website-us-west-2.amazonaws.com/#/avax" style={{padding:"0"}} >
           <H to="home" spy={true}  smooth={true}  >Asset Structuring</H> 
        </a>
        <a style={{padding:"0"}}  >
          <H to="learn" spy={true} smooth={true} >Transfer Agent</H>
        </a>
        <a style={{padding:"0"}}  >
          <H to="rarity" spy={true} smooth={true} >Real Estate Tokenization</H>
        </a>
        <a style={{padding:"0"}}  >
         <H to="faq" spy={true} smooth={true} >HNI’s & Family Offices</H> 
        </a>
        {/* <a style={{padding:"0"}}  >
         <H to="roadmap" spy={true} smooth={true} >Docs</H> 
        </a>
        <a style={{padding:"0"}}  >
         <H to="roadmap" spy={true} smooth={true} >How it Works</H> 
        </a> */}
      </MenuItems>

      <Right>
        {/* <Flex>
          <Img src={twitter} alt="" />
          <Img src={opensea} alt="" />
        </Flex> */}
        <T>2022 @ All Right Reserved.</T>
      </Right>

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
