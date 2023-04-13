import "./Signup.css"
import { Link } from "react-router-dom";
const LogIn = () => {
    return (
        <>

            <div className="container">
                <h2 className="center">Log In</h2>
                <div className="mb-3 ">
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="mb-3">
                            <div className="col-md-4 position-relative">
                                <label for="validationTooltipUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <input type="text" placeholder="name.123@gmail.com" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                </div>
                            </div>
                        </div>
                        <div className="conatiner">
                            <div className="col-md-4 position-relative">
                                <label for="validationTooltip02" placeholder="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="validationTooltip02" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Log In</button>
                        </div>
                        <Link to="/SignUp" ><p> Don't have an account? Create one </p></Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LogIn;