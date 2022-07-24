import { FacebookLogo, InstagramLogo, LinkedinLogo, List } from "phosphor-react";
import { Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="fixed-top mx-auto navbar-top">
      <Container className="text-light py-3 d-flex align-items-center justify-content-between">
        <div>
          <List size={32} />
          <small className="mx-2">Otec Contabilidade</small>
        </div>
        <div className="d-flex">
          <LinkedinLogo size={24} />
          <InstagramLogo size={24} />
          <FacebookLogo size={24} />
        </div>
      </Container>
    </div>
  );
}
