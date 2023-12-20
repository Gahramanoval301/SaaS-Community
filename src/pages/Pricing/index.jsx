import React from 'react'
import PageContainer from '../../components/PageContainer'
import PricingPlans from '../../components/PricingComps/PricingPlans'
import FAQ from '../../components/PricingComps/FAQ'
const Pricing = () => {
  return (
    <PageContainer>
      <PricingPlans />
      <FAQ/>
    </PageContainer>

  )
}

export default Pricing