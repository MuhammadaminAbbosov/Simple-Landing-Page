import "./style/section-2.css"
import Terminal from "../icons/terminal.svg"
import Card1 from "../icons/card-1.svg"
import Location from "../icons/location.svg"
import Moon from "../icons/moon.svg"

function Section2() {
    return (
        <div className="section-2">
            <h3>Explore the solutions</h3>
            <p className="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur excepteur sint occaecat cupidatat.
            </p>

            <main>
                <div className="main__left">
                    <h4>Powerful suite of tools</h4>
                    <p className="info">
                        Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore pariatur. Excepteur sint occaecat <br /> cupidatat non proident, sunt in culpa.
                    </p>

                    <div className="coursel">
                        <div className="card">
                            <div className="card__left">
                                <b>Building the Simple ecosystem</b>
                                <p>Take collaboration to the next level with security <br /> and administrative features built for teams.</p>
                            </div>
                            <div className="card__right">
                                <img src={Card1} alt={Card1} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__left">
                                <b>Building the Simple ecosystem</b>
                                <p>Take collaboration to the next level with security <br /> and administrative features built for teams.</p>
                            </div>
                            <div className="card__right">
                                <img src={Location} alt={Location} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__left">
                                <b>Building the Simple ecosystem</b>
                                <p>Take collaboration to the next level with security <br /> and administrative features built for teams.</p>
                            </div>
                            <div className="card__right">
                                <img src={Moon} alt={Moon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__right">
                    <img src={Terminal} />
                </div>
            </main>
        </div>
    )
}

export default Section2;