import React from 'react'
import Banner from './home/Banner'
import AboutMe from './home/AboutMe'
import Skills from './home/Skills'
import Experiences from './home/Experiences'
import ProjectList from './home/ProjectList'
import DigitalMarketingProjects from './home/DigitalMarketingProjects'

const HomePage: React.FC = () => {
  return (
    <div className="page-">
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
      <DigitalMarketingProjects />
    </div>
  )
}

export default HomePage
