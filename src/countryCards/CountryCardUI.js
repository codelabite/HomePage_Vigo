import React from "react";

import "./countryCard-style.css";

const CountryCardUI = (props) => <div className="cardds">{props.children}</div>;
export default CountryCardUI;

// <div className="card text-center shadow">
//   <div className="overflow">Hello</div>
//   <div className="card-body text-dark">
//     <h4 className="card-title">{props.title}</h4>
//     <p className="card-text text-secondary">
//       {props.description} <div> </div>
//     </p>

//     <button className="button">
//       <a href="#"> Read more ...</a>
//     </button>
//   </div>
// </div>
