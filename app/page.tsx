import FooterNew from "./component/Footer"
import SectionFour from "./component/HomeCom/SectionFour"
import SectionOne from "./component/HomeCom/SectionOne"
import SectionThree from "./component/HomeCom/SectionThree"
import SectionTwo from "./component/HomeCom/SectionTwo"
import Navbar from "./component/navbar"

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

