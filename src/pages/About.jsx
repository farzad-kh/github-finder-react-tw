import React from 'react';
import Logo from '../img/reactlogo.png'
import Logo2 from '../img/ziIKSBwLRlEeFPMFqlCf_tailwind_small.png'
import Logo3 from '../img/daisy.png'
import Logo4 from '../img/router.jpg'
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa"
const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full' transition={{ duration: 0.50, ease: "easeOut" }}>


            <div className='flex justify-center align-center flex-col items-center max-sm:px-4 max-sm:text-center '>
                <h1 className='text-4xl mb-4 max-sm:text-3xl font-bold'>Github Finder</h1>
                <div className=' sm:text-2xl text-xl '>
                    <p>A react app to search profiles and see profile details and more</p>
                </div>
                <div className='h-20 items-center gap-4 flex w-72 mb-5 '>
                    <img className='w-2/4 rounded-full' src={Logo} />
                    <img className='w-2/4 rounded-full' src={Logo2} />
                    <img className='w-2/4 rounded-full' src={Logo3} />
                    <img className='w-2/4 rounded-full' src={Logo4} />
                    <div>
                    <svg viewBox="3.7 3.7 43.6 43.6" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d" /><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" /><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" /></svg>
                    </div>
                    <FaGithub className='p-0 w-2/4 h-[32px]' />


                </div>
                <h3 className='text-xl mb-4 '>Made with ❤️ by farzad khorasani</h3>

            </div>
        </motion.div>
    );
};

export default About;