import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/pageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import PageFive from "../pages/PageFive";



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/list" element={<PageTwo />} />
                <Route path="/login" element={<PageThree/>} />
                <Route path="/verify" element={<PageFour/>} />
                <Route path="/signup" element={<PageFive/>} />
            </Routes>
        </BrowserRouter >
    );
}

export default Routing;