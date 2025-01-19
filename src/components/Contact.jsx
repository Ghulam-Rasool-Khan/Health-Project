
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { motion } from 'framer-motion';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!name || !email || !phone || !country || !message) {
      alert('Please fill all fields...');
      return;
    }
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false);
    setName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setMessage('');
  }

  return (
    <div className=" bg-heroBg flex items-center py-28 px-8 text-white" id="contact">
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* left side */}
          <motion.div
          
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 2}}
            
            className="space-y-8">
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">Make an apointment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaUserAlt className="text-primary size-6"/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem Ipsum is simple dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start gap-4 ">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaHandHoldingMedical className=" text-primary size-6"/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Experts Therapist</h3>
                  <p>Lorem Ipsum is simple dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaPhoneAlt className="text-primary size-6"/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Core</h3>
                  <p>Lorem Ipsum is simple dummy text of the printing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <SiTrustpilot className="text-primary size-6"/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinik</h3>
                  <p>Lorem Ipsum is simple dummy text of the printing</p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* right side */}
          <motion.div
            
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 2}}

            className="space-y-8 p-8 bg-white shadow-xl rounded-md text-black">
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-8 p-1">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text" placeholder="Name" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" placeholder="Email Address" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel" placeholder="Contact Number" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text" placeholder="Country" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Your Message..." className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" rows={5}></textarea>
              <button type="submit" className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* show Modal */}

      {
        showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className=" bg-white p-8 rounded-md shadow-lg text-black">
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p>Thank You <span className="font-bold text-lg text-blue-500">{name}</span> , for submitting you query.</p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Close</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default Contact;