import AboutMe from "../components/Home_Components/AboutMe";
import ContactMe from "../components/Home_Components/ContactMe";
import Footer from "../components/Home_Components/Footer";
import HeroSection from "../components/Home_Components/HeroSection";
import MyPortfolio from "../components/Home_Components/MyPortfolio";
import MySkills from "../components/Home_Components/MySkills";

export default function Home() {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />

            <ContactMe />
            <Footer />
        </>
    )
}