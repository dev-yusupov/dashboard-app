import { FaArrowRight } from "react-icons/fa6"
import "./MainPoster.css"

const MainPoster = () => {
    return (
        <div className="MainPoster">
            <section className="MainPosterTop">
                <p className="MainPoster-Paragraph">Welcome back,</p>
                <h1 className="MainPoster-Name">Mark Johnson</h1>
                <p className="MainPoster-Paragraph">Glad to see you again! Ask me anything.</p>
            </section>
            <section className="MainPosterBottom">
                <button href="#" className="MainPoster-Btn">
                    Tap to record
                    <FaArrowRight />
                </button>
            </section>
        </div>
    )
}

export default MainPoster