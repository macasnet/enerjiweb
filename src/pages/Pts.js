import React from 'react'
import img from "../img/eds1.jpg"
import img2 from "../img/eds2.jpg"
import { IoIosClose } from "react-icons/io";
import { FaRegWindowRestore } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export default function Pts() {
    const data = [
        {
            img: img,
            title: "Lorem"
        },

    ]
    return (
        <div className='min-h-[calc(100vh-96px)]  border-2  bg-zinc-900'>
            <div className='container mx-auto max-auto-7xl  h-full text-white px-4'>
                <div>
                    <h1 className="text-7xl pt-24">PTS</h1>
                    <p className='pt-6 text-xl'>Lorem</p>
                </div>
                <div className='border-orange-600 border-b-2 pt-24 flex justify-center text-center'>
                    <div className=' '>
                        <h1 className='text-3xl p-4'>LOREM IPSUM</h1>
                        <p className='w-full bg-orange-600 h-2' />
                    </div>
                </div>
                <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className='border-orange-600 border  '>
                                <div className='py-2 flex items-center gap-1 text-orange-600'><IoIosClose size={20} /> <FaRegWindowRestore size={14} /><FaRegWindowMinimize size={14} /></div>
                                <img src={item.img} alt="" className='border-y border-orange-600 w-full h-56' />
                                <div className='flex justify-between items-center text-orange-600'>
                                    <span className='border-r border-orange-600 py-2'><GrPrevious /></span>
                                    <span className='border-l border-orange-600 py-2'><GrNext /></span>
                                </div>
                            </div>
                            <p className='text-center py-2'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
