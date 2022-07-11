import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigation/NavBar";

import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home/Home";
import Trainings from "./pages/trainings/Trainings";
import Resources from "./pages/resources/Resources";
import NewTraining from "./pages/trainings/subpages/NewTraining";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/trainings/new" element={<NewTraining />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
