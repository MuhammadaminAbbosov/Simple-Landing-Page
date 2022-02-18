import Illustrationimg from "../icons/Illustration.svg"
import Play from "../icons/play.svg"
import "./style/Illustration.css"
function Illustration() {
    return (
        <div className="illustration">
            <img src={Illustrationimg} alt="" />
            <button>
                <img src={Play} alt="" />
                <p>Watch the full video (2 min)</p>
            </button>
        </div>
    )
}

export default Illustration;