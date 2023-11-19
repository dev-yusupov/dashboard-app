import { Route, Routes } from "react-router-dom";

import Home from "./Home";

const HomeLayout = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}

export default HomeLayout