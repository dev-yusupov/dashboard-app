import { Routes, Route } from "react-router-dom";
import "./auth.css"

// Pages
import Login from "../../views/auth/login";
import Signup from "../../views/auth/signup";

const AuthLayout = () => {
    return (
        <div className="Auth">  
            <div className="Auth-Poster">
                <p>Inspired by the future:</p>
                <h1 className="Auth-Poster-Title">THE Dashboard-app by dev-yusupov</h1>
            </div>
            <div className="Auth-Form">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        
        </div>
    )
}

export default AuthLayout