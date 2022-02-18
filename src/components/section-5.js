import "./style/section-5.css"
import Img from "../icons/Group.svg"

function Section5() {
    return (
        <section className="section-5">
            <div className="container">
                <b>Powering your business</b>
                <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo <br /> expedita voluptas culpa sapiente.</p>
                <div className="input-box">
                    <input placeholder="Your email" type="text" />
                    <a href="#">Start free trial</a>
                </div>
                <p className="txt2">7 days free trial. No credit card required.</p>

                <img src={Img} alt="" />
            </div>

        </section>
    )
}

export default Section5;