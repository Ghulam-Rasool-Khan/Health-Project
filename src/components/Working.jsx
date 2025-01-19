
import { motion } from 'framer-motion';


function Working() {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-img" id="working">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85"></div>
      <div className="relative px-4 py-20">
        <div className=" text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How it working
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem alias vero mollitia minima tempora enim veniam ipsam.</p>
        </div>


        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 px-2 md:px-0">
          <motion.div
            
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}

            className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-[50%] -translate-y-[50%] bg-primary text-white size-14 rounded-full flex justify-center items-center">1</div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">Step 1 description goes here. Lorem Ipsum solor set amet, consectetur adipiscing elist.</p>
          </motion.div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-[50%] -translate-y-[50%] bg-primary text-white size-14 rounded-full flex justify-center items-center">2</div>
            <h3 className="text-lg font-medium mt-8">Get a Matched</h3>
            <p className="my-2">Step 2 description goes here. Lorem Ipsum solor set amet, consectetur adipiscing elist.</p>
          </div>
          <motion.div
            
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}

            className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-[50%] -translate-y-[50%] bg-primary text-white size-14 rounded-full flex justify-center items-center">3</div>
            <h3 className="text-lg font-medium mt-8">Schedule</h3>
            <p className="my-2">Step 3 description goes here. Lorem Ipsum solor set amet, consectetur adipiscing elist.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Working;

