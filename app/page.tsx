import FooterNew from "./component/Footer"
import SectionFour from "./component/HomeCom/SectionFour"
import SectionOne from "./component/HomeCom/SectionOne"
import SectionThree from "./component/HomeCom/SectionThree"
import SectionTwo from "./component/HomeCom/SectionTwo"
import Navbar from "./component/navbar"
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className=' '>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FooterNew />
    </main>
  )
}

