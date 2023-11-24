import { Route, Routes } from "react-router-dom";
import routes from "../../routes/dashboard-routes";

import SideBar from "../../components/SideBar"

import "./Home.css"

const HomeLayout = () => {

    return (
        <div className="Dashboard"> 
            <div className="Dashboard-SideBar">
                <SideBar />
            </div> 
            {/* <div> */}
                <main className="Main-Section">
                    <Routes>
                        {
                            routes.map((route, key) => {
                                return (
                                    <Route path={route.path} element={route.component} key={key} />
                                )
                            })
                        }
                    </Routes>
                </main>
            {/* </div> */}
        </div>
    )
}

export default HomeLayout