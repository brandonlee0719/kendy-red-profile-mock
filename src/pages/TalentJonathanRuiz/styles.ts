import styled from "styled-components";

const navy = "#18216d";
const purple = "#2e186a";
const muted = "#33408f";
const lightBorder = "#dfe3f0";
const orange = "rgb(255, 130, 92)";
const violet = "#6a35ff";
const blue = "#0967f0";

const accentColor = {
  blue,
  orange,
  violet,
};

const accentBackground = {
  blue: "#f1f5ff",
  orange: "#fff2ec",
  violet: "#f2efff",
};

export const Page = styled("main")`
  background: #fff;
`;

export const PageGrid = styled("section")`
  position: relative;
  padding: 7rem 0 8rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 58px;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
    gap: 40px;
  }

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`;

export const AnchorTarget = styled("span")`
  display: block;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

export const Intro = styled("section")`
  min-width: 0;
`;

export const Eyebrow = styled("p")`
  color: ${orange};
  font-family: "Motiva Sans Bold", sans-serif;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0;
  margin: 0 0 2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 16px;

  &::before {
    content: "";
    width: 38px;
    height: 2px;
    background: ${orange};
    display: inline-block;
  }
`;

export const Name = styled("h1")`
  color: ${navy};
  margin: 0 0 0.8rem;
`;

export const Role = styled("h2")`
  color: ${muted};
  font-family: "Motiva Sans Light", sans-serif;
  font-size: 32px;
  line-height: 1.18;
  margin: 0;

  @media only screen and (max-width: 890px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 24px;
  }
`;

export const Rule = styled("span")`
  display: block;
  width: 122px;
  height: 2px;
  background: #edf0f8;
  margin: 1.25rem 0 1rem;
`;

export const Bio = styled("p")`
  color: ${muted};
  margin: 0;
  max-width: 540px;
`;

export const IllustrationWrap = styled("div")`
  width: 100%;
  max-width: 560px;
  margin-top: 3rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 890px) {
    max-width: 520px;
    margin: 2.5rem auto 0;
  }
`;

export const DetailsCard = styled("section")`
  border: 1px solid ${lightBorder};
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 16px 48px rgba(46, 24, 106, 0.08);
  min-width: 0;

  @media only screen and (max-width: 575px) {
    padding: 1.25rem;
  }
`;

export const CardEyebrow = styled("p")`
  color: ${muted};
  font-family: "Motiva Sans Bold", sans-serif;
  font-size: 14px;
  line-height: 1;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;

export const CardTitle = styled("h2")`
  color: ${navy};
  font-size: 40px;
  line-height: 1.18;
  margin: 0 0 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 34px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 30px;
  }
`;

export const CardCopy = styled("p")`
  color: ${muted};
  font-size: 18px;
  line-height: 1.41;
  margin: 0 0 1.25rem;
`;

export const ContactList = styled("div")`
  display: grid;
  gap: 0.85rem;
`;

export const ContactLink = styled("a")`
  min-height: 68px;
  border: 1px solid ${lightBorder};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  align-items: center;
  gap: 16px;
  padding: 0.65rem 1rem;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus {
    color: ${navy};
    border-color: ${purple};
    box-shadow: 0 8px 28px rgba(46, 24, 106, 0.09);
  }

  @media only screen and (max-width: 575px) {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px;
    padding: 0.6rem;
  }
`;

export const ContactIcon = styled("span")<{
  accent: "blue" | "orange" | "violet";
}>`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  color: ${(props) => accentColor[props.accent]};
  background: ${(props) => accentBackground[props.accent]};
  font-size: 25px;

  @media only screen and (max-width: 575px) {
    width: 48px;
    height: 48px;
    font-size: 22px;
  }
`;

export const ContactText = styled("span")`
  min-width: 0;
`;

export const ContactLabel = styled("span")`
  display: block;
  color: ${muted};
  font-family: "Motiva Sans Bold", sans-serif;
  font-size: 11px;
  line-height: 1.2;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
`;

export const ContactValue = styled("span")`
  display: block;
  color: ${navy};
  font-family: "Motiva Sans Bold", sans-serif;
  font-size: 17px;
  line-height: 1.22;
  overflow-wrap: anywhere;

  @media only screen and (max-width: 575px) {
    font-size: 15px;
  }
`;

export const Quote = styled("figure")`
  background: rgb(241, 242, 243);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 0.5rem;
  align-items: center;
  margin: 1.25rem 0 0;
  padding: 1.25rem;
  border-left: 3px solid ${orange};

  @media only screen and (max-width: 575px) {
    grid-template-columns: 30px 1fr;
    padding: 1rem;
  }
`;

export const QuoteMark = styled("span")`
  color: ${violet};
  font-family: "Motiva Sans Bold", sans-serif;
  font-size: 42px;
  line-height: 0.75;
`;

export const QuoteText = styled("blockquote")`
  margin: 0;
  color: ${navy};
  font-size: 16px;
  font-style: italic;
  line-height: 1.41;

  cite {
    display: block;
    color: ${muted};
    font-style: italic;
    margin-top: 0.25rem;
  }
`;
