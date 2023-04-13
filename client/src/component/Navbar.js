import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className=" bg-dark" data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <div className="navbar-brand" >To Do List</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item space-btwn" >
                                <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item space-btwn">
                                <Link className="nav-link " to="/Login">Login</Link>
                            </li>
                            <li className="nav-item space-btwn">
                                <Link className="nav-link " to="/SignUp">Sign Up</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;
