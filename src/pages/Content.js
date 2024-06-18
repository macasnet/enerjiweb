import React, { useEffect } from 'react'
import gp1 from "../img/gp1.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Content() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    const data = [
        {
            title: "Baslik",
            desc: "aciklama",
            img: gp1
        },
        {
            title: "title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, perspiciatis! Libero, est. Architecto tempore quas tempora autem cumque reiciendis impedit.",
            img: gp1
        },
        {
            title: "title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, perspiciatis! Libero, est. Architecto tempore quas tempora autem cumque reiciendis impedit.",
            img: gp1
        },
    ]
    return (
        <div>
            {data.map((item,index)=>(
            <div key={index} className="h-screen overflow-hidden bg-gray-300 border-y border-gray-400">
             
                   <div  className='container mx-auto mx-auto-7xl px-4   h-full grid grid-cols-1 md:grid-cols-2'>
                   <div className=' h-full flex  justify-center flex-col'>
                       <h1 className='font-bold text-5xl md:text-6xl lg:text-8xl py-4' data-aos="fade-right" data-aos-duration="1500">
                        {item.title}
                        </h1>
                       <p className='text-xl md:text-2xl leading-relaxed' data-aos="fade-right" data-aos-duration="1500">{item.desc}</p>
                   </div>
                   <div className='flex justify-center items-center '>
                       <div className=' h-3/4 w-3/4'>
                          <img data-aos="fade-left" data-aos-duration="1500" src={item.img} alt="" className='h-full w-full rounded-xl'/>
                       </div>
                   </div>
               </div>
            
            </div> 
            ))}
        </div>
    )
}
