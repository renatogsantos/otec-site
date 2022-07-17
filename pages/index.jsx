import { Col, Container, Row } from "react-bootstrap";
import ButtonOne from "../components/button/ButtonOne";
import ButtonTwo from "../components/button/ButtonTwo";
import CardOne from "../components/card/CardOne";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Container fluid className="hero-1 d-flex align-items-center">
          <Container className="py-5">
            <Row className="d-flex align-items-center py-5">
              <Col className="col-12 col-lg-6">
                <h1 className="py-5 title-primary">
                  Da abertura do CNPJ à gestão financeira com o seu assessor
                  especialista.
                </h1>
                <div className="d-md-flex">
                  <ButtonOne title="abra sua empresa" link="#" target={false} />
                  <ButtonTwo title="sobre nós" link="#about" target={false} />
                </div>
              </Col>
              <Col className="col-12 col-lg-6 py-5">
                <img
                  draggable={false}
                  width="100%"
                  src="/images/man.png"
                  alt="Homem apontando para o lado esquerdo da tela"
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="blue-box d-flex align-items-center justify-content-between p-2 text-light">
          <div className="px-2">
            <span>Entre em contato</span>
          </div>
          <div>
            <ButtonTwo title="sobre nós" link="#about" target={false} />
          </div>
        </Container>
      </section>

      <section id="about">
        <Container fluid className="py-5 d-flex align-items-center">
          <Container className="py-5">
            <h2 className="title-primary pb-5">Sobre Nós</h2>
            <Row className="d-flex align-items-center">
              <Col className="col-12 col-lg-6">
                <div className="card-about">
                  <div className="blue-box-one"></div>
                  <div className="blue-box-two"></div>
                  <img
                    className="card-img"
                    draggable={false}
                    width="100%"
                    src="/images/office-01.jpg"
                    alt="imagem de escritório"
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6 d-flex flex-column align-items-end">
                <p className="p-14 pb-5 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dicta, iure impedit quibusdam iste doloremque officiis
                  accusantium recusandae excepturi, consequuntur cupiditate!
                  Atque voluptatum veniam maxime, et distinctio numquam quod
                  pariatur! Velit, ad voluptatum tempore modi ea, accusantium a,
                  quisquam incidunt odio tempora molestias temporibus sint
                  eligendi assumenda magnam deleniti nostrum! Consequatur error
                  et quidem repellat vitae molestiae temporibus necessitatibus
                  odio, aperiam quaerat quam, nesciunt, cupiditate rem quis
                  sequi. Porro, ex sapiente molestias vitae totam, nihil
                  commodi, vel eius quod aliquid nostrum cumque iure voluptatum
                  culpa fugiat. Aut ipsum minus eaque! Unde tenetur, sed cumque
                  porro molestias nihil quod magni blanditiis.
                </p>
                <ButtonOne title="abra sua empresa" link="#" target={false} />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5 d-flex align-items-center">
          <Container>
            <h3 className="title-primary pb-5">Nossos serviços</h3>
            <Row>
              <Col className="col-12 col-lg-4 p-3">
                <CardOne />
              </Col>
              <Col className="col-12 col-lg-4 p-3">
                <CardOne />
              </Col>
              <Col className="col-12 col-lg-4 p-3">
                <CardOne />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}
