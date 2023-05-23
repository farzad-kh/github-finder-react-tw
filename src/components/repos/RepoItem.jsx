import React, { useContext } from 'react';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass, IoLogoCss3 } from "react-icons/io"
import { DiPhp,DiRubyRough,DiPython } from "react-icons/di"
import { SiTypescript } from "react-icons/si"
import { FaCuttlefish } from "react-icons/fa"
import logo from "../../img/go.png" 
import moment from 'moment';
import { pushUpdate } from "../helper/fun"
const RepoItem = ({ repo, index }) => {
    const { theme } = useContext(ThemeContext)
    //* language
  

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            // exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`transition-colors  duration-100 mb-4   px-4 card-body sm:!p-7 sm:!py-0   !py-0   rounded-md bg-base-100   
            ${theme ? " shadow-slate-300 shadow-md    hover:bg-[#f6f6f6]" : " shadow-slate-950  bg-base-100 shadow-lg  hover:bg-neutral"}`}>
            <div className=' card py-5'>

                {repo.pushed_at &&

                    <div className=' stat-title  text-xs pb-[2px] align-middle flex flex-col self-end '>
                        Updated
                        <div className={`text-xs sm:text-base stat-value  font-bold  flex items-center max-w-fit ${theme ? "text-slate-500" : "text-slate-400"}`}>
                            {pushUpdate(repo.pushed_at)}
                        </div>
                    </div>
                }
                <h3 className=" text-sm md:text-xl mb-2 font-semibold flex justify-between flex-wrap py-3 ">
                    <a href={repo.html_url} className='hover:text-accent '>
                        <FaLink className='inline mr-2' />{repo.name}

                    </a>


                </h3>
                <p className='mb-3 text-sm sm:text-base'>{repo.description}</p>


                <div className='flex mt-3 ju  items-center'>
                    <div className='flex-1'>

                        <div className={`mr-2 badge   badge-md sm:badge-lg bg-base-200 border-base-200 ${theme ? " text-neutral  border-info" : "mr-2 badge  text-info  bg-base-200 border-base-200"}`}>
                            <FaEye className='mr-2 mt-[1px]' />{repo.watchers_count}
                        </div>
                        <div className={`mr-2 badge   badge-md sm:badge-lg bg-base-200 border-base-200 ${theme ? " text-neutral   border-success" : "mr-2 badge  text-success  bg-base-200 border-base-200"}`}>
                            <FaStar className='mr-2 mt-[1px]' />{repo.stargazers_count}
                        </div>
                        <div className={`mr-2 badge   badge-md sm:badge-lg bg-base-200 border-base-200 ${theme ? " text-neutral   border-error " : "mr-2 badge  text-error bg-base-200 border-base-200"}`}>
                            <FaInfo className='mr-2 mt-[1px]' />{repo.open_issues}
                        </div>
                        <div className={`mr-2 badge   badge-md sm:badge-lg bg-base-200 border-base-200 ${theme ? " text-neutral  bg-base-100 border-warning " : "mr-2 badge  text-warning  bg-base-200 border-base-200"}`}>
                            <FaUtensils className='mr-2 mt-[1px]' />{repo.forks}
                        </div>
                    </div>
                

                   {
                    repo.language ===null ? "" :
                    
                    
                   

                    
                    <>
                     <div className='overflow-hidden'>
                      
                        </div>
                     {repo.language.toLowerCase()  == "javascript"  &&
                             <div className='overflow-hidden'>
                                   <IoLogoJavascript className='text-warning drop-shadow-2xl' />
                             </div>
                            }
                            {repo.language.toLowerCase() == "html" &&
                            <div className='overflow-hidden'>
                                
                                <IoLogoHtml5 className='text-orange-600 drop-shadow-2xl' />
                                </div>
                            }
                            {repo.language.toLowerCase() == "scss" &&
                                <div className='overflow-hidden'>
                                  <IoLogoSass className='text-accent drop-shadow-2xl' />
                                </div>
                             }

                            {repo.language.toLowerCase() == "css" &&
                             <div className='overflow-hidden'>
                                   <IoLogoCss3 className='text-secondary drop-shadow-2xl' />
                             </div>
                                }
                            {
                                repo.language.toLowerCase() == "php" &&
                           <div className='overflow-hidden'>
                                 <DiPhp className='text-secondary-focus drop-shadow-2xl text-2xl' />
                           </div>
                                }
                            {
                                repo.language.toLowerCase() == "python" &&
                            <div className='overflow-hidden'>
                                    <DiPython className='text-[#38bdf8] drop-shadow-2xl text-xl ' />
                            </div>
                                }
                            {
                                repo.language.toLowerCase() == "c#" &&
                         <div className='overflow-hidden'>
  <svg xmlns="http://www.w3.org/2000/svg" className='fill-success' viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 35 20 L 35 22 L 33 22 L 33 24 L 35 24 L 35 26 L 33 26 L 33 28 L 35 28 L 35 30 L 37 30 L 37 28 L 39 28 L 39 30 L 41 30 L 41 28 L 43 28 L 43 26 L 41 26 L 41 24 L 43 24 L 43 22 L 41 22 L 41 20 L 39 20 L 39 22 L 37 22 L 37 20 Z M 37 24 L 39 24 L 39 26 L 37 26 Z"/></svg>
                         </div>
                             
                               
                               }
                            {
                                repo.language.toLowerCase() == "typescript" &&
                             <div className='overflow-hidden'>
                                   <SiTypescript className='text-info drop-shadow-2xl ' />
                             </div>
                                }
                            {
                                repo.language.toLowerCase() == "ruby" &&
                               
                               <div className='overflow-hidden'>
                                 <DiRubyRough className='text-[#a91b43] text-xl drop-shadow-2xl ' />
                                </div>
                                }

                            {
                                repo.language.toLowerCase() == "go" &&
                              <div className='overflow-hidden'>
                                  <img  src={logo} className='w-8 h-8' />
                              </div>
                              }





                    </>
                    
                    
                    
                   }



                           




                    




                      




                </div>

            </div>

        </motion.div>
    );
};

export default RepoItem;