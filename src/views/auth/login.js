import Button from "../../components/Button"
import "./auth.css"

import Footer from "./components/footer"

const Login = () => {
    return (
        <div className="Login-Page">
            <div className="Login-Page-Title">
                <h1>Nice to see you!</h1>
                <p>Enter your email and password to sign in</p>
            </div>
            <form className="Auth-Form-Input-Section">
                <div className="Auth-Form-Input">
                    <label for="email">Email</label>
                    <input name="email" type="email" placeholder="Email..." required />    
                </div>
                <div className="Auth-Form-Input">
                    <label for="password">Password</label>
                    <input name="password" type="password" placeholder="Password..." required />
                </div>
                <p>Don't have an account? <a href="/auth/signup">Create one!</a></p>
                <Button label="Log in" />
            </form>
            <Footer />
        </div>
    )
}

export default Login