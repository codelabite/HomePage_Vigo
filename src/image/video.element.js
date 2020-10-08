import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 60px 0;
  /* background: ${({ lightBg }) => (lightBg ? "#f6f6f6;" : "#101522")}; */
  background-color: #f6f6f6;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px 15px 15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
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
  margin-bottom: 24px;
  max-width: 550px;
  font-size: 45px;
  font-weight: bold;
  line-height: 1.1;
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
