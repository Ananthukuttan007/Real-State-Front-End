import "../signUp/signUp.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className="signUp-container">
                    <h1>Logo</h1>
                    <p className="para">Create New Account</p>
                    <input
                        type="text"
                        placeholder="&nbsp;&nbsp;Mail ID"
                        name="mail"

                    /> <br></br>
                    <input
                        type="password"
                        name="password"
                        placeholder="&nbsp;&nbsp;Password"
                    /> <br></br>

                    <input
                        type="password"
                        name="confirm-password"
                        placeholder="&nbsp;&nbsp;Confirm Password"
                    /> <br></br>

                    <Link to="/login">
                        <button type="submit" className="signUpBtn">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <p className="pg1" onClick={() => navigate('/login')}>Sign In</p>
            </div>

        </>
    )
}

export default Signup;