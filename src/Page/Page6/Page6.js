import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
import bg from './News.png'
import nbg from './nbg.png'
import { H } from '../Page2/Page2'
import { CardData } from '../config/config'
import TeamCard from '../../components/card/TeamCard'
import { motion } from 'framer-motion';
import { Button } from '../../components/Navbar/Navbar';

export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  



const Sec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(249, 232, 202, 1); 
    padding: 5rem 0.5rem ;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        width: 100%;
        padding: 5rem 0.5rem ;
    }

`

const GridAuto = styled.div`
    display: grid;
    width: 1300px;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));


@media only screen and (max-width: 1300px) {
  width: 90%;
}
@media only screen and (max-width: 768px) {
  width: 95%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
}
@media only screen and (max-width: 330px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
 
}
`


const Width = styled.div`
      width: 1100px;
      display: flex;
        background-color: #F6F6EE;
        align-items: center;
        justify-content: space-between;
        padding: 4rem;
        margin: -18rem 0 0 0;
        border-radius: 0.5rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        @media only screen and (max-width: 1400px) {
          width: 998px;
      }
    
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 1000px) {
      width: 98%; 
      padding: 2rem;  
  }

`
const Left = styled(motion.div)`
        width: 45%;
     // background: red;

          @media only screen and (max-width: 1100px) {
            width: 50%;
        }
        @media only screen and (max-width: 998px) {
            width: 65%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 95%;
      
       
      }
`;

const Right = styled(motion.div)`
        display: flex;
        //justify-content: center;
        flex-direction: column;
        width: 45%;
       // height: 45rem;


          @media only screen and (max-width: 1100px) {
            width: 50%;
            margin: 3rem  0 0 0;
            height: auto;
        }
        @media only screen and (max-width: 998px) {
            width: 65%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 95%; 
        
      }
`;

const Heading = styled.div`
    
    font-size: 0.75rem;
   color: rgba(0,0,0,0.2);
    letter-spacing: 0.1rem;
   
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
       
      }
`;

const Hs = styled(H)`
   text-align: center;
    font-size: 2rem;
    margin: 1.2rem 0;
color: #000000;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const HeadingContainer = styled.div`
 
`
const Flex = styled.div`
      display: flex;
     // align-items: center;
      justify-content: space-between;
      width: 26rem;
      padding: 1.5rem;
      margin: 0 0 0.5rem 0;
      border: 1px solid rgba(0,0,0,0.2);

      @media only screen and (max-width: 768px) {
          width: 100%;
      }
`
const T = styled.p`
color: #000;
font-weight: 500;
font-size: 1rem;
margin: 0;
// margin-bottom: 2rem;
text-align: left !important;
 // font-weight: bold;
  letter-spacing: 0.05rem;
  line-height: 1.5;
@media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
   
  }
