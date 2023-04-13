// import logo from "./logo.svg";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Navbar from "./component/Navbar";
import ToDoForm from "./component/ToDoForm";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ToDoForm />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>



        </>
    )

}

export default App;