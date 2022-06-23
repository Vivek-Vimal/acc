import React, { useEffect, useState } from "react";
import "./Wwe.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../../components/Navbar/Navbar";
import logo from "../../components/Navbar/logo.svg";
//import { H } from '../Page2/Page2';
import { IoMdArrowRoundBack } from "react-icons/io";
import WideBox from "./components/WideBox";
import { useSelector } from "react-redux";
import { useWallet } from "use-wallet";
import L from './Left.png'
import R from './Right.png'

const Sec = styled.section`
  min-height: 50rem;
  width: 100%;
  display: flex;
  padding: 8rem 0 4rem 0;
  // flex-direction: column;
   align-items: center;
  justify-content: center;
  background:#fff;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Width = styled.div`
  width: 1300px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1400px) {
    width: 95%;
  }

`;

const H = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: light;
  margin-bottom: 2rem;
  text-align: left !important;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const T = styled.p`
  color: #FFF;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
   text-align: center;
  //width: 20rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const LeftImg = styled.div`

  position: absolute;
  z-index: 1;
  left: 0;
  height:  23rem;
  width: 15rem;

  @media only screen and (max-width: 1100px) {
    
  }
`;

const RightImg = styled.div`

  position: absolute;
  z-index: 1;
  right: 0;
  height:  25rem;
  width: 15rem;

  @media only screen and (max-width: 1100px) {
    
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;
  width: 768px;
  //height: 30rem;
  padding: 3rem 0;
  border-radius: 1rem;
  z-index: 2;
  background:linear-gradient(to right, #36d1dc, #5b86e5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    width: 95%;
    margin: 3rem 0 0 0;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 1rem 0 0 0;
`;
const Margin = styled.div`
  margin: 4rem 0 0 0;

  @media only screen and (max-width: 1100px) {
    margin: 3rem 0 0 0;
  }
`;
const MarginLeft = styled.div`
  //margin: 0 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
   //width: 100%;

  @media only screen and (max-width: 1100px) {
    margin: 0 1rem;
  }
`;

const Flex = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 65%;

  @media only screen and (max-width: 768px) {
    width: 85%;
  }
  
`;

const FourmPage4 = () => {
  const contract = useSelector((state) => state.contract);
  const wallet = useWallet();
  const [donatedAmount, setdonatedAmount] = useState(0);
  const [insertedAmount, setinsertedAmount] = useState();
  const handleDecimals = (amount) => {
    console.log(amount, typeof amount);
    let amt = amount.toString();
    // let amt = amount;
    if (amt.includes(".")) {
      let str = "000000000000000000";
      console.log(0e17);
      let array = amt.split(".");
      let finalamt = 0;
      if (array[0] == 0) {
        finalamt = array[1];
      } else {
        finalamt = array[0].concat(array[1]);
      }
      // .concat([str.length - array[1].length]);

      let finalstr = "";
      for (let i = 0; i < str.length - array[1].length; i++) {
        finalstr = finalstr + "0";
      }
      console.log(finalamt.concat(finalstr));
      return `${finalamt.concat(finalstr)}`;
    } else {
      return `${amount.concat("000000000000000000")}`;
    }
  };

  const handleParticipate = () => {
    if (insertedAmount) {
      const amount = handleDecimals(insertedAmount);
      console.log(amount);
      const tx = contract.methods.participate().send({
        from: wallet.account,
        value: amount,
      });
    }
  };

  useEffect(async () => {
    if (contract && wallet.status == "connected") {
      let amount = await contract.methods.contributions(wallet.account).call();
      console.log(amount);
      setdonatedAmount(0);
    }

    return () => {};
  }, [contract, wallet.status, wallet.account]);

  const renderButton = () => {
    if (wallet.status === "connected") {
      return (
        <Button
          style={{
            width: "10rem",
            borderRadius: "1rem",
            margin: "0 2rem 0 0",
            color: '#fff',
            border:'1px solid #FFF'
          }}
          onClick={() => {
            handleParticipate();
          }}
        >
          Donate
        </Button>
      );
    } else {
      return (
        <Button
          style={{
            width: "15rem",
            borderRadius: "1rem",
            margin: "0 2rem 0 0",
            color: '#fff',
            border:'1px solid #FFF'
          }}
          onClick={() => {
            wallet.connect();
          }}
        >
          Connect Wallet
        </Button>
      );
    }
  };

  return (
    <Sec>
      <Width>
      <LeftImg>
        <img src={L} alt="" style={{ width: "100%", height: "100%" }} />
      </LeftImg>
      <RightImg>
        <img src={R} alt="" style={{ width: "100%", height: "100%" }} />
      </RightImg>
      <Right>
        <MarginLeft>
          {/* <T
            style={{
              margin: "0 0 0 0",
              fontSize: "1.6rem",
              color: "rgba(0,0,0,0.9)",
            }}
          >
            Name your fundraiser
          </T>

          <input
            type="Text"
            placeholder="Donate to help"
            className="input1"
            style={{
              height: "3.75rem",
              width: "10rem",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "0.75rem",
              width: "60%",
              margin: "2rem 0 0 0",
            }}
          /> */}

          <Content style={{}}>
            <T
              style={{
                margin: "0 0 0 0",
                fontSize: "1.6rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Pre-Sale
            </T>

            <div style={{margin: "1.5rem 0 0 0",}}>
              <div style={{color: "#fff",margin:'0 0 0 0.5rem'}}>BNB Amount</div>
              <input
                type="number"
                placeholder="Enter BNB amount"
                onChange={(e) => {
                  console.log(e.target.value);
                  setinsertedAmount(e.target.value);
                }}
                className="input1"
                style={{
                  height: "4rem",
                  width: "15rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "0.75rem",
                  width: "100%",
                  margin: "0.5rem 0 0 0",
                }}
              />
            </div>

            <div style={{margin: "1.5rem 0 0 0",}}>
              <div style={{color: "#fff",margin:'0 0 0 0.5rem'}}>You will get</div>
              <input
                type="number"
                placeholder="Your Amount"
                className="input1"
                style={{
                  height: "4rem",
                  width: "10rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "0.75rem",
                  width: "100%",
                  margin: "0.5rem 0 0 0",
                }}
              />
            </div>

            <div style={{margin:'2rem 0 0 0'}}>
              <Flex><T>Your Contribution</T> <T>XX</T></Flex>
              <Flex><T>Your Reedamble</T> <T>XX</T></Flex>
              <Flex><T>Your Balance</T> <T>XX</T></Flex>
            </div>
          </Content>

        </MarginLeft>
        {donatedAmount != 0 && <div>Your Contribution Yet {donatedAmount}</div>}
        <div>
          <Line />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem 0 0 0",
            }}
          >
            {/* <IoMdArrowRoundBack
              style={{ margin: "0 0 0 2rem", fontSize: "2rem" }}
            /> */}
            {/* <Button
              style={{
                width: "10rem",
                borderRadius: "1rem",
                margin: "0 2rem 0 0",
              }}
            >
              Donate
            </Button> */}
            {renderButton()}
          </div>
        </div>
      </Right>
      </Width>
    </Sec>
  );
};

export default FourmPage4;
