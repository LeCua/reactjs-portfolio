import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume, skillData2, skillData3 } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Front End Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mb-5 align-items-center justify-content-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} md={2} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Title>
            <h2>Back End Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mb-5  align-items-center justify-content-center">
            {skillData2.map((skills) => {
              return (
                <Col xs={4} md={2} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Title>
            <h2>Other Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mb-3 align-items-center justify-content-center">
            {skillData3.map((skills) => {
              return (
                <Col xs={4} md={2} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>

          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
