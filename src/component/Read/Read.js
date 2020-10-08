import React from "react";
import {
  ReadingSection,
  ReadingHeader,
  ReadingContainer,
  ReadingCardHolder,
  ReadingCard,
  ReadingCardInfo,
  ReadingingCardCost,
} from "./Read.elements";

const Read = (img = require("../../image/medi.png")) => {
  return (
    <ReadingSection>
      <ReadingContainer>
        <ReadingHeader>Our Latest Post</ReadingHeader>

        <ReadingCardHolder>
          <ReadingCard>
            <ReadingingCardCost>Cool...</ReadingingCardCost>

            <ReadingCardInfo>
              <img src={"medi.png"} alt={"1"} />
            </ReadingCardInfo>
          </ReadingCard>
        </ReadingCardHolder>
      </ReadingContainer>
    </ReadingSection>
  );
};

export default Read;
