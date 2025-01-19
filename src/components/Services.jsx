
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import { motion } from 'framer-motion';


function Services() {
  return (
    <div className="bg-[#f7f8fc]" id="services">
      <div className=" pt-28 px-4 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">What Can We Do Together</h2>
          <p className="md:w-1/2 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indrstry's standard dummy text ever since the 1500s</p>
        </div>



        {/* service category */}
        <div className="py-12 md:w-4/5 mx-auto">
        <Tabs>
          <TabList className="flex flex-wrap justify-between items-center gap-4 md:gap-8">
            <Tab>Couple Counseling</Tab>
            <Tab>Paranting Skills</Tab>
            <Tab>Feeling Stuck</Tab>
            <Tab>Self Confidence</Tab>
          </TabList>

            <TabPanel className="flex flex-col md:flex-row gap-8 mt-3" >
              <motion.div
                
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}

                className='md:w-1/2 bg-white rounded-lg p-12 md:p-0 md:pt-10 font-secondary mt-1'>
                <h3 className='text-3xl font-semibold text-primary mb-4 mt-1'>
                  Couple Counseling
                </h3>
                <p className='mb-8'>
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indrstry's standard dummy text ever since the 1500s
                </p>
                <h4 className='text-xl font-medium text-black mb-4'>
                  Benifits
                </h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                </ul>
              </motion.div>
              

              {/* image */}
              <motion.div
                
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                
                className='mt-1 md:w-1/2'>
                <img src={serviceImg1} alt="" className='w-full h-auto  rounded-2xl object-cover'/>
              </motion.div>
            </TabPanel>
            
            <TabPanel className="flex flex-col md:flex-row gap-8" >
              <div className='md:w-1/2 bg-white rounded-lg p-12 md:p-0 md:pt-10 font-secondary mt-1'>
                <h3 className='text-3xl font-semibold text-primary mb-4 mt-1'>
                  Paranting Skills
                </h3>
                <p className='mb-8'>
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indrstry's standard dummy text ever since the 1500s
                </p>
                <h4 className='text-xl font-medium text-black mb-4'>
                  Benifits
                </h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                </ul>
              </div>
              

              {/* image */}
              <div className='mt-1 md:w-1/2'>
                <img src={serviceImg2} alt="" className='w-full h-auto  rounded-2xl object-cover'/>
              </div>
            </TabPanel>
            
            <TabPanel className="flex flex-col md:flex-row gap-8" >
              <div className='md:w-1/2 bg-white rounded-lg p-12 md:p-0 md:pt-10 font-secondary mt-1'>
                <h3 className='text-3xl font-semibold text-primary mb-4 mt-1'>
                  Feeling Stuck
                </h3>
                <p className='mb-8'>
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indrstry's standard dummy text ever since the 1500s
                </p>
                <h4 className='text-xl font-medium text-black mb-4'>
                  Benifits
                </h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                </ul>
              </div>
              

              {/* image */}
              <div className='mt-1 md:w-1/2'>
                <img src={serviceImg3} alt="" className='w-full h-auto  rounded-2xl object-cover'/>
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col md:flex-row gap-8" >
              <div className='md:w-1/2 bg-white rounded-lg p-12 md:p-0 md:pt-10 font-secondary mt-1'>
                <h3 className='text-3xl font-semibold text-primary mb-4 mt-1'>
                  Self Confidence
                </h3>
                <p className='mb-8'>
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indrstry's standard dummy text ever since the 1500s
                </p>
                <h4 className='text-xl font-medium text-black mb-4'>
                  Benifits
                </h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                  <li className=''>Understanding Relantionship Dynamics</li>
                </ul>
              </div>
              

              {/* image */}
              <div className='mt-1 md:w-1/2'>
                <img src={serviceImg4} alt="" className='w-full h-auto  rounded-2xl object-cover'/>
              </div>
            </TabPanel>
          
        </Tabs>
        </div>
      </div>
    </div>
  )
}
export default Services;