import { Link } from "react-router-dom";
import styled from "styled-components";

export const ReadingSection = styled.div`
  /* color: #fff; */
  padding: 60px 0;
  background: "#fff";
`;

export const ReadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReadingHeader = styled.h1`
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ReadingCardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ReadingCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    /* color: #1c2237; */
    color: #fff;
  }
`;

export const ReadingCardInfo = styled.div`
  display: flex-start;
  flex-direction: column;
  height: 500px;
  /* padding: auto; */
  align-items: center;
  color: #fff;
`;

export const ReadingingCardCost = styled.h4`
  font-size: 40px;
`;
