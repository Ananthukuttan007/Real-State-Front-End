import "../login/login.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className="login-container">
                    <h1>Logo</h1>
                    <p>Enter your credentials to access your network</p>
                    <input
                        type="text"
                        placeholder="&nbsp;&nbsp;User ID"
                        name="username"

                    /> <br></br>
                    <input
                        type="password"
                        name="password"
                        placeholder="&nbsp;&nbsp;Password"
                    /> <br></br>
                    <button type="submit">
                        Sign In
                    </button>  <br></br>
                    <Link to="/sign-up">
                        <p className="signup">
                            Sign Up
                        </p>
                    </Link>
                </div>
                <div className="signupMessage">
                    <p className="pg">Don't have an accout? <span className="signUpSpan" onClick={() => navigate('/sign-up')}>Sign Up</span></p>
                </div>
            </div>

        </>
    )
}

export default Login;