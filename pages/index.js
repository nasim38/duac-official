import Head from "next/head";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import Events from "../components/Events";
import HomeCarousel from "../components/HomeCarousel";
import MainNavbar from "../components/MainNavbar";
import MessageCard from "../components/MessageCard";
import NoticesCard from "../components/NoticesCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DUAC-Official</title>
        <meta
          name="description"
          content="Dhaka University Alumni Chattogram Official Website"
        />
        <link rel="icon" href="/duac-favicon.png" />
      </Head>
      <header>
        <MainNavbar />
      </header>
      {/* Main section of the landing page body */}
      <main>
        {/* Carousel of the landing page */}
        <Container>
          <HomeCarousel />
        </Container>
        {/* Grid system for events and messeges cards */}
        <Container>
          <Row className="my-5">
            <Col>
              <Events />
            </Col>
            <Col>
              <Events />
            </Col>
            <Col>
              <NoticesCard />
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <MessageCard />
            </Col>
            <Col>
              <MessageCard />
            </Col>
          </Row>
        </Container>
      </main>

      <footer>
        <h4>This is footer</h4>
      </footer>
    </div>
  );
}
