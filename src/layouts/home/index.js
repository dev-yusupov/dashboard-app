import { Route, Routes } from "react-router-dom";
import routes from "../../routes/dashboard-routes";

const HomeLayout = () => {

    return (
        <>
            <Routes>
                {
                    routes.map((route, key) => {
                        return (
                            <Route path={route.path} element={route.component} key={key} />
                        )
                    })
                }
            </Routes>
        </>
    )
}

export default HomeLayout