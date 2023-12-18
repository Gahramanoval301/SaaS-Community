import React from 'react'
import Starting from '../../components/ProductComps/Starting'
import PageContainer from '../../components/PageContainer'
import FeaturesP from '../../components/ProductComps/Features'
import MarketingInsights from '../../components/ProductComps/MarketingInsight'
import TimeCracker from '../../components/ProductComps/TimeCracker'
import LeadGeneration from '../../components/ProductComps/LeadGeneration'
import RemoteTeams from '../../components/ProductComps/RemoteTeams'
import Features from '../../components/Features'

const Product = () => {
    return (
        <PageContainer>
            <Starting />
            <FeaturesP/>
            <MarketingInsights/>
            <TimeCracker/>
            <LeadGeneration/>
            <RemoteTeams/>
            <Features/>
        </PageContainer>
    )
}

export default Product