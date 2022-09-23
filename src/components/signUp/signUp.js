import "../signUp/signUp.css"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import axios from 'axios'
import usePasswordToggle from "../login/usePasswordToggle"
import { library, Library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
library.add(faEye, faEyeSlash)

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordInputType, ToggleIcon] = usePasswordToggle()
    const signUp = (e) => {
        e.preventDefault();
        let DATA = {
            email: email,
            password: password
        }
        if (!DATA.email.split("@").length > 1) {
            alert("Email format is incorrect");
        }
        else if (DATA.password.length < 5) {
            alert("Please give a password of atleast 5 characters")
        }
        else if (DATA.password !== confirmPassword) {
            alert("Your Password and Confirm password doesn't match")
        }
        else {
            axios.post('https://hotproperty.herokuapp.com/user/register', DATA)
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message);
                    if (response.data.message === "success") {
                        navigate('/')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    alert('error')
                });
        }
    }
    return (
        <>
            <div>
                <div className="signUp-container">
                    <img src="images/hotproperty.png" alt="Logo"
                        style={{ width: '250px' }} />
                    <p className="para">Create New Account</p>
                    <form action="">
                        <input
                            type="email"
                            required
                            placeholder="&nbsp;&nbsp;Mail ID"
                            name="mail"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        /> <br></br>
                        <input
                            type={passwordInputType}
                            required name="password"
                            placeholder="&nbsp;&nbsp;Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        /> 
                        <span className="password-toggle-icon">{ToggleIcon}</span>
                              <br></br>  
                        <input
                            type={passwordInputType}
                            required
                            name="confirm-password"
                            placeholder="&nbsp;&nbsp;Confirm Password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}

                        />
                        <span className="password-toggle-icon">{ToggleIcon}</span>
                         <br></br>
                        <button type="submit" className="signUpBtn"
                            onClick={signUp}>
                            Sign Up
                        </button>
                    </form>

                </div>
                <p className="pg1" onClick={() => navigate('/')}>Sign In</p>
            </div>

        </>
    )
}

export default Signup;