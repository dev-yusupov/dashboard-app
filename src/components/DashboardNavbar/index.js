import "./DashboardNavbar.css"
import { IoMdPerson } from "react-icons/io"

const DashboardNavbar = () => {
    return (
        <div className="DashboardNavbar">
            <div className="DashboardNavbar-Profile">
                <IoMdPerson />
                Sign In
            </div>
        </div>
    )
}

export default DashboardNavbar