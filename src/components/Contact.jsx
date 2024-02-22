import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Icon } from "@iconify/react";
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledSection = styled.section`
    min-height: 89vh;
    padding-top: var(--nav-height);
`;

const ContactItem = ({icon, content}) => {
    return (
        <div className="d-flex" style={{gap: '0.5rem'}}>
            <p className="d-flex align-items-center">
                <Icon icon={icon} />
            </p>
            <p className="text-truncated ms-2 normal-text text-rich-grey">{content}</p>
            <p></p>
        </div>
    );
};

export default function Contact() {
    return (
        <Element name={"Contact"} id="contact">
            <StyledSection className="d-flex flex-column justify-content-center" style={{minHeight: '40vh'}}>
                <Container className="d-flex">
                    <Title>
                        <h2>Contact Me</h2>
                        <div className="underline"></div>
                    </Title>
                </Container>

                <Container className="d-inline-flex flex-column" style={{margin: '0 auto', width: 'fit-content'}}>
                  <ContactItem icon="fa6-solid:envelope" content="nhutha98.engr@gmail.com"/>
                  <ContactItem icon="fa6-solid:location-dot" content="District 6, Ho Chi Minh City"/>
                  <ContactItem icon="fa6-solid:phone" content="+84329274848"/>
                  {/* <ContactItem icon="fa6-solid:cake-candles" content="1998"/> */}

                </Container>
                {/* <Container>
          <ContactForm />
        </Container> */}
            </StyledSection>
        </Element>
    );
}
