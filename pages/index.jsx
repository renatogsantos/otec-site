import { Col, Container, Row } from "react-bootstrap";
import ButtonOne from "../components/button/ButtonOne";
import ButtonTwo from "../components/button/ButtonTwo";
import CardOne from "../components/card/CardOne";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Container fluid className="hero-1 d-flex align-items-center p-0 m-0">
          <Container className="py-5">
            <Row className="d-flex align-items-center py-5">
              <Col className="col-12 col-lg-6 order-2 order-md-1 p-4">
                <h1 className="title-h1 text-light" value="Otec Contabilidade">
                  Da abertura do CNPJ à gestão financeira com o seu assessor
                  especialista.
                </h1>
                <div className="d-md-flex py-3">
                  <ButtonTwo title="entre em contato" link="#" target={false} />
                </div>
              </Col>
              <Col className="col-12 col-lg-6 py-5 order-1 order-md-2">
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
      </section>

      <section id="about">
        <Container fluid className="py-5 d-flex align-items-center">
          <Container className="py-5">
            <h2 className="title-primary pb-5">Sobre Nós</h2>
            <Row className="d-flex align-items-center">
              <Col className="col-12 col-lg-6">
                <div className="card-about">
                  <img
                    className="card-img"
                    draggable={false}
                    width="100%"
                    src="/images/office-1.png"
                    alt="imagem de escritório"
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-md-end">
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
