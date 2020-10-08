import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { Button } from "../../globalStyle";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FormInput,
  Form,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  WebsiteRight,
  SocialIcons,
  SocialIconsLink,
} from "./Footer.element";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to recieve it
          </FooterSubHeading>

          <Form>
            <FormInput name="email" type="email" placeholder=" Your Email" />
            <Button fontBig> Subscribe </Button>
          </Form>
          <FooterSubText>Subscribe to our newsletter</FooterSubText>
        </FooterSubscription>

        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>CONTACTS</FooterLinkTitle>
              <FooterLink to="/sign-up">Lagos, Nigeria</FooterLink>
              <FooterLink to="/sign-up"></FooterLink>
              <FooterLink to="/sign-up"></FooterLink>
              <FooterLink to="/sign-up"></FooterLink>
              <FooterLink to="/sign-up">
                <FaPhoneAlt /> 8080000000
              </FooterLink>
              <FooterLink to="/sign-up">
                {" "}
                <FaEnvelope /> info@vigo.com
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>POPULAR</FooterLinkTitle>
              <FooterLink to="/sign-up">Business</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Team</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Publication</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>SERVICE</FooterLinkTitle>
              <FooterLink to="/sign-up">Business</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Team</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Publication</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">
              <SocialIcon />
              VIGO CORP
            </SocialLogo>
            <WebsiteRight>VIGO CORP @ 2020</WebsiteRight>
            <SocialIcons>
              <SocialIconsLink
                href={"https://www.facebook.com/groups/brighterdayscodelab"}
                target="black"
                arial-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconsLink>

              <SocialIconsLink href="/" target="black" arial-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>

              <SocialIconsLink
                href={"https://www.youtube.com/feed/my_videos"}
                target="black"
                arial-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconsLink>

              <SocialIconsLink href="/" target="black" arial-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>

              <SocialIconsLink href="/" target="black" arial-label="LinkedIn">
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
