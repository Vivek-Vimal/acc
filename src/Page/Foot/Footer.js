import React from "react";
import styled from "styled-components";
import "./Footer.css";
import bg from "./foot.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from "../../components/Navbar/Navbar";
import dis from "../../components/Navbar/Discord.png";
import twi from "../../components/Navbar/Twitter.png";
import med from "../../components/Navbar/Medium.png";
import logo from "../../components/Navbar/WLogo.svg";
import { Button } from "../../components/Navbar/Navbar";
import Page6 from "../Page6/Page6";

const Sec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 29, 35, 1);
  padding: 2rem 0 1rem 0;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1400px;

  @media only screen and (max-width: 1600px) {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  
`;

const IconContainer = styled.div`
  margin: 0 3rem 0 0;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 8rem 0;

  @media only screen and (max-width: 610px) {
    width: 99%;
    padding: 0 2rem;
  }
`;
const Mid = styled.div`
  display: flex;
  width: 998px;
  justify-content: space-between;
  padding: 0 0.5rem;

  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  width: 30rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 610px) {
    width: 99%;
    padding: 2rem 0;
  }
`;
const Link1 = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  color: rgba(249, 232, 202, 0.9);
  @media only screen and (max-width: 998px) {
    margin-right: 6rem !important;
    width: 16rem;
    height: auto;
  }
  @media only screen and (max-width: 768px) {
    // margin-right: 3rem  !important;
    width: 10rem;
    font-size: 1.5rem;
  }
`;
const Upper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //place-items: center;
  width: 100%;
  // grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  // padding: 0 0 0 2rem;

  @media only screen and (max-width: 610px) {
    grid-template-columns: repeat(auto-fit, minmax(99%, 1fr));
    padding: 0 0;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  margin: 2rem 0;
`;

const Lower = styled.div`
  background-color: rgba(1, 23, 28, 1);
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  margin: 4rem 0 1rem 0;
  @media only screen and (max-width: 1400px) {
    width: 98%;
  }
  @media only screen and (max-width: 610px) {
    width: 99%;
    flex-direction: column;
    padding: 2rem 0.5rem;
  }
`;
const SocialMedia = styled.div`
  @media only screen and (max-width: 610px) {
    margin: 1rem 0 0 0;
  }
`;

export const T = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  // margin-bottom: 2rem;
  text-align: left;
  // font-weight: bold;
  letter-spacing: 0.05rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
    text-align: center;
  }
`;

export const H = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 2rem 0 0;
  text-align: left !important;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    text-align: center !important;
  }
`;

const Margin = styled.div`
  margin: 2rem 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 0.5rem 0 0 0;
  }
`
const Response = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 2rem 0;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`
const Sasta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 23rem;

  @media only screen and (max-width: 580px) {
    margin: 2rem  0 0 0;
  }
 
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    width: 100%;
  }
