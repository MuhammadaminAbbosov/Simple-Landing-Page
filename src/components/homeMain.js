import "./style/section-1.css"
import Wonderful from "../icons/Combined Shape.svg"

function homeMain() {
    return (
        <section className="section-1">
            <h1>Make your website</h1>
            <img src={Wonderful} alt="" />
            <p>Our landing page template works on all devices, so you only have to <br />
                set it up once, and get beautiful results forever.
            </p>
            <div className="btns">
                <a href="#">Start free trial</a>
                <a href="#">Learn more</a>
            </div>
        </section>
    )
}

export default homeMain;