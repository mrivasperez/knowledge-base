import React, { Fragment } from "react";
import { Button, Container, Form, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewTraining = () => {
    return (
        <Fragment>
            <Navbar bg="light">
                <Container>
                    <Link to="/trainings" className="mx-2">
                        <Button variant="outline-danger">
                            <i class="bi bi-x-lg"></i> Cancel
                        </Button>
                    </Link>

                    <Button variant="outline-primary">
                        <i class="bi bi-cloud-upload"></i> Save
                    </Button>
                </Container>
            </Navbar>
            <Container>
                <div className="page-container mt-4">
                    <h5>Title</h5>
                    <Form.Control
                        type="text"
                        placeholder="Set title..."
                        className="mb-5"
                    />
                    <h5>Description</h5>

                    <Form.Control
                        as="textarea"
                        rows="8"
                        placeholder="What can I expect to learn?"
                    />
                    <h5 className="mt-5">Resources</h5>
                    {/* TODO list group w/ actions - filter at the top via text input */}
                </div>
            </Container>
        </Fragment>
    );
};

export default NewTraining;
