import { FaHome } from "react-icons/fa";
import { IoStatsChart, IoCard, IoSettings } from "react-icons/io5"

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaHome height={"30px"} width={"30px"} />,
    },
    {
        path: "/tables",
        name: "Tables",
        icon: <IoStatsChart />
    },
    {
        path: "/billing",
        name: "Billing",
        icon: <IoCard />,
    },
    {
        path: "/rtl",
        name: "RTL",
        icon: <IoSettings />
    },
]


export default routes