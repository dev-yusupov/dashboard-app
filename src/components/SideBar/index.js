import routes from "../../routes/dashboard-routes";
import "./SideBar.css";

const SideBar = () => {
    return (
        <section className="SideBar">
            <div className="SideBar-Logo">
                <h1>DASHBOARD-APP</h1>
            </div>
            <div className="Line"></div>
            <div className="SideBar-Links">
                {
                    routes.map((route, k) => {
                        return (
                            <a href={route.path} key={k} className="SideBar-Link">
                                {route.icon}
                                {route.name}
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SideBar