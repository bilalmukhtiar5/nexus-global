import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Marketing from "./Components/Marketing";
import Accordian from "./Components/Accordian";
import Footer from "./Components/Footer";
import Testimonials from './Components/Testimonials'


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Marketing />
      <Testimonials/>
      <Accordian />
      <Footer/>
    </>
  );
}

export default App;
