import React from 'react'
import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from '../components/ui/Live_auction/LiveAuction';
import StepSection from '../components/ui/Step-section/StepSection';
import Trending from '../components/ui/Trending-section/Trending';
const Home = () => {
  return (
    <>
    <HeroSection/>
    <LiveAuction/>
    {/* <Trending/>
    <StepSection/> */}
    </>
  )
}

export default Home