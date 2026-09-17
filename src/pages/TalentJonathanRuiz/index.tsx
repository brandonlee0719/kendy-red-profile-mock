import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  AnchorTarget,
  Bio,
  CardCopy,
  CardEyebrow,
  CardTitle,
  ContactIcon,
  ContactLabel,
  ContactLink,
  ContactList,
  ContactText,
  ContactValue,
  DetailsCard,
  Eyebrow,
  IllustrationWrap,
  Intro,
  Name,
  Page,
  PageGrid,
  Quote,
  QuoteMark,
  QuoteText,
  Role,
  Rule,
} from "./styles";

const contactItems = [
  {
    label: "Phone number",
    value: "+380 997086486",
    href: "tel:+380997086486",
    accent: "blue" as const,
    icon: <PhoneOutlined />,
  },
  {
    label: "Company email",
    value: "jruiz@trangotech.com",
    href: "mailto:jruiz@trangotech.com",
    accent: "orange" as const,
    icon: <MailOutlined />,
  },
  {
    label: "Personal email",
    value: "pavlokuznecov826@gmail.com",
    href: "mailto:pavlokuznecov826@gmail.com",
    accent: "violet" as const,
    icon: <MailOutlined />,
  },
  {
    label: "Business address",
    value: "Yastrebenka 17, Zhytomir, 10031, Ukraine",
    href: "https://www.google.com/maps/search/?api=1&query=Yastrebenka%2017%2C%20Zhytomir%2C%2010031%2C%20Ukraine",
    accent: "orange" as const,
    icon: <EnvironmentOutlined />,
  },
];

const TalentJonathanRuiz = () => (
  <Page>
    <Container>
      <AnchorTarget id="mission" />
      <AnchorTarget id="product" />
      <PageGrid>
        <Intro id="about" aria-labelledby="jonathan-ruiz-title">
          <Eyebrow>Our team</Eyebrow>
          <Name id="jonathan-ruiz-title">Jonathan Ruiz</Name>
          <Role>Senior Software Engineer</Role>
          <Rule />
          <Bio>
            Jonathan Ruiz is a Senior Software Engineer at Trango Tech who
            supports product development and client delivery across software
            initiatives.
          </Bio>
          <IllustrationWrap>
            <SvgIcon src="jonathan-ruiz.svg" width="100%" height="100%" />
          </IllustrationWrap>
        </Intro>

        <DetailsCard id="contact" aria-labelledby="business-details-title">
          <CardEyebrow>Contact information</CardEyebrow>
          <CardTitle id="business-details-title">Business details</CardTitle>
          <CardCopy>
            Get in touch with Jonathan Ruiz for business inquiries and
            collaboration opportunities.
          </CardCopy>

          <ContactList>
            {contactItems.map((item) => (
              <ContactLink
                href={item.href}
                key={item.label}
                target={
                  item.label === "Business address" ? "_blank" : undefined
                }
                rel={
                  item.label === "Business address"
                    ? "noreferrer"
                    : undefined
                }
              >
                <ContactIcon accent={item.accent}>{item.icon}</ContactIcon>
                <ContactText>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue>{item.value}</ContactValue>
                </ContactText>
              </ContactLink>
            ))}
          </ContactList>

          <Quote>
            <QuoteMark>"</QuoteMark>
            <QuoteText>
              Get people who know more than you do to join your team.
              <cite>-- Bill Gates</cite>
            </QuoteText>
          </Quote>
        </DetailsCard>
      </PageGrid>
    </Container>
  </Page>
);

export default TalentJonathanRuiz;
