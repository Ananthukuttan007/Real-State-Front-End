import "../login/login.css"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { FontawesomeIcon } from "@fortawesome/react-fontawesome"
import usePasswordToggle from "./usePasswordToggle"
import { library, Library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
library.add(faEye, faEyeSlash)


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordInputType, ToggleIcon] = usePasswordToggle()
    const login = (e) => {
        e.preventDefault();
        let DATA = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/user/login', DATA)
            .then(function (response) {
                console.log(response.data);
                alert(response.data.message);
                if (response.data.message == "success") {
                    localStorage.setItem('token', response.data.token)
                    console.log("local", localStorage)
                    navigate('/home-page')
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('error')
            });
    }
    return (
        <>
            <div>
                <div className="login-container">
                    <h1>Logo</h1>
                    <p>Enter your credentials to access your network</p>
                    <form action="" method="POST">
                        <input
                            type="email"
                            required
                            placeholder="&nbsp;&nbsp;User ID"
                            name="username"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        /> <br></br>
                        <input
                            type={passwordInputType}
                            required
                            name="password"
                            placeholder="&nbsp;&nbsp;Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <span className="password-toggle-icon">{ToggleIcon}</span>
                        <br></br>
                        <button type="submit" onClick={login}>
                            Sign In
                        </button>  <br></br>
                    </form>
                    <Link to="/sign-up">
                        <p className="signup">
                            Sign Up
                        </p>
                    </Link>
                </div>
                <p className="pg">Don't have an accout? <span className="name">Sign Up</span></p>
            </div>

        </>
    )
}

export default Login;