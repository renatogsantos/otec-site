import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
} from "phosphor-react";
import { Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="fixed-top mx-auto navbar-top">
      <Container className="text-light py-2 d-flex align-items-center justify-content-between">
        <div>
          <a href="#" className="menu-button">
            <List size={32} />
          </a>
        </div>
          <small className="mx-2">Otec Contabilidade</small>
        <div className="d-flex">
          <a href="" className="">
            <LinkedinLogo size={24} />
          </a>
          <a href="" className="">
            <InstagramLogo size={24} />
          </a>
          <a href="" className="">
            <FacebookLogo size={24} />
          </a>
        </div>
      </Container>
    </div>
  );
}
