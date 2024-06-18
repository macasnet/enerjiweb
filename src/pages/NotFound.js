import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from "../img/notf.webp"
export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='mt-16'>
      <div className=' min-h-[calc(100vh-96px)] container mx-auto max-w-7xl flex flex-col justify-center items-center '>
       <img src={img} alt="" />
      </div>
    </section>
  )
}
