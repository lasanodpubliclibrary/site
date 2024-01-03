import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  render,
} from "@react-email/components";
import { siteConfig } from "../../config/site";

interface VerificationEmailProps {
  name: string;
  href: string;
}

export const VerificationEmail = ({ name, href }: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Confirm Your Email and Dive into a World of Books at {siteConfig.name}!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/assets/illustrations/welcome.svg`}
            width="150"
            height="150"
            alt="welcome"
            style={logo}
          />
          <Text style={paragraph}>{name ? `Dear ${name},` : "Hi there,"}</Text>
          <Text style={paragraph}>
            Thank you for registering with the {siteConfig.name}. To ensure the
            security of your account and provide you with access to our
            resources, we kindly ask you to verify your email address.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={href}>
              Verify email
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The {siteConfig.name} team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you did not register for an account with {siteConfig.name},
            please disregard this email or contact our support team immediately.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export const VerificationEmailHtml = (props: VerificationEmailProps) =>
  render(<VerificationEmail {...props} />, { pretty: true });

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
