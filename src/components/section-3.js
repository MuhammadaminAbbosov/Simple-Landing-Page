import "./style/section-3.css"
import Ico1 from "../icons/sc-3.svg"
import Ico2 from "../icons/sc3-1.svg"
import Ico3 from "../icons/sc3-2.svg"
import Ico4 from "../icons/sc3-3.svg"
import Ico5 from "../icons/sc3-4.svg"
import Ico6 from "../icons/sc3-5.svg"

function Section3() {
    return (
        <section className="section-3">
            <h3>Explore the solutions</h3>
            <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur excepteur sint occaecat cupidatat.
            </p>

            <div className="container">
                <div className="cards">
                    <div className="card-top">
                        <div className="card">
                            <img src={Ico1} alt="" />
                            <b>Initial Contact</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div className="card">
                            <img src={Ico2} alt="" />
                            <b>Discovery Session</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div className="card">
                            <img src={Ico3} alt="" />
                            <b>Contracting</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card">
                            <img src={Ico4} alt="" />
                            <b>Fast Prototyping</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div className="card">
                            <img src={Ico5} alt="" />
                            <b>Design Phase</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                        <div className="card">
                            <img src={Ico6} alt="" />
                            <b>Develop & Launch</b>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>

        </section>
    )
}

export default Section3;