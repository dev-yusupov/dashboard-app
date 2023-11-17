import { Route, Routes } from "react-router-dom";

import Home from "./Home";

const HomeLayout = () => {
    return (
        <>
            <h1>Hello, World</h1>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}

export default HomeLayout