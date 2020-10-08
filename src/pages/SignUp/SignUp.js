import React from "react";
import { Pricing } from "../../component";
import InfoSection from "../../component/infoSection/infoSection";
//import { Pricing } from "../component/Pricing/Pricing.elements";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const SignUp = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />

      <Pricing />
    </>
  );
};

export default SignUp;
