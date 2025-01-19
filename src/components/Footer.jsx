
import footerLogo from '../assets/footer-logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { motion } from 'framer-motion';


function Footer() {

  return (
    <div className=" bg-gray-100 px-8 py-5" id='footer'>
      <motion.div
        
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}

        className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className="space-y-6 shadow-xl p-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <img src={footerLogo} alt="" className='w-32 h-auto'/>
          </div>
          <p className=' border-black text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore numquam excepturi debitis similique.</p>
          <div className='flex space-x-4'>
            <a href="#" className=' bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaFacebook className='text-xl'/>    
            </a>
            <a href="#" className=' bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaTwitter className='text-xl'/>    
            </a>
            <a href="#" className=' bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaInstagramSquare className='text-xl'/>    
            </a>
            <a href="#" className=' bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
              <FaLinkedin className='text-xl'/>    
            </a>
          </div>
        </div>



        <div className='space-y-6 shadow-xl p-2 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#home" className='hover:underline text-gray-700'>Home</a>
            </li>
            <li>
              <a href="#about" className='hover:underline text-gray-700'>About Us</a>
            </li>
            <li>
              <a href="#services" className='hover:underline text-gray-700'>Services</a>
            </li>
            <li>
              <a href="#contact" className='hover:underline text-gray-700'>Contact Us</a>
            </li>
          </ul>
        </div>

        <div className='space-y-6 shadow-xl p-2 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4'>Support</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#" className='hover:underline text-gray-700'>FAQs</a>
            </li>
            <li>
              <a href="#" className='hover:underline text-gray-700'>Terms of Services</a>
            </li>
            <li>
              <a href="#" className='hover:underline text-gray-700'>Privacy Policy</a>
            </li>
            <li>
              <a href="#contact" className='hover:underline text-gray-700'> Support Center</a>
            </li>
          </ul>
        </div>

        <div className='space-y-6 shadow-xl p-2 rounded-lg'>
          <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-primary' />
              <p className='text-gray-700'>123 Street, City, Country</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-primary' />
              <p className='text-gray-700'>+123 456 7890</p>
            </li>
            <li className='flex items-center gap-2'>
              <MdLocalPostOffice className='text-primary' />
              <p className='text-gray-700'>info@mindleap.com</p>
            </li>
           
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
export default Footer;