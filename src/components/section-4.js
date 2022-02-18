import "./style/section-4.css"
import Ico1 from "../icons/Shape.svg"
import Ico2 from "../icons/Shape-1.svg"
import Ico3 from "../icons/Shape-2.svg"
import Ico4 from "../icons/Combined Shape.svg"
import Ico5 from "../icons/Combined Shape-1.svg"
import Img1 from "../icons/Rectangle@2x.png"
import Img2 from "../icons/cas.svg"

function Section4() {
    return (
        <section className="section-4">
            <h3>Trusted by over 20,000 companies <br /> all over the world</h3>
            <p className="text">
                Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis <br />
                blandit libero cursus mattis.
            </p>

            <div className="company">
                <a href="#">
                    <img src={Ico1} />
                </a>
                <a href="#">
                    <img src={Ico2} />
                </a>
                <a href="#">
                    <img src={Ico3} />
                </a>
                <a href="#">
                    <img src={Ico4} />
                </a>
                <a href="#">
                    <img src={Ico5} />
                </a>
            </div>

            <div className="content">
                <div className="img-box">
                    <img src={Img1} />
                    <img src={Img2} />
                </div>

                <div className="contnet-main">
                    <p className="paragraph">
                        “ I love this product and would recommend it to anyone. Could be not <br /> easier to use, and our multiple websites are wonderful. We get nice <br /> comments all the time. “
                    </p>
                    <b>Darya Finger</b>
                    <p className="textx">
                        CEO & Co-Founder <span>@Dropbox</span>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Section4;