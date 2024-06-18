import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import White from '../img/White.png';
import video from "../img/video1.mp4";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className='h-[calc(100vh-96px)] relative mt-24'>
       <div className=' bg-gray-800 opacity-70 h-full '/>
      <div className=' h-full w-full absolute top-0 -z-10'>
        <video src={video} muted loop autoPlay className=' w-full h-full object-cover ' />
      </div>
      <div className='container mx-auto max-auto-7xl  z-30' >
      <div className='absolute top-0 h-full'>
        <div className='  px-4 h-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center text-white'>
          <div className=' h-full flex justify-center items-end md:items-center '>
            <div className='  '>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'
              data-aos="fade-down"
              data-aos-once="false"
              data-aos-duration="1000"
              >SUNDUĞUMUZ HİZMETLER</h1>
              <p className='text-xl pt-4' data-aos="fade-up"  data-aos-once="false"
              data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid, doloribus asperiores voluptate nobis eos laudantium consequatur atque blanditiis.</p>
            </div>
          </div>
          <div className=' flex justify-center '>
            <button className=' py-5 px-8 rounded-full text-2xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold' data-aos="zoom-in-up">Bize Ulaşın</button>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
}
