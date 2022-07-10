import React from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Knowledge Base</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trainings">
                            <Nav.Link>Trainings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resources">
                            <Nav.Link>Resources</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">
                            <i class="bi bi-search"></i>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
