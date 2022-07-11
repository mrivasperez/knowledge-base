import React, { Fragment, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filters from "../../components/filters/Filters";
import FilterToggle from "../../components/filters/FilterToggle";

const Trainings = () => {
    // TODO create reusable component with filter button
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilter, setActiveFilter] = useState("");

    return (
        <Fragment>
            <Navbar bg="light" >
                <Container>
                    <Link to="new">
                        <Button variant="primary">
                            <i class="bi bi-plus-lg"></i> New Training
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

export default Trainings;
