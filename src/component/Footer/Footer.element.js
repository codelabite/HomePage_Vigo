import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  /* padding: 4rem 2rem 0; */
  /* background-color: #101522; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: white;
  background: linear-gradient(to right, #6c63ff, #c77cf1);
  width: 100%;
  /* border: px solid black; */
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida", "Grande",
    "Lucida Sans", "Arial", sans-serif;
  font-size: 24px;
  color: white;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: white;
`;

export const Form = styled.form`
  justify-content: center;
  display: flex;
  align-items: center;
  /* padding: 20px;
  margin: 0 0 16px 0; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 16px;
  margin-right: 10px;
  outline: none;
  border: none;
  border: 1px #fff solid;
  background-color: #fff;
  /* width: 300px; */

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  /* max-width: 200px; */
  display: flex;
  justify-content: center;
  /* background-color: white; */
  padding: auto;
  color: black;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  margin: auto;
  color: black;
  /* justify-items: center; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: white;
  padding-right: 0rem;
  margin-right: 6rem;
  color: black;
  /* justify-content: center; */

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 15px;
  color: black;
  font-weight: bold;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  padding: 3px;

  color: black;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  color: black;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  color: black;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-content: center;
  margin-bottom: 16px;
  color: black;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  color: black;
`;

export const WebsiteRight = styled.small`
  /* margin-right: 16px; */
  margin-bottom: 16px;
  color: black;
`;

export const SocialIcons = styled.div`
  align-items: center;
  display: flex;
  width: 240px;
  justify-content: space-between;
  color: black;
`;

export const SocialIconsLink = styled.a`
  /* color: #fff; */
  color: black;
`;
