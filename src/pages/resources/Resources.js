import React from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Filters from "../../components/filters/Filters";
import FilterToggle from "../../components/filters/FilterToggle";

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Container>
            <div className="d-flex my-3 justify-content-between align-items-center">
                <Button variant="primary">
                    <i class="bi bi-plus-lg"></i> New Resource
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

export default Resources;
