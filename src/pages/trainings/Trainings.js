import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Filters from "../../components/filters/Filters";
import FilterToggle from "../../components/filters/FilterToggle";

const Trainings = () => {
    // TODO create reusable component with filter button
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilter, setActiveFilter] = useState("");

    return (
        <Container>
            <div className="d-flex my-3 justify-content-between align-items-center">
                <Button variant="primary">
                    <i class="bi bi-plus-lg"></i> New Training
                </Button>
                {showFilters && (
                    <Filters
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                )}
                <FilterToggle
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                />
            </div>
        </Container>
    );
};

export default Trainings;
