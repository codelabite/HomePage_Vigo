import React from "react";

import { Pricing } from "../../component";
import InfoSection from "../../component/infoSection/infoSection";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />

      <InfoSection {...homeObjFour} />
      <Pricing />
    </>
  );
};

export default Home;
