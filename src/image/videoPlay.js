import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../globalStyle";
import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 0px 0;
  /* background: ${({ lightBg }) => (lightBg ? "#f6f6f6;" : "#101522")}; */
  /* background-color: #f6f6f6; */
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px 15px 15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
  @media screen and (max-width: 960px) {
    paddinf-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: black;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.div`
  margin-bottom: 20px;
  max-width: 550px;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: black;
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: black;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Video = styled.video`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

// import { Button, Container } from "../../globalStyle";
// import {
//   InfoColumn,
//   InfoRow,
//   InfoSec,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   ImgWrapper,

// } from "./video.element";

function VideoPlay() {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>L E T ' S H E L P Y O U G R O W</TopLine>
                <Heading>BRING YOUR PRODUCTS TO THE RIGHT MARKET PLACE</Heading>
                <Subtitle>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Subtitle>
                <Link to="/sign_up">
                  <Button big fontBig>
                    START HERE
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <video controls src="/Course.mp4" width="100%" height="100%" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default VideoPlay;
