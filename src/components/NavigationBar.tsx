import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBar.css"
export const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container style={{marginLeft:0}}>
                <Navbar.Brand href="#home" className="justify-content-start">Design Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Blockchain</Nav.Link>
                        <Nav.Link href="#link">Solana</Nav.Link>
                        <Nav.Link href="#link">Our Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Nav className="justify-content-end" style={{marginRight: 10}}>
                <Nav.Link href="#home"><i className="fab fa-github"></i></Nav.Link>
            </Nav>
        </Navbar>
    );
}
