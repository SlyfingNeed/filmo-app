import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Prompt from "../../components/Prompt";
import Result from '../../components/clientside/[id]/Result';
import History from '../../components/clientside/[id]/History';

export default function Home() {
  return (
    <>  
      <Hero/>
      <Prompt/>
      <Result/>
      <History/>
      <Footer/>
      </>
  )
}
