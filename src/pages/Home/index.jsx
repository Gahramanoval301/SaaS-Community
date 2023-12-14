import React from 'react'
import PageContainer from '../../components/PageContainer'
import Starting from '../../components/HomeComps/Starting'
import FeatuesH from '../../components/HomeComps/FeaturesH'
import WhyUsH from '../../components/HomeComps/WhyUs'
import CTAhome from '../../components/HomeComps/CTAhome'
import Logos from '../../components/LogosH'
import DiscoverMore from '../../components/HomeComps/DiscoverMoreH'

const Home = () => {
  return (
    <PageContainer>
      <Starting />
      <FeatuesH />
      <WhyUsH />
      <CTAhome />
      <Logos />
      <DiscoverMore />
    </PageContainer>
  )
}

export default Home
