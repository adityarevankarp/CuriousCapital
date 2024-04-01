import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Css/Portfolio.css";
import Card from "../Components/Card";
import p1 from "../assets/Portfolio_assets/eth.png";
import p2 from "../assets/Portfolio_assets/investaz.png";
import p3 from "../assets/Portfolio_assets/arbitrum.png";
import p4 from "../assets/Portfolio_assets/solana.png";
import p5 from "../assets/Portfolio_assets/pyth.png";
import p6 from "../assets/Portfolio_assets/optimism.png";
import p7 from "../assets/Portfolio_assets/jupiter.png";
import p8 from "../assets/Portfolio_assets/fetchai.png";
import p9 from "../assets/Portfolio_assets/bitcoin.png";
import p10 from "../assets/Portfolio_assets/seededf.png";
import p11 from "../assets/Portfolio_assets/binance.png";
import p12 from "../assets/Portfolio_assets/shuffle.png";

let modalTextArr = {
  bitcoin: [
    
    <strong>BITCOIN</strong>,
    <br></br>,
    "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a public distributed ledger, called a blockchain, without central oversight.",
    
  ],
  ehereum: [
    <strong>ETHEREUM</strong>,
    <br></br>,
    "Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization.",
  ],
  solana: [
    <strong>SOLANA</strong>,
    <br></br>,
    "Solana is a blockchain platform which uses a proof-of-stake mechanism to provide smart contract functionality. Its native cryptocurrency is SOL. Solana was launched in 2020 by Solana Labs, which was founded by Anatoly Yakovenko and Raj Gokal in 2018.",
  ],
  pythnetwork: [
    <strong>PYTH NETWORK</strong>,
    <br></br>,
    "Secure your smart contracts with reliable, low-latency market data from institutional sources. Build apps with high-fidelity oracle feeds designed for mission-critical systems.",
  ],
  jupiter: [
    <strong>JUPITER</strong>,
    <br></br>,
    "Jupiter is a swap aggregator, a platform used to gather liquidity for traders seeking the best possible prices with minimal slippage.",
  ],
  optimism: [
    <strong>OPTIMISM</strong>,
    <br></br>,
    "The Superchain is a vision of a composable, unified network of blockchains that can support internet-level activity, powered by the MIT-licensed open source OP Stack.",
  ],
  arbitrum: [
    <strong>ARBITRUM</strong>,
    <br></br>,
    "Arbitrum is a Layer 2 scaling solution for the Ethereum blockchain that powers fast smart contract transactions while reducing transaction costs.",
  ],
  fetchai: [
    <strong>FETCH.AI</strong>,
    <br></br>,
    "Fetch.ai is a blockchain platform that uses artificial intelligence to help people automate everyday tasks such as booking a parking space or a flight. ",
  ],
  seededNetwork: [
    <strong>SEEDED NETWORK</strong>,
    <br></br>,
    "Seeded Network, a borrowing and lending protocol with a twist on the traditional DeFi integration with a project incubator product, combining aspects of cryptocurrency with the expanding world of DeFi.",
  ],
  investax: [
    <strong>INVESTAX</strong>,
    <br></br>,
    "IX Swap is a TradFi-DeFi bridge that facilitates the trading of security tokens and fractionalized NFTs through licensed custodians and security brokers",
  ],
  binance: [
    <strong>BINANCE</strong>,
    <br></br>,
    "Binance Holdings Ltd., branded Binance, is a global company that operates the largest cryptocurrency exchange in terms of daily trading volume of cryptocurrencies.",
  ],
  
  shuffle: [
    <strong>SHUFFLE</strong>,
    <br></br>,
    "Shuffle is a leading crypto casino and sports betting platform launched in February 2023. Since launch, Shuffle has grown to over 35k users and 2.8 billion bets across a suite of innovative products.",
  ],
  
  

};
let modalLinks = {
  bitcoin:'https://bitcoin.org/en/',
  ethereum:'https://ethereum.org/en/',
  solana:'https://solana.com/',
  pythnetwork:'https://pyth.network/',
  jupiter:'https://jup.ag/',
  optimism:'https://www.optimism.io/',
  arbitrum:'https://arbitrum.io/',
  fetchai:'https://fetch.ai/',
  seededNetwork:'https://seeded.network/',
  investax:'https://www.investax.io/',
  binance:'https://www.binance.com/en-IN',
  shuffle:'https://shuffle.com/'






  
}

