import HeaderHero from "./components/hero/headerHero/headerHero"
import FeatureHero from "./components/hero/featuresHero/featureHero"
import FeatureSection from "./components/section/featureSection"
import HowItWorks from "./components/section/howItWorksSection"
import ContactSection from "./components/section/contactSection"
import FooterSection from "./components/section/footerSection"

function App() {

  return (
    <>
      <HeaderHero />
      <FeatureHero />
      <FeatureSection />
      <HowItWorks />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App
