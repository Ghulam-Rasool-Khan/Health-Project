
import "./App.css"
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Working from "./components/Working";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Working></Working>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
export default App;