import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ErrorMessage, Field, Formik } from 'formik';

import Rules from "../item/rules";
import Home from "../item/Home";
import FormSection from "../item/Form";

function PageOne() {
   
    return (<>
        <Home />
        <FormSection />
        
    </>);
}
function PageTwo() {
    return (<>
        <Home />
        <Rules />
    </>);
}



function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PageOne />} />
                <Route path={"/List"} element={<PageTwo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;