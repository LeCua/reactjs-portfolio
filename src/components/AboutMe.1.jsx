import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { StyledAboutMe } from "./AboutMe";


export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {/* <p>{bio}</p>
{moreInfo && <p>{moreInfo}</p>} */}
                <div class="trix-content">
                  <div>
                    <strong>Highly motivated and versatile Full-Stack Developer</strong> with{" "}
                    <strong>4+ years of experience</strong> crafting both web and mobile
                    applications.
                  </div>
                  <div>
                    <strong>Technical Strengths:</strong>
                  </div>
                  <ul>
                    <li>
                      <strong>Full-stack:</strong> Adept in <strong>front-end</strong> (HTML, CSS,
                      JavaScript, jQuery, WebRTC, ReactJS), <strong>back-end</strong> (Java
                      Servlet/JSP/Spring Boot, Python Flask, PHP Laravel/WordPress) and{" "}
                      <strong>mobile </strong>(Flutter, Native Android) development.
                    </li>
                    <li>
                      <strong>Database:</strong> Skilled in SQL (MySQL/MariaDB) and comfortable
                      with NoSQL options (Firebase, Supabase).
                    </li>
                    <li>
                      <strong>API integration:</strong> Extensive experience with Google,
                      Firebase, Supabase, Razor Pay, Sinch, OneSignal, Vcomsat APIs...
                    </li>
                    <li>
                      <strong>Diverse project experience:</strong> Proven ability to tackle a wide
                      range of projects, including streaming &amp; chatting apps, ERP systems,
                      smart home applications, booking systems, and mobile apps.
                    </li>
                  </ul>
                  <div>
                    <strong>Beyond the Code:</strong>
                  </div>
                  <ul>
                    <li>
                      <strong>Strong problem-solving and business analysis skills:</strong> Can
                      effectively translate business needs into user-centric, well-architected
                      solutions.
                    </li>
                    <li>
                      <strong>Eager to learn:</strong> Possesses a continuous learning mindset and
                      a passion for staying ahead of the curve.
                    </li>
                  </ul>
                </div>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }} />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
