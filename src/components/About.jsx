import { useState } from "react";
import thumbnailImg from '../assets/video-thumbnail.webp'
import { FaPlay } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import {motion} from 'framer-motion'



function About() {

  const [isVideoplaying, setIsVideoPlaying] = useState(false);

  function handleVideoPlay() {
    setIsVideoPlaying(true);
  }

  function handleCloseVideo() {
    setIsVideoPlaying(false);
  }

  return (
    <div className="bg-[#f7f8fc] pb-16 pt-20" id="about">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:px-0 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <motion.div
            
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}

            className="w-full md:w-1/2 mb-8 md:mb-0">
            {
              !isVideoplaying ? (
                <div className="relative">
                  <img src={thumbnailImg} alt="" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                  <button
                    onClick={handleVideoPlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer hover:bg-primary/80">
                    <FaPlay className="size-10 text-white" />
                  </button>
              </div>
              ) : (null)
            }
          </motion.div>


          {/* right side */}
          <motion.div
            
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            
            className="w-full md:w-1/2">
            <h2 className=' text-4xl font-secondary font-bold mb-4 leading-snug'>
              Individual Consult And Therapy
            </h2>
            <p className=' text-lg mb-12 md:pr-8'>
              We lower your stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our niw mindfull guide on how to meditate.
            </p>
            <button className='bg-primary text-white py-3.5 px-8 rounded font-medium hover:bg-primary/80'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </motion.div>
        </div>

        {
          isVideoplaying && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative w-full h-full flex items-center justify-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oRDRfikj2z8?si=RInU-F_LRIAPOvmh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <button onClick={handleCloseVideo} className="absolute top-10 right-10 text-white cursor-pointer h-14 w-14 rounded-full bg-green-500 hover:bg-green-500/80">
                  <span className="text-black text-5xl">
                    X
                  </span>
                </button>
            </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default About;