import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import { selectData, selectError, selectIsLoading } from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, ButtonToolbar, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
import stagesplash from "../images/stagesplash.jpg";
import nhixuan from "../images/nhi_xuan.png";
import hlsmart from "../images/hlsmart.png";
export default function Projects() {
    const [mainProjects, setMainProjects] = React.useState([]);
    const { theme } = useAppContext();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const data = useSelector(selectData);

    React.useEffect(
        function () {
            const tempData = [];
            data.forEach((el, i) => (tempData[i] = Object.create(el)));
            if (data.length !== 0 && filteredProjects.length !== 0) {
                const tempArray = tempData.filter((obj) => filteredProjects.includes(obj.name));
                tempArray.length !== 0 ? setMainProjects([...tempArray]) : setMainProjects([...tempData.slice(0, 3)]);
            } else {
                setMainProjects([...tempData.slice(0, 3)]);
            }
        },
        [data]
    );

    return (
        <Element name={"Projects"} id="projects">
            <section className="section">
                <Container>
                    <Container className="d-flex">
                        <Title>
                            <h2>Projects</h2>
                            <div className="underline"></div>
                        </Title>
                    </Container>
                    {isLoading && (
                        <Container className="d-flex">
                            <Loading />
                        </Container>
                    )}
                    {false && error && <h2 className="text-center">{error}</h2>}
                    {false && !error && data.length === 0 && (
                        <h2 className="text-center">Oops, you do not have any GitHub projects yet...</h2>
                    )}
                    <Row xs={1} md={1} lg={1} className="g-4 justify-content-center">
                        {[
                            {
                                id: 1,
                                name: "CVMeeting, CVLearning, Call4Meeting",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: "https://cvmeeting.vn/img/logo.svg",
                                homepage: "https://cvmeeting.vn",
                                demo: "",
                                description: (
                                    <div>
                                        
                                        <p>
                                            <b>Features:</b>
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Meetings:</b> Up to 50 participants, screen sharing, breakout rooms,
                                                recording, e2ee encryption, specialized layouts for webinars/learning,
                                                virtual backgrounds, audio processing.
                                            </li>
                                            <li>
                                                <b>Accessibility:</b> Join via mobile app, browser, or embedded script.
                                            </li>
                                            <li>
                                                <b>Learning-Specific:</b> Exercises, exams, communication tools,
                                                dedicated roles, scheduling.
                                            </li>
                                            <li>
                                                <b>Monetization:</b> VietQR payments, fee-based rooms, flexible pricing.
                                            </li>
                                            <li>
                                                <b>Other:</b> Organization features, Google integration, push
                                                notifications, mobile app calls.
                                            </li>
                                        </ul>
                                        <p>
                                            <b>Tech Stack:</b>
                                        </p>
                                        <ul>
                                            <li>Java Servlet, JSP, Apache Tomcat</li>
                                            <li>Python, Node.js, MySQL</li>
                                            <li>JQuery, WebRTC, JavaScript (IndexedDB, Service Worker, etc.)</li>
                                            <li>WebSocket, Firebase (Auth, FCM, Analytics)</li>
                                            <li>Google Adsense, Janus SFU Server</li>
                                            <li>Hybrid Android/iOS, VIETQR</li>
                                            <li>Machine Learning (background, image, audio)</li>
                                        </ul>
                                        <p>
                                            <b>3rd Party APIs:</b>
                                        </p>
                                        <ul>
                                            <li>Firebase (Auth, FCM, Analytics)</li>
                                            <li>Google Adsense, APNS</li>
                                            <li>Google API (Gmail, Calendar)</li>
                                        </ul>
                                        <p>
                                            <b>Platform:</b> Flexible for various use cases: online meetings,
                                            consulting, education, telehealth, etc.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                id: 2,
                                name: "Logistics ERP app for Xuan Loc",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: "https://xllogistic.thuanhai.com.vn/img/xuanloc_splash.png",
                                homepage: "https://xllogistic.thuanhai.com.vn",
                                demo: "",
                                description: (
                                    <div>
                                        <p>
                                            <b>Tech stack:</b> Java, MySQL, JSP, JQuery, custom algorithms, SheetJs,
                                            hybrid mobile app
                                        </p>
                                        <p>
                                            <b>APIs:</b> Firebase, Google Maps/Gmail/Calendar, VICOMSAT
                                        </p>
                                        <ul>
                                            <li>Replaces manual tools with secure, centralized data management</li>
                                            <li>Handles large image volumes (500MB-1GB daily)</li>
                                            <li>Self-designed fee optimization algorithm for cost savings</li>
                                            <li>Streamlined operations for improved profitability</li>
                                        </ul>
                                    </div>
                                ),
                            },
                            {
                                id: 3,
                                name: "StageSplash - Indian Musician/Artist Booking Application",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: stagesplash,
                                // homepage: "https://xllogistic.thuanhai.com.vn",
                                demo: "",
                                description: (
                                    <div>
                                        <p>
                                            <b>Tech stack:</b> Flutter, JQuery, TailwindCSS, NodeJs (ExpressJs,
                                            TypeScript, TypeORM, Websocket, ...), MySQL
                                        </p>
                                        <p>
                                            <b>APIs:</b> Sinch (communication), Razorpay (payments), OneSignal (push
                                            notifications)
                                        </p>
                                        <p>
                                            <b>Description:</b> a mobile app connecting Indian musicians and event
                                            hosts. Built features for artist profiles, video uploads, booking
                                            management, and in-app messaging. Improved musician discoverability and
                                            booking efficiency.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                id: 4,
                                name: "ERP App for Nhi Xuan Addiction treatment center",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: nhixuan,
                                // homepage: "https://xllogistic.thuanhai.com.vn",
                                demo: "",
                                description: (
                                    <div>
                                        <p>
                                            <b>Tech stack:</b> ReactJs, ElectronJs, PHP Laravel, MySQL
                                        </p>
                                        <p>
                                            <b>Description:</b> Desktop application for Nhi Xuan Addiction Treatment
                                            Center. Replacing manual tools with secure, centralized member data
                                            management via a user-friendly interface and RF card. Data are securely
                                            stored in the server in the private network
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                id: 5,
                                name: "Cast2Web - Easy Screen Sharing Application",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: "https://cvmeeting.vn/cast2web/img/cast2int_square.png",
                                homepage: "https://play.google.com/store/apps/details?id=mailinhtech.cast2internet",
                                demo: "",
                                description: (
                                    <div>
                                        <p>
                                            <b>Tech stack:</b> ReactJs, ElectronJs, PHP Laravel, MySQL
                                        </p>
                                        <p>
                                            <b>APIs:</b> Firebase (Auth, FCM), Google Play & Apple in-app purchase and
                                            subscription, Google Adsense, Facebook Ads
                                        </p>
                                        <p>
                                            <b>Description:</b> Effortless QR/link screen share - responsive, secure, no
                                            viewer app needed. Share screen across devices Android, IOS & browser
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                id: 6,
                                name: "HLSmart & Graduation project - Smart Home System",
                                // html_url: "https://github-readme-stats.vercel.app/api?username=mshuber1981",
                                image: hlsmart,
                                // homepage: "https://xllogistic.thuanhai.com.vn",
                                demo: "",
                                description: (
                                    <div>                                        
                                        <p>
                                            <b>Technologies:</b>
                                        </p>
                                        <ul className="tech-list">
                                            <li>
                                                <b>Web:</b> Java Servlet, JSP, MySQL, Janus SFU, JQuery, WebRTC, Hybrid,
                                                Firebase (Auth, FCM)
                                            </li>
                                            <li>
                                                <b>Embedded:</b> C, C++ (ESP8266, PIC, Arduino), Python (OpenCV,
                                                Tensorflow), FriendlyCore, Raspi, NanoPi, PCB design
                                            </li>
                                            <li>
                                                <b>Network:</b> MQTT, TCP/UDP socket, mDNS, WIFI, LAN
                                            </li>
                                        </ul>
                                        <p>
                                            <b>Products:</b>
                                        </p>
                                        <ul className="product-list">
                                            <li>
                                                Smart Doorbell (real-time video, audio, two-way communication, motion
                                                detection, smart lock integration)
                                            </li>
                                            <li>Smart Switch</li>
                                            <li>Smart IR Control</li>
                                            <li>Smart Light</li>
                                            <li>Smart Home Server</li>
                                            <li>Mobile App</li>
                                            <li>Smart LCD</li>
                                            <li>Web Interface</li>
                                        </ul>
                                        <p>
                                            <b>Features:</b>
                                        </p>
                                        <ul>
                                            <li>Interconnected devices for home automation</li>
                                            <li>User convenience and control</li>
                                            <li>
                                                Enhanced security and access control through smart doorbell integration
                                                with smart locks
                                            </li>
                                        </ul>
                                    </div>
                                ),
                            },
                        ].map(function ({ id, image, name, description, html_url, homepage }) {
                            return (
                                <Col key={id}>
                                    <StyledCard
                                        image={image}
                                        name={name}
                                        description={description}
                                        url={html_url}
                                        demo={homepage}
                                    />
                                </Col>
                            );
                        })}
                    </Row>

                    {/* {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  html_url,
                  homepage,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        demo={homepage}
                      />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="icomoon-free:github" /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )} */}
                </Container>
            </section>
        </Element>
    );
}
