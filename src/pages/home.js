import Header from "../components/header"
import HomeMain from "../components/homeMain";
import Illustration from "../components/illustration";
import Section2 from "../components/section-2"
import Section3 from "../components/section-3"
import Section4 from "../components/section-4"
import Section5 from "../components/section-5"
import Footer from "../components/Footer"
import "./home.css"

function Home() {
    return (
        <div className="home">
            <Header />
            <HomeMain />
            <div className="big "></div>
            <div className="small"></div>

            <div className="bigb"></div>
            <div className="smallb"></div>
            <Illustration />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    )
}

export default Home;