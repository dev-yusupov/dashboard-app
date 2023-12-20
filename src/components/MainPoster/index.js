import { FaArrowRight } from "react-icons/fa6"
import "./MainPoster.css"

const MainPoster = () => {
    return (
        <div className="MainPoster">
            <section className="MainPosterTop">
                <p>Welcome back,</p>
                <h1>Mark Johnson</h1>
                <p>Glad to see you again! Ask me anything.</p>
            </section>
            <section className="MainPosterBottom">
                <button href="#">
                    Tap to record
                    <FaArrowRight />
                </button>
            </section>
        </div>
    )
}

export default MainPoster