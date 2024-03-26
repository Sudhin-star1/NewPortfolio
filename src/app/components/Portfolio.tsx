import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion";
import photo from "/public/images/portfolio.png";


const Portfolio: React.FC = () => {
    return(
        <>
           <div id="home" className="container mx-auto my-8 flex justify-around items-center h-[90vh]">
                <div>
                <h1 className='text-2xl  md:text-3xl lg:text-4xl  text-center font-mono mb-4'>Hi, I am Sudhin Karki !!</h1>
                <p className='font-mono text-xl text-justify m-6 max-w-[600px] '>I am a Data Science Enthusiast with hands on experience in Machine Learning and Deep Learning.</p>
                </div>
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl ">
                    <Image src={photo} alt='photo' className="rounded-md shadow-md" />
                </div>
            </div>
        </>
    )
}

export default Portfolio;