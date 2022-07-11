import React, { Fragment } from "react";
import { useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filters from "../../components/filters/Filters";
import FilterToggle from "../../components/filters/FilterToggle";

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Fragment>
            <Navbar bg="light">
                <Container>
                    <Link to="new">
                        <Button variant="primary">
                            <i class="bi bi-plus-lg"></i> New Resource
                        </Button>
                    </Link>

                    <FilterToggle
                        showFilters={showFilters}
                        setShowFilters={setShowFilters}
                    />
                </Container>
            </Navbar>

            {showFilters && (
                <Filters
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            )}
        </Fragment>
    );
};

export default Resources;
