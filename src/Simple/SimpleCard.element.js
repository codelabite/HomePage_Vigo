import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding-left: 60px;
  margin-bottom: 0px;
  background: #f6f6f6;
  /* background: radial-gradient(#f6f6f6, #fff, #e5e5e5); */
`;

export const Container = styled.div`
  color: #fff;
  padding: 0px 0;
  background: #f6f6f6;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px 15px 15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
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
  padding-bottom: 0px;
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: black;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  max-width: 550px;
  font-size: 45px;
  font-weight: bold;
  line-height: 1.1;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: #1c2237;
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
  max-height: 400px;
`;
