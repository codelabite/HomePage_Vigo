import React from "react";

import {
  InfoColumn,
  InfoRow,
  InfoSec,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Container,
} from "./SimpleCard.element";

const SimpleCard = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  buttonLabel,
  description,
  img,
  start,
  alt,
}) => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>P U B L I C A T I O N</TopLine>
                <Heading>Latest Posts</Heading>
                <Subtitle>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unkno
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default SimpleCard;
