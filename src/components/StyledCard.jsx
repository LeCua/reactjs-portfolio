import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Card, Col, Row } from "react-bootstrap";

const StyledCardComponent = styled.div`
    .card {
        color: ${({ theme }) => theme.color};
        background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
        box-shadow: ${({ theme }) =>
            theme.name === "light" ? "0 3px 10px rgb(0 0 0 / 0.2)" : "0 3px 10px rgb(255 255 255 / 0.2)"};

        .card-link {
            text-decoration: none;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.color};

            &:hover {
                color: var(--primary);
            }
        }

        .card-footer {
            border-top: var(--border);
            background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
        }
    }
`;

export default function StyledCard({ image, name, description, url, demo }) {
    return (
        <StyledCardComponent>
            <Card style={{ height: "unset" }}>
                <Row>
                    <Col xs={12} md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Card.Img
                            variant="top"
                            src={image ? image : GH}
                            alt={name}
                            className="mx-auto"
                            style={{ padding: "10px" }}
                        />
                    </Col>
                    <Col>
                        <Card.Body className="overflow-auto text-center">
                            {demo !== "" && demo !== null ? (
                                <Card.Link href={demo}>
                                    <Card.Title>
                                        <h3>{name}</h3>
                                        {/* <Icon icon="icon-park-outline:link" /> */}
                                    </Card.Title>
                                </Card.Link>
                            ) : (
                                <Card.Title>{name}</Card.Title>
                            )}
                            <Card.Text style={{ textAlign: "left", maxHeight: "270px" }}>{description}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                {/* <Card.Footer className="text-center">
                    <Card.Link href={url}>
                        {"View on GitHub "}
                        <Icon icon="icomoon-free:github" />
                    </Card.Link>
                </Card.Footer> */}
            </Card>
        </StyledCardComponent>
    );
}
