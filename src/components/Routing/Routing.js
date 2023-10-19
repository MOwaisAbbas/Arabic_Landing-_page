import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { ErrorMessage, Field, Formik } from 'formik';

import Rules from "../item/rules";
import Home from "../item/Home";
import FormSection from "../item/Form";
import Headeer from "../header/Header";
import Footer from "../footer/footer";

function PageOne() {

    return (<>
        <Headeer />
        <Home />
        <FormSection />
        <Footer />

    </>);
}
function PageTwo() {
    return (<>
        <Headeer />
        <Home />
        <Rules />
        <Footer />
    </>);
}



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/List" element={<PageTwo />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Routing;