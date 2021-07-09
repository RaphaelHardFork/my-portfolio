import { Box, Image, Center } from "@chakra-ui/react"
import Header from "./Header"
import Decentralized from "../home/Decentralized"
import KnowHow from "../home/KnowHow"
import { Switch, Route, Link } from "react-router-dom"
import LookingFor from "../home/LookingFor"
import Footer from "./Footer"
import LearnedCode from "../about/LearnedCode"
import Realisations from "../realisations/Realisations"
import Contracts from "../contractsPage/Contracts"
import Contact from "./Contact"
import { useState } from "react"

const LandingPage = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Center>
            {/*
        <Image
          zIndex="-1"
          position="fixed"
          borderRadius="50%"
          mt="400"
          boxSize="100vh"
          objectFit="cover"
          alt=""
          src="https://ipfs.io/ipfs/QmWF8u1mdFWY54TrCCz4DMYvDexFn2Cp1ufgvsYzfKFMpS"
        />
         */}
          </Center>
          <Box as="main">
            <Decentralized />
            <KnowHow />
            <LookingFor />
          </Box>
        </Route>
        <Route exact path="/about">
          <LearnedCode />
        </Route>
        <Route exact path="/realisations">
          <Realisations />
        </Route>
        <Route exact path="/contracts">
          <Contracts />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default LandingPage
