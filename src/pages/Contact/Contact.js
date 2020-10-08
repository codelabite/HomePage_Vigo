import React from "react";
import Cards from "../../Card/Card";
import { Pricing } from "../../component";
import InfoSection from "../../component/infoSection/infoSection";
//import { Pricing } from "../component/Pricing/Pricing.elements";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const ContactUs = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Cards />
    </>
  );
};

export default ContactUs;
