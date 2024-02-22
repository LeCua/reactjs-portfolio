import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import Logo from "../images/logo.svg";
import Bulb from "../images/bulb.gif";
import HIGif from "../images/Hi.gif";
import { Light, Dark } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";

const StyledHero = styled.header`
    position: relative;
    display: grid;
    place-items: center;
    max-width: 1920px;
    margin: 0 auto;
    min-height: calc(100vh - var(--nav-height));

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) =>
            theme.name === "light"
                ? "linear-gradient(135deg, var(--primary), var(--bs-light))"
                : "linear-gradient(135deg, var(--primary), var(--bs-dark))"};
        z-index: -2;
    }

    /* Overlay for contrast */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => (theme.name === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")};
        z-index: -1;
    }

    .down-container {
        height: 10rem;
    }
    @media screen and (min-width: 1180px) {
        .greeting-text-box {
            background: ${({ theme }) => (theme.name === "light" ? "#98d1ffad" : "unset")};        
            border-radius: 10px;
            padding: 10px 2px;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .hero-img {
            animation: ${Spin} infinite 20s linear;
        }
    }
    
    @media screen and (min-width: 1180px) {
        &::before {
            background: ${({ theme }) =>
                theme.name === "light"
                    ? `url(${Light}) top center fixed no-repeat`
                    : `url(${Dark}) top center fixed no-repeat`};
            background-size: 100vw auto;
        }
    }

    @media screen and (min-width: 1367px) {
        &::before {
            background: ${({ theme }) =>
                theme.name === "light"
                    ? `url(${Light}) center center fixed no-repeat`
                    : `url(${Dark}) center center fixed no-repeat`};
            background-size: cover;
        }
    }
`;
const GreetingComponent = () => {
    return (
        <div class="greeting-text-box">            
            <div class="d-inline-flex justify-content-center flex-wrap mb-3">
                <img src={HIGif} alt="Greeting GIF" style={{ width: "3em", height: "3em" }} />                
                <h1 className="mb-0 d-inline display-4 title">{"\u00A0Hi,\u00A0I'm\u00A0"}</h1>
                <h1 className="mb-0 d-inline display-4 title">{"Ha Le Nhut!"}</h1>
            </div>
            
            <h3 className="mb-3 title">{"4+ YOE Full-Stack Developer"}</h3>
            <h3 className="mb-3 title chrome">{"Welcome the Blue Dragon Communications Recruitment team 🎉🎉🎉!"}</h3>
        </div>
    );
};
export default function Hero() {
    const { name } = useSelector(selectData);

    return (
        <StyledHero>
            <Container>
                <Row className="align-items-center text-center">
                    <Col className="d-none d-md-block">
                        {/* <img src={Logo} alt="React Logo" className="w-75 mx-auto hero-img" /> */}
                        <img src={Bulb} alt="Paperplane" className="mx-auto hero-imgx" style={{width: '300px', filter: 'brightness(0) invert(1)', transform: 'scaleX(-1)'}}/>
                    </Col>
                    <Col>
                        <GreetingComponent />
                        {/* <div className="d-flex align-items-center justify-content-center">
                            <SocialLinks />
                        </div> */}
                    </Col>
                </Row>
                <Row className="align-items-end down-container">
                    <Col className="m-4 text-center">
                        <Link to={"About"} className="link-icons">
                            <Icon icon="fa6-solid:circle-chevron-down" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </StyledHero>
    );
}
