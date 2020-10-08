import React from "react";
import "./Team.css";
import img1 from "../asset/f8.jpg";
import styled from "styled-components";

export const Holder = styled.section`
  display: flex;
  background-color: white;
  width: 40%;

  align-self: center;
  margin: auto;
  height: 150px;
`;

export const PicHold = styled.div`
  display: block;
  background-color: white;
  width: 50%;
  height: 100;
  overflow: hidden;
  border-radius: 7px;
`;

export const ImgTitle = styled.div`
  /* background-color: green; */
  /* position: absolute; */
  right: 0;
  width: 50%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  /* font-style: italic; */
  padding-top: 2rem;
  padding-left: 1rem;
  color: black;
`;

export const ImgSub = styled.div`
  font-size: 18px;
  padding-top: 2rem;
  padding-bottom: 6rem;
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Team = () => {
  return (
    <div className="py-5 bg-light team1">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-md-7 text-center">
            <h3 className="mb-3">Experienced & Professional Team</h3>
            <h6 className="subtitle font-weight-normal">
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </h6>
          </div>
        </div>
      </div>
      <Holder>
        <PicHold>
          <img src={img1} width="200%" height="200%" />
        </PicHold>
        <TextHolder>
          <ImgTitle>Tunde Marcus</ImgTitle>
          <ImgSub>Tunde Marcus</ImgSub>
        </TextHolder>
      </Holder>
    </div>
  );
};
export default Team;
