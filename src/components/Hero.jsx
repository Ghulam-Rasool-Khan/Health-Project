
import heroImg from '../assets/hero.webp'
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from 'framer-motion';


function Hero() {
  return (
    <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen" id="home">
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side */}
        <motion.div
          
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}

          className="md:w-1/2 ">
          <h1 className=' text-4xl font-secondary font-bold mb-4 md:w-4/5 leading-snug'>Start Your Journey to Mental Willness</h1>
          <p className=' text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our niw mindfull guide on how to meditate.</p>
          <button className='bg-primary text-white py-3.5 px-8 rounded font-medium hover:bg-primary/80'>
            <a href="#contact" className='flex gap-1 items-center'>
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </motion.div>



        {/* right side */}
        <motion.div
          
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          
          className=" md:w-1/2 h-full">
          <img src={heroImg} alt="hero-image" className='w-full object-cover'/>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero;