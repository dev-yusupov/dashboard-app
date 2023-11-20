import Button from "../../components/Button"
import "./auth.css"

import Footer from "./components/footer"

const Login = () => {
    return (
        <div className="Login-Page">
            <div className="Login-Page-Title">
                <h1>Welcome!</h1>
                <p>Use these awesome forms to login or create new account in your project for free.</p>
            </div>
            <form className="Auth-Form-Input-Section">
            <div className="Auth-Form-Input">
                    <label for="name">Name</label>
                    <input name="name" type="text" placeholder="Name..." />
                </div>
                <div className="Auth-Form-Input">
                    <label for="email">Email</label>
                    <input name="email" type="email" placeholder="Email..." />    
                </div>
                <div className="Auth-Form-Input">
                    <label for="password">Password</label>
                    <input name="password" type="password" placeholder="Password..." />
                </div>
                <p>Already have an account? <a href="/auth/login">Login here!</a></p>
                <Button label="Sign up" />
            </form>
            <Footer />
        </div>
    )
}

export default Login