`;

const Page6 = () => {
    return (
       
            
      <Width>
            <Left>
              <HeadingContainer>
                    <Heading>
                     KYC/AML SERVICES
                    </Heading>
                  
                    <Hs>
                    Create a force field around your investors with our KYC/AML Services
                    </Hs>

                    <T>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus sed volutpat proin urna porta magna.
                    </T>
              </HeadingContainer>

              <Button  style={{width:'16rem',margin:'2rem 0 0 0'}}>
                Send a Message 
                <div style={{margin:'0.2rem 0 0 1rem'}}>
                    <svg  width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.13924 14L0 12.9781L6.72152 6.99999L0 1.0219L1.13924 0L9 6.99999L1.13924 14Z" fill="black"/>
                    </svg>
                  </div>
              </Button>
                
              </Left>
            
              <Right>
                <div>
                  <Flex>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <T>01</T>
                    <T style={{margin:'0 0 0 2rem',fontSize:'1.2rem'}}>Beneficial asset owners</T>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.7802 0.666927C29.4924 0.369014 29.0176 0.360774 28.7197 0.648524L20.5708 8.79681C20.5599 8.8067 20.5456 8.81027 20.5352 8.82098C20.5258 8.83059 20.5229 8.84359 20.514 8.85357L10.9411 18.4257C9.7868 17.5033 8.34256 16.9288 6.75 16.9288C3.02206 16.9288 0 19.9509 0 23.6788C0 27.4067 3.02206 30.4288 6.75 30.4288C10.4762 30.4248 13.496 27.405 13.5 23.6788C13.5 22.0855 12.925 20.6407 12.0017 19.4861L21.0765 10.4121L23.7275 13.0631C23.868 13.204 24.0589 13.2831 24.2578 13.2828V13.2829C24.4567 13.2828 24.6473 13.2038 24.7879 13.0633C25.0809 12.7704 25.0809 12.2955 24.7881 12.0025L22.1371 9.35153L25.3195 6.16925L27.9712 8.82089C28.1117 8.96179 28.3025 9.04089 28.5015 9.04061C28.7003 9.04061 28.891 8.9616 29.0316 8.82107C29.3245 8.52819 29.3246 8.05331 29.0317 7.76043L26.3802 5.10879L29.7802 1.70898C30.061 1.41839 30.061 0.957607 29.7802 0.666927ZM6.75 28.9288C3.85052 28.9288 1.5 26.5783 1.5 23.6788C1.5 20.7793 3.85052 18.4288 6.75 18.4288C9.64801 18.4323 11.9965 20.7808 12 23.6788C12 26.5783 9.64948 28.9288 6.75 28.9288Z" fill="#AA6D10"/>
                    </svg>

                    {/* <img src='' alt='' style={{width:'3rem'}} /> */}
                  </Flex>
                  <Flex>
                    <div style={{display:'flex',fontSize:'1.2rem'}}>
                    <T>02</T>
                    <T style={{margin:'0 0 0 2rem'}}>Video call records</T>
                    </div>
                    <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M29.9205 2.34207C29.735 1.97202 29.2847 1.82233 28.9146 2.00781L22.5 5.21509V4.92871C22.4973 2.44452 20.4842 0.431458 18 0.428711H4.5C2.01581 0.431458 0.00274665 2.44452 0 4.92871V13.9287C0.00274665 16.4129 2.01581 18.426 4.5 18.4287H18C20.4842 18.426 22.4973 16.4129 22.5 13.9287V13.6423L28.9146 16.8496C29.0187 16.9016 29.1335 16.9286 29.25 16.9287C29.2508 16.9287 29.2516 16.9287 29.2524 16.9287C29.6659 16.9281 30.0006 16.5923 30 16.1787V2.67871C30.0001 2.56189 29.9729 2.44653 29.9205 2.34207ZM21 6.42871V12.4287V13.9287C20.9979 15.5847 19.656 16.9266 18 16.9287H4.5C2.84399 16.9266 1.50211 15.5847 1.5 13.9287V4.92871C1.50211 3.27271 2.84399 1.93082 4.5 1.92871H18C19.656 1.93082 20.9979 3.27271 21 4.92871V6.42871ZM28.5 14.9658L22.5 11.9658V6.8916L28.5 3.8916V14.9658Z" fill="#AA6D10"/>
                    </svg>

                  </Flex>
                  <Flex>
                  <div style={{display:'flex',fontSize:'1.2rem'}}>
                    <T>03</T>
                    <T style={{margin:'0 0 0 2rem'}}>Economic contexts</T>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.5 14.6787C10.7508 14.6788 10.985 14.5535 11.124 14.3447L13.6172 10.6064L15.9697 12.959C16.1331 13.1101 16.351 13.1884 16.5732 13.1758C16.797 13.1532 16.9991 13.0318 17.124 12.8447L20.124 8.34473C20.3469 8.00278 20.2554 7.54538 19.9181 7.31549C19.5759 7.08212 19.1093 7.17047 18.876 7.5127L16.3828 11.251L14.0303 8.89844C13.8695 8.74307 13.6497 8.66415 13.4268 8.68164C13.203 8.70416 13.0009 8.82565 12.876 9.0127L9.87598 13.5127C9.79385 13.6359 9.75009 13.7806 9.75009 13.9286C9.75 14.3429 10.0858 14.6787 10.5 14.6787ZM29.25 19.9287H27V1.1778C26.9997 0.763886 26.664 0.428436 26.25 0.428711H3.74908C3.33517 0.428986 2.99973 0.76471 3 1.17871V19.9287H0.75C0.335816 19.9287 0 20.2645 0 20.6787C0 21.0929 0.335816 21.4287 0.75 21.4287H14.25V23.5709L6.32227 29.062C6.11984 29.2023 5.99918 29.4329 5.99936 29.6792C5.99963 30.0934 6.33572 30.429 6.75 30.4287C6.9028 30.4285 7.05194 30.382 7.17773 30.2954L14.25 25.3968V29.6795C14.2503 30.0935 14.586 30.429 15 30.4287H15.0009C15.4148 30.4284 15.7503 30.0927 15.75 29.6787V25.3968L22.8223 30.2954C22.9481 30.382 23.0972 30.4285 23.25 30.4287C23.4963 30.4289 23.7269 30.3082 23.8672 30.1058C24.1031 29.7652 24.0183 29.2979 23.6777 29.062L15.75 23.5709V21.4287H29.25C29.6642 21.4287 30 21.0929 30 20.6787C30 20.2645 29.6642 19.9287 29.25 19.9287ZM25.5 19.9287H4.5V1.92871H25.5V19.9287Z" fill="#AA6D10"/>
                    </svg>

                  </Flex>
                  <Flex>
                  <div style={{display:'flex',fontSize:'1.2rem'}}>
                    <T>04</T>
                    <T style={{margin:'0 0 0 2rem'}}>Fund origins</T>
                    </div>
                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.25 6.92871H24V5.42871C23.9973 2.94452 21.9842 0.931458 19.5 0.928711H3.75C1.67972 0.930633 0.00192255 2.60843 0 4.67871V23.4287C0.00274665 25.9129 2.01581 27.926 4.5 27.9287H26.25C28.3203 27.9268 29.9981 26.249 30 24.1787V10.6787C29.9981 8.60843 28.3203 6.93063 26.25 6.92871ZM3.75 2.42871H19.5C21.156 2.43082 22.4979 3.77271 22.5 5.42871V6.92871H3.75C2.50735 6.92871 1.5 5.92136 1.5 4.67871C1.5 3.43607 2.50735 2.42871 3.75 2.42871ZM28.5 20.4287H25.5C23.8432 20.4287 22.5 19.0855 22.5 17.4287C22.5 15.7719 23.8432 14.4287 25.5 14.4287H28.5V20.4287ZM28.5 12.9287H25.5C23.0147 12.9287 21 14.9434 21 17.4287C21 19.914 23.0147 21.9287 25.5 21.9287H28.5V24.1787C28.4986 25.4208 27.4921 26.4273 26.25 26.4287H4.5C2.84399 26.4266 1.50211 25.0847 1.5 23.4287V7.67725C2.14828 8.16586 2.9382 8.42972 3.75 8.42871H26.25C27.4921 8.43008 28.4986 9.43661 28.5 10.6787V12.9287Z" fill="#AA6D10"/>
                    </svg>

                  </Flex>
                  <Flex>
                  <div style={{display:'flex',fontSize:'1.2rem'}}>
                    <T>05</T>
                    <T style={{margin:'0 0 0 2rem'}}>Cryptanalysis</T>
                    </div>
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 0.928711C7.3873 0.928711 0 8.31601 0 17.4287C0 26.5414 7.3873 33.9287 16.5 33.9287C25.6084 33.9185 32.9897 26.5371 33 17.4287C33 8.31601 25.6127 0.928711 16.5 0.928711ZM16.5 32.4287C8.21576 32.4287 1.5 25.713 1.5 17.4287C1.5 9.14447 8.21576 2.42871 16.5 2.42871C24.7802 2.43842 31.4903 9.1485 31.5 17.4287C31.5 25.713 24.7842 32.4287 16.5 32.4287ZM23.25 14.4257C23.2492 12.3555 21.5703 10.6779 19.5 10.6787H18.75V8.42871C18.75 8.01453 18.4142 7.67871 18 7.67871C17.5858 7.67871 17.25 8.01453 17.25 8.42871V10.6787H14.25V8.42871C14.25 8.01453 13.9142 7.67871 13.5 7.67871C13.0858 7.67871 12.75 8.01453 12.75 8.42871V10.6787H10.5C10.0858 10.6787 9.75 11.0145 9.75 11.4287C9.75 11.8429 10.0858 12.1787 10.5 12.1787H12.75V22.6787H10.5C10.0858 22.6787 9.75 23.0145 9.75 23.4287C9.75 23.8429 10.0858 24.1787 10.5 24.1787H12.75V26.4287C12.75 26.429 12.75 26.4293 12.75 26.4295C12.7503 26.8435 13.086 27.179 13.5 27.1787C13.5003 27.1787 13.5005 27.1787 13.5009 27.1787C13.9148 27.1784 14.2503 26.8427 14.25 26.4287V24.1787H17.25V26.4287C17.25 26.429 17.25 26.4293 17.25 26.4295C17.2503 26.8435 17.586 27.179 18 27.1787C18.0003 27.1787 18.0005 27.1787 18.0009 27.1787C18.4148 27.1784 18.7503 26.8427 18.75 26.4287V24.1787H19.5C20.6819 24.1792 21.795 23.6222 22.503 22.6757C23.7432 21.018 23.4047 18.6689 21.747 17.4287C22.6935 16.7206 23.2505 15.6077 23.25 14.4257ZM21.75 20.4287C21.75 21.6714 20.7426 22.6787 19.5 22.6787H14.25V18.1787H19.5C20.7426 18.1787 21.75 19.1861 21.75 20.4287ZM19.5 16.6787H14.25V12.1787H18H18.0009H19.5C20.7426 12.1787 21.75 13.1861 21.75 14.4287C21.75 15.6714 20.7426 16.6787 19.5 16.6787Z" fill="#AA6D10"/>
                    </svg>

                  </Flex>
                </div>
              </Right>
      </Width>

      
    )
}

export default Page6
