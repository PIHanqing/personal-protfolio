import {Button, Container, Image, Nav, Navbar, Offcanvas} from "react-bootstrap"
import Logo from "@/assets/img/logo.svg"
import NavIcon1 from "@/assets/img/nav-icon1.svg"
import NavIcon2 from "@/assets/img/nav-icon2.svg"
import NavIcon3 from "@/assets/img/nav-icon3.svg"
import "./index.scss"

export default function index() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Skills</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
            </Nav>
            <div className="d-flex navbar-right">
              <div className="navbar-text">
                <a href="#">
                  <Image src={NavIcon1}></Image>
                </a>
                <a href="#">
                  <Image src={NavIcon2}></Image>
                </a>
                <a href="#">
                  <Image src={NavIcon3}></Image>
                </a>
              </div>
              <a href="#">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </a>

            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
)
}
