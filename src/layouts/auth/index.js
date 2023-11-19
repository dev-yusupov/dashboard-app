import { Routes, Route } from "react-router-dom";

// Pages
import Login from "../../views/auth/login";
import Signup from "../../views/auth/signup";

const AuthLayout = () => {
    return (
        <>
            <h1>Work</h1>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        
        </>
    )
}

export default AuthLayout