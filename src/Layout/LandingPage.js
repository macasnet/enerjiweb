import React from 'react'
import Home from '../pages/Home'
import Hizmetler from '../pages/Hizmetler'
import Content from '../pages/Content'
import Footer from '../components/Footer'


export default function LandingPage() {
  return (
    <div>
      <Home/>
      <Hizmetler/>
      <Content/>
    </div>
  )
}
