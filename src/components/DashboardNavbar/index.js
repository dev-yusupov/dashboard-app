import "./DashboardNavbar.css"
import { IoMdPerson, IoIosSettings, IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa"

const DashboardNavbar = () => {
    return (
        <div className="DashboardNavbar">
            <div className="DashboardNavbar-Search">
                <input type="search" placeholder="Type here..." />
                <FaSearch />
            </div>
            <div className="DashboardNavbar-Profile">
                <IoMdPerson />
                Sign In
            </div>
            <IoIosSettings />
            <IoIosNotifications />
        </div>
    )
}

export default DashboardNavbar