function Portfolio() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="h-auto w-auto z-1">
          <Navbar />
        </div>

        <div className="sm:mx-0 md:mx-6 lg:mx-24 xl:mx-78 2xl:mx-88 4xl:mx-98 imac:mx-180">
          <div className="relative z-1 flex flex-col justify-center items-center p-4 sm:p-20 sm:pt-5   ">
            <p
              className="text-[#e55db2] text-3xl font-bold my-2"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Portfolio
            </p>
            <p
              className="text-xl text-white my-8 font-normal text-justify"
              style={{ fontFamily: "Inter" }}
            >
              CURIOUS CAPITAL invests in generational crypto startups who lay
              the foundation for our growing ecosystem. Our operational
              excellence allows great founders to build and their protocols to
              thrive.
            </p>
            <div className="relative z-1 flex flex-col justify-center items-center p-4 sm:p-8 sm:pt-5">
              <p
                className="text-[#e55db2] text-3xl font-bold my-2"
                style={{ fontFamily: "Bebas Neue" }}
              >
                PARTNERS
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-stretch xxs:m-10 gap-5 xs:grid-cols-3 s:grid-cols-4 s:gap-5 sm:grid-cols-4 lg:grid-cols-4 ssm:grid-cols-2 ssm:gap-x-16">
              <Card logo_url={p11} logo_name={"Binance"} modalText={modalTextArr.binance} logo_link={modalLinks.binance}/>
              <Card logo_url={p12} logo_name={"Shuffle"} modalText={modalTextArr.shuffle} logo_link={modalLinks.shuffle}/>
            </div>
            <div className="relative z-1 flex flex-col justify-center items-center p-0 sm:p-8 sm:pt-5">
              <p
                className="text-[#e55db2] text-3xl font-bold my-2"
                style={{ fontFamily: "Bebas Neue" }}
              >
                majority holdings
              </p>
            </div>
            {/* //3xl:grid grid-cols-4 gap-16 sm:grid grid-cols-3 gap-12 */}
            {/* grid grid-cols-4 gap-16 sm:grid-cols-3 4xl:grid-cols-4 gap-16 md:grid-cols-3 gap-16 lg:grid-cols-4 */}
            {/* grid-cols-1 gap-5 xxs:m-10 gap-5 xs:grid-cols-2 s:grid-cols-2 s:gap-x-16 sm:grid-cols-4 lg:grid-cols-4 ssm:grid-cols-2 ssm:gap-x-16  */}
            <div className="grid grid-cols-2 justify-items-stretch xxs:m-10 gap-5 xs:grid-cols-3 s:grid-cols-4 s:gap-5 sm:grid-cols-4 lg:grid-cols-4 ssm:grid-cols-2 ssm:gap-x-16">
              <Card
                logo_url={p9}
                logo_name={"Bitcoin"}
                modalText={modalTextArr.bitcoin}
                logo_link={modalLinks.bitcoin}

              />
              <Card
                logo_url={p1}
                logo_name={"Ethereum"}
                modalText={modalTextArr.ehereum}
                logo_link={modalLinks.ethereum}
              />
              <Card logo_url={p4} logo_name={"Solana"}  modalText={modalTextArr.solana} logo_link={modalLinks.solana}/>
              <Card logo_url={p5} logo_name={"Pyth Network"} modalText={modalTextArr.pythnetwork} logo_link={modalLinks.pythnetwork}/>
              <Card logo_url={p7} logo_name={"Jupiter"} modalText={modalTextArr.jupiter} logo_link={modalLinks.jupiter}/>
              <Card logo_url={p6} logo_name={"Optimism"} modalText={modalTextArr.optimism} logo_link={modalLinks.optimism}/>
              <Card logo_url={p3} logo_name={"Arbitrum"} modalText={modalTextArr.arbitrum} logo_link={modalLinks.arbitrum}/>
              <Card logo_url={p8} logo_name={"Fetch.ai"} modalText={modalTextArr.fetchai} logo_link={modalLinks.fetchai}/>
              <Card logo_url={p10} logo_name={"Seeded Network"} modalText={modalTextArr.seededNetwork} logo_link={modalLinks.seededNetwork}/>
              <Card logo_url={p2} logo_name={"InvestaX"} modalText={modalTextArr.investax} logo_link={modalLinks.investax}/>
            </div>
          </div>
        </div>
        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
