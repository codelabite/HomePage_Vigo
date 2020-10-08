import React, { Component, useState } from "react";
import CountryCardUI from "./CountryCardUI";
import "./countryCard-style.css";

const CountryCard = (props) => {
  const [data, setData] = useState([
    {
      title: "GHANA",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },

    {
      title: "NIGERIA",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },

    {
      title: "CAMEROUN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },

    {
      title: "TOGO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },

    {
      title: "KENYA",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },

    {
      title: "EGYPT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
    },
  ]);

  return (
    <div>
      <CountryCardUI>
        {data.map((entry) => (
          <div key={entry.title} className="newcardds">
            <h3>{entry.title}</h3>
            <p> {entry.description}</p>
          </div>
        ))}
      </CountryCardUI>
    </div>
  );
};

export default CountryCard;
