import React from "react";
import { Badge } from "react-bootstrap";
import { subjects } from "../../tools/subjects";

const Filters = ({ activeFilter, setActiveFilter }) => {
    const options = subjects;

    const filterHandler = (filterOption) => {
        if (filterOption === activeFilter) return setActiveFilter("");
        else return setActiveFilter(filterOption);
    };

    return (
        <>
            {options.map((filterOption) => {
                if (filterOption === activeFilter) {
                    return (
                        <Badge pill
                            onClick={(e) => filterHandler(filterOption)}
                            bg="dark"
                            text="light"
                        >
                            {filterOption}
                        </Badge>
                    );
                } else
                    return (
                        <Badge pill
                            onClick={(e) => filterHandler(filterOption)}
                            bg="light"
                            text="dark"
                        >
                            {filterOption}
                        </Badge>
                    );
            })}
        </>
    );
};

export default Filters;
