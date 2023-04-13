import { useState } from "react";
import "./Signup.css"
import { Link } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    return (
        <>

            <div className="container">
                <div className="container">
                    <h2 className="center">Sign Up</h2>
                    <div className="mb-3 ">
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-4 position-relative">
                                <label for="validationTooltip01" className="form-label"  >Name:</label>
                                <input type="text" value={name} className="form-control" id="validationTooltip01" required placeholder="Your Name." onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltipUsername" className="form-label">Email</label>
                                    <div className="input-group has-validation ">
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name.123@gmail.com" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                    </div>
                                </div>
                            </div>
                            <div className="conatiner">
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip02" placeholder="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="validationTooltip02" required />
                                </div>
                            </div>

                            <div className="conatiner">
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip02" className="form-label">Confirm Password </label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="validationTooltip02" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Sign Up </button>
                            </div>
                            <Link to="/Login" ><p> Already have an account? LogIn </p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;