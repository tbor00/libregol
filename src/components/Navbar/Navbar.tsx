import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    const history = useHistory()

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-navbar p-3">
            <Navbar.Brand onClick={() => history.push('/')} className="cursor-pointer">
                LIBREGOL
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
    )
}

export default NavBar
