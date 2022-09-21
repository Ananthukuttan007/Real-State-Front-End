import "../login/login.css"
import {Link} from "react-router-dom"
import { FontawesomeIcon } from "@fortawesome/react-fontawesome"
import usePasswordToggle from "./usePasswordToggle"
import { library, Library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
library.add(faEye,faEyeSlash)




const Login = () => {
    const [passwordInputType, ToggleIcon] = usePasswordToggle()
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
                        type={passwordInputType}
                        name="password"
                        placeholder="&nbsp;&nbsp;Password"
                     />
                     <span className="password-toggle-icon">{ToggleIcon}</span> 
                     <br></br>
                     <button type="submit">
                        Sign In
                     </button>  <br></br>
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