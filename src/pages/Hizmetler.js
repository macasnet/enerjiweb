import React, { useEffect } from "react";
import eds1 from "../img/eds1.jpg";
import eds2 from "../img/eds2.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hizmetler = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const categories = [
    {
      src:eds1,
      title:"Lorem"
    },
    {
      src:eds1,
      title:"Lorem"
    },
    {
      src:eds1,
      title:"Lorem"
    },
    {
      src:eds1,
      title:"Lorem"
    },
    {
      src:eds1,
      title:"Lorem"
    }
  ]
  return (
    <div className="font-poppins mt-24">
      
      {/* Hizmetler Bölümü (aşağı kaydırıldığında gözükecek) */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center" 
          data-aos="fade-down"
          data-aos-duration="1000"
         >
            SUNDUĞUMUZ HİZMETLER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Resim kutusu 1 */}

            {categories.map((item,index)=>(
                 <div key={index} className="relative group" data-aos="zoom-in"  >
                 <div className="overflow-hidden rounded-lg shadow-lg">
                   <img
                     src={item.src}
                     alt="Placeholder"
                     className="transform transition duration-300 group-hover:scale-110"
                   />
                 </div>
                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 flex items-center justify-center">
                   <span className="text-white text-xl font-bold">{item.title}</span>
                 </div>
               </div>
            ))}

           
          </div>

      

        
          
        </div>
      </div>
    </div>
  );
};

export default Hizmetler;
