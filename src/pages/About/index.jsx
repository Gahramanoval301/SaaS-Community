import React from 'react'
import PageContainer from '../../components/PageContainer'
import HeaderA from '../../components/AboutUsComps/Header'
import GoalsAndVisions from '../../components/AboutUsComps/GoalsAnsVisions'
import Values from '../../components/AboutUsComps/Values'
import Team from '../../components/AboutUsComps/Team'

const About = () => {
  return (
    <PageContainer>
      <HeaderA />
      <GoalsAndVisions />
      <Values />
      <Team />
    </PageContainer>
  )
}

export default About