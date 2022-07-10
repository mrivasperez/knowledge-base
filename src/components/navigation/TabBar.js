import React from "react";
import { Nav } from "react-bootstrap";

const TabBar = ({ subpages, currentSubpage, setCurrentSubpage }) => {
    return (
        <Nav variant="tabs" defaultActiveKey="/home" className="my-3">
            {subpages &&
                subpages.map((pageTitle) => (
                    <Nav.Item onClick={(e) => setCurrentSubpage(pageTitle)}>
                        <Nav.Link active={pageTitle === currentSubpage}>
                            {pageTitle}
                        </Nav.Link>
                    </Nav.Item>
                ))}
        </Nav>
    );
};

export default TabBar;
