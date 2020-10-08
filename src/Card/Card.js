import React from "react";
import Card from "./CardUI";
import img1 from "../asset/f8.jpg";
import img2 from "../asset/f12.jpg";
import img3 from "../asset/f60.jpg";

const Cards = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <Card
            imgsrc={img1}
            title="First Entry"
            description=" efficient service delivery, promoting accountability and fiscal
          inclusion in the extractive industries and also support to willing
          government, media and civil society institutions."
          />
        </div>
        <div className="col-md-4">
          {" "}
          <Card
            imgsrc={img2}
            title="Second Entry"
            description="
          Our work revolves around four key pillars -providing simplified access
          to budgets and related public finance data, project monitoring for government, media and civil society institutions.
         
          "
          />
        </div>
        <div className="col-md-4">
          {" "}
          <Card
            imgsrc={img3}
            title="Third Entry"
            description=" efficient service delivery, promoting accountability and fiscal
          inclusion in the extractive industries and also support to willing
          government, media and civil society institutions."
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
