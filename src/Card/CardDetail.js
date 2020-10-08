import React from "react";
import Cards from "./Card";
import InfoSection from "../component/infoSection/infoSection";
import { homeObjOne } from "./Data";

const CardDetail = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Cards />
    </>
  );
};

export default CardDetail;
