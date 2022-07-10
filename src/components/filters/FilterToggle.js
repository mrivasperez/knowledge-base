import React from "react";
import { Button } from "react-bootstrap";

const FilterToggle = ({ showFilters, setShowFilters }) => {
    const handleFilterToggle = () => {
        if (showFilters) return setShowFilters(false);
        else return setShowFilters(true);
    };

    return (
        <>
            {showFilters ? (
                <Button variant="secondary" onClick={handleFilterToggle}>
                    <i class="bi bi-funnel-fill"></i> Hide Filters
                </Button>
            ) : (
                <Button
                    variant="outline-secondary"
                    onClick={handleFilterToggle}
                >
                    <i class="bi bi-funnel"></i> Show Filters
                </Button>
            )}
        </>
    );
};

export default FilterToggle;
