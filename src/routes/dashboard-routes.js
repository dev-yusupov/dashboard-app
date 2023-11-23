import { FaHome } from "react-icons/fa";
import { IoStatsChart, IoCard, IoSettings } from "react-icons/io5";

// Elements
import { Home } from "../views/dashboard";
import Billing from "../views/dashboard/Billing";
import Table from "../views/dashboard/Tables";


const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaHome height={"30px"} width={"30px"} />,
        component: <Home />
    },
    {
        path: "/tables",
        name: "Tables",
        icon: <IoStatsChart />,
        component: <Table />

    },
    {
        path: "/billing",
        name: "Billing",
        icon: <IoCard />,
        component: <Billing />
    },
    {
        path: "/rtl",
        name: "RTL",
        icon: <IoSettings />
    },
]


export default routes