import Hero from "../components/sections/Hero"
import MiddleSection from "../components/sections/MiddleSection"
import WorkSection from "../components/sections/WorkSection"
import ContactSection from "../components/sections/ContactSection"

const Home = () => {
  return (
    <>
      <Hero />
      <MiddleSection />
      <WorkSection showCTA={true} limit={5} IsLimit={true} />
      <ContactSection />
    </>
  )
}

export default Home