import "./Home.css"
import { IoIosWallet } from "react-icons/io";
import { FaGlobe, FaShoppingCart } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5"

import MainPoster from "../../../components/MainPoster";

//Components
import Data from "../../../components/Data"

const Home = () => {
    return (
        <div className="HomePage">
            <section className="HomePage-Data-Section">
                <Data title={"Today's Money"} amount={"$53,000"} change={"+55%"} changeColor={"#01B574"} icon={<IoIosWallet />} />
                <Data title={"Today's Users"} amount={"2,300"} change={"+5%"} changeColor={"#01B574"} icon={<FaGlobe />} />
                <Data title={"New clients"} amount={"+3,052"} change={"-14%"} changeColor={"#E31A1A"} icon={<IoDocumentText />} />
                <Data title={"Total Sales"} amount={"$173,000"} change={"+8%"} changeColor={"#01B574"} icon={<FaShoppingCart />} />
            </section>
            <section>
                <MainPoster />
            </section>
        </div>
    )
}

export default Home