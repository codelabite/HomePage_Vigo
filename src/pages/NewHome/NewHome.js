import React from "react";
import Cards from "../../Card/Card";
import SimpleCard from "../../Simple/SimpleCard";
import KnowIT from "../../Simple/KnowIT";
import InfoSection from "../../component/infoSection/infoSection";

import { homeObjOne } from "./Data";
import CountryCard from "../../countryCards/CountryCard";
import VideoPlay from "../../image/videoPlay";
import { VideoDisplay1 } from "../../image/Data";

const NewHome = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <KnowIT />
      <CountryCard />
      <VideoPlay {...VideoDisplay1} />
      <SimpleCard />
      <Cards />
    </>
  );
};

export default NewHome;
