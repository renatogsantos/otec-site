
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import ButtonOne from "../components/button/ButtonOne";
import ButtonTwo from "../components/button/ButtonTwo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <Row className="d-flex align-items-center py-5">
          <Col className="col-12 col-lg-6">
            <h1>Otec Contabilidade</h1>
            <div className="d-flex">
              <ButtonOne
                title="sobre nós"
                link="https://google.com"
                target={true}
              />
              <ButtonTwo
                title="sobre nós"
                link="https://google.com"
                target={true}
              />
            </div>
          </Col>
          <Col className="col-12 col-lg-6 py-5">
            <img draggable={false} width="100%" src="/images/man.png" className="vibrate-1" alt="Home apontando para o lado esquerdo da tela"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
