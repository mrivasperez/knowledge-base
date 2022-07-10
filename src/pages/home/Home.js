import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import TabBar from "../../components/navigation/TabBar";
import Assignments from "./subpages/Assignments";
import Favorites from "./subpages/Favorites";
import Notes from "./subpages/Notes";
import Notifications from "./subpages/Notifications";
import Settings from "./subpages/Settings";

const Home = () => {
    const [currentSubpage, setCurrentSubpage] = useState("Favorites"); // TODO edit to be display name variable

    const subpages = [
        "Favorites",
        "Assignments",
        "Notes",
        "Notifications",
        "Settings",
    ];

    let view;

    switch (currentSubpage) {
        case "Favorites":
            view = <Favorites />;
            break;
        case "Assignments":
            view = <Assignments />;
            break;
        case "Notes":
            view = <Notes />;
            break;
        case "Notifications":
            view = <Notifications />;
            break;
        case "Settings":
            view = <Settings />;
            break;
        default:
            break;
    }

    return (
        <Container>
            <TabBar
                subpages={subpages}
                currentSubpage={currentSubpage}
                setCurrentSubpage={setCurrentSubpage}
            />
            {view}
        </Container>
    );
};

export default Home;