`

const Footer = (props) => {
  return (
    <Sec>
      <StyledFooter>

{ props.without ? null :
        <Page6 />
}

        <Upper>
          <Left>
            <H style={{}}>Ready to take control of your financial future?</H>
            <Button
              style={{
                color: "#fff",
                border: "1px solid #fff",
                margin: "3rem 0 0 0",
              }}
            >
              Download Accredited
              <div style={{ margin: "0.2rem 0 0 1rem" }}>
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Button>
          </Left>

          <Mid>
            <div style={{ margin: "2rem 0 0 0" }}>
              <img src={logo} alt="" style={{ width: "8rem", height: "4rem" }} />
            </div>

            <Margin>
              <T
                style={{
                  color: "rgba(153, 156, 165, 1)",
                  margin: "0",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Asset Structuring
              </T>
              <T
                style={{
                  color: "rgba(153, 156, 165, 1)",
                  margin: "0",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Transfer Agent
              </T>
              <T
                style={{
                  color: "rgba(153, 156, 165, 1)",
                  margin: "0",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Real Estate Tokenization
              </T>
              <T
                style={{
                  color: "rgba(153, 156, 165, 1)",
                  margin: "0",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                HNI’s & Family Offices
              </T>
            </Margin>

            <div style={{ margin: "2rem 0 0 0" }}>
              <Button style={{ color: "#fff", border: "1px solid #fff" }}>
                Token Offering
                <div style={{ margin: "0.2rem 0 0 1rem" }}>
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </Mid>

          {/* <Right>
                    <H style={{fontSize:'1.6rem',fontWeight:'500'}}>Contact</H>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                    <div style={{display:'flex'}}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#02A95C"/>
                            <path d="M31.3087 30.2753C31.3087 30.5753 31.242 30.8837 31.1003 31.1837C30.9587 31.4837 30.7753 31.767 30.5337 32.0337C30.1253 32.4837 29.6753 32.8087 29.167 33.017C28.667 33.2253 28.1253 33.3337 27.542 33.3337C26.692 33.3337 25.7837 33.1337 24.8253 32.7253C23.867 32.317 22.9087 31.767 21.9587 31.0753C21.0003 30.3753 20.092 29.6003 19.2253 28.742C18.367 27.8753 17.592 26.967 16.9003 26.017C16.217 25.067 15.667 24.117 15.267 23.1753C14.867 22.2253 14.667 21.317 14.667 20.4503C14.667 19.8837 14.767 19.342 14.967 18.842C15.167 18.3337 15.4837 17.867 15.9253 17.4503C16.4587 16.9253 17.042 16.667 17.6587 16.667C17.892 16.667 18.1253 16.717 18.3337 16.817C18.5503 16.917 18.742 17.067 18.892 17.2837L20.8253 20.0087C20.9753 20.217 21.0837 20.4087 21.1587 20.592C21.2337 20.767 21.2753 20.942 21.2753 21.1003C21.2753 21.3003 21.217 21.5003 21.1003 21.692C20.992 21.8837 20.8337 22.0837 20.6337 22.2837L20.0003 22.942C19.9087 23.0337 19.867 23.142 19.867 23.2753C19.867 23.342 19.8753 23.4003 19.892 23.467C19.917 23.5337 19.942 23.5837 19.9587 23.6337C20.1087 23.9087 20.367 24.267 20.7337 24.7003C21.1087 25.1337 21.5087 25.5753 21.942 26.017C22.392 26.4587 22.8253 26.867 23.267 27.242C23.7003 27.6087 24.0587 27.8587 24.342 28.0087C24.3837 28.0253 24.4337 28.0503 24.492 28.0753C24.5587 28.1003 24.6253 28.1087 24.7003 28.1087C24.842 28.1087 24.9503 28.0587 25.042 27.967L25.6753 27.342C25.8837 27.1337 26.0837 26.9753 26.2753 26.8753C26.467 26.7587 26.6587 26.7003 26.867 26.7003C27.0253 26.7003 27.192 26.7337 27.3753 26.8087C27.5587 26.8837 27.7503 26.992 27.9587 27.1337L30.717 29.092C30.9337 29.242 31.0837 29.417 31.1753 29.6253C31.2587 29.8337 31.3087 30.042 31.3087 30.2753Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10"/>
                            <path d="M28.4167 22.5007C28.4167 22.0007 28.025 21.234 27.4417 20.609C26.9083 20.034 26.2 19.584 25.5 19.584" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.3333 22.5003C31.3333 19.2753 28.725 16.667 25.5 16.667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div style={{margin:'0 0 0 1rem'}}>
                            <T style={{color:'rgba(153, 156, 165, 1)',margin:'0',fontSize:'0.8rem',fontWeight:'400'}}>Toi</T>
                            <T style={{margin:'0',fontSize:'1rem',fontWeight:'400'}}>310-437-2766</T>
                        </div>
    
                    </div>
                </Right> */}
        </Upper>

        <Line />

        <Response>
         <div style={{display:'flex'}}>
          <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2901 24.4284C11.5578 24.4426 13.8057 24.0065 15.9035 23.1453C18.0013 22.2841 19.9073 21.0149 21.5108 19.4114C23.1143 17.8078 24.3835 15.9019 25.2447 13.8041C26.1059 11.7063 26.5421 9.45833 26.5278 7.19066V6.39859C27.7033 5.53736 28.7207 4.47904 29.535 3.27056C28.4281 3.75466 27.2569 4.07573 26.0579 4.22374C27.3292 3.46627 28.283 2.27398 28.7429 0.867485C27.5582 1.57826 26.2591 2.07793 24.9034 2.34424C23.9904 1.37141 22.7822 0.726597 21.4659 0.509555C20.1495 0.292514 18.7983 0.515346 17.6213 1.14358C16.4443 1.7718 15.5072 2.77041 14.9549 3.98487C14.4026 5.19934 14.266 6.56197 14.5661 7.86191C12.1577 7.7437 9.80121 7.11954 7.65005 6.03008C5.49888 4.94062 3.60131 3.41029 2.08088 1.53874C1.3142 2.86939 1.08182 4.44166 1.43078 5.9372C1.77974 7.43274 2.68397 8.73981 3.96038 9.59374C3.01876 9.55742 2.09894 9.29987 1.27538 8.84194V8.90906C1.26701 10.2997 1.73548 11.6511 2.60271 12.7382C3.46994 13.8253 4.68355 14.5824 6.04125 14.8832C5.16546 15.1187 4.24806 15.1554 3.35625 14.9906C3.74932 16.1765 4.49964 17.2118 5.50431 17.9545C6.50899 18.6972 7.71883 19.1109 8.9679 19.1389C6.83227 20.858 4.17798 21.8043 1.43648 21.8239C0.955798 21.81 0.476248 21.7697 0 21.7031C2.77489 23.471 5.99991 24.4031 9.2901 24.3881" fill="white" fill-opacity="0.3"/>
          </svg>

          <svg style={{margin:'0 0 0 2rem'}} width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M26.7982 2.43871C24.7913 1.49971 22.6454 0.817288 20.4019 0.428711C20.1264 0.926853 19.8045 1.59687 19.5826 2.12986C17.1977 1.7712 14.8347 1.7712 12.4937 2.12986C12.2718 1.59687 11.9426 0.926853 11.6646 0.428711C9.41868 0.817288 7.27031 1.50222 5.26337 2.44368C1.21537 8.56074 0.118018 14.5259 0.666693 20.4063C3.35154 22.4113 5.95349 23.6292 8.51152 24.4262C9.14311 23.557 9.7064 22.633 10.1917 21.6591C9.26746 21.3079 8.38228 20.8746 7.54588 20.3715C7.76777 20.2071 7.98482 20.0352 8.19451 19.8583C13.296 22.2444 18.8388 22.2444 23.8793 19.8583C24.0915 20.0352 24.3085 20.2071 24.5279 20.3715C23.6891 20.877 22.8015 21.3104 21.8773 21.6616C22.3625 22.633 22.9234 23.5595 23.5574 24.4287C26.1179 23.6317 28.7223 22.4138 31.4071 20.4063C32.0509 13.5894 30.3073 7.67904 26.7982 2.43871ZM10.8867 16.7899C9.35527 16.7899 8.09939 15.3602 8.09939 13.6193C8.09939 11.8783 9.32845 10.4462 10.8867 10.4462C12.4449 10.4462 13.7008 11.8758 13.6739 13.6193C13.6764 15.3602 12.4449 16.7899 10.8867 16.7899ZM21.1871 16.7899C19.6557 16.7899 18.3999 15.3602 18.3999 13.6193C18.3999 11.8783 19.6289 10.4462 21.1871 10.4462C22.7454 10.4462 24.0012 11.8758 23.9744 13.6193C23.9744 15.3602 22.7454 16.7899 21.1871 16.7899Z" fill="white" fill-opacity="0.3"/>
          </svg>
         </div>

         <Sasta>
          <T>Privcacy Policy</T>
          <T>Terms & Conditions</T>
         </Sasta>

        </Response>

        {/* <Lower>
                <div style={{color:'#fff'}}>
                © 2000-2021,<span style={{color:'rgba(2, 169, 92, 1)'}}> accredited</span>  All Rights Reserved
                </div>
                <SocialMedia>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4167 16.275V21.35H28.8583C29.2 21.35 29.3708 21.7 29.3708 22.05L28.6875 25.375C28.6875 25.55 28.3458 25.725 28.175 25.725H24.4167V38.5H19.2917V25.9H16.3875C16.0458 25.9 15.875 25.725 15.875 25.375V22.05C15.875 21.7 16.0458 21.525 16.3875 21.525H19.2917V15.75C19.2917 12.775 21.5125 10.5 24.4167 10.5H29.0292C29.3708 10.5 29.5417 10.675 29.5417 11.025V15.225C29.5417 15.575 29.3708 15.75 29.0292 15.75H24.9292C24.5875 15.75 24.4167 15.925 24.4167 16.275Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M26.1253 38.5H15.8753C7.33366 38.5 3.91699 35 3.91699 26.25V15.75C3.91699 7 7.33366 3.5 15.8753 3.5H26.1253C34.667 3.5 38.0837 7 38.0837 15.75V26.25C38.0837 35 34.667 38.5 26.1253 38.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
    
                </SocialMedia>
            </Lower> */}
      </StyledFooter>
    </Sec>
  );
};

export default Footer;
