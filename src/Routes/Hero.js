import React from 'react'
import Header from '../Components/HeroComponents/Header'
import { MainHero } from '../Components/HeroComponents/MainHero'
import { Navbar } from '../Components/Navbar'

export const Hero = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <MainHero/>
    </div>
  )
}
