import React from 'react'
import PageContainer from '../../components/PageContainer'
import TrendingPostSection from '../../components/BlogComps/TrendingPost'
import AllPosts from '../../components/BlogComps/AllPosts'

const Blog = () => {
  return (
    <PageContainer>
      <TrendingPostSection />
      <AllPosts />
    </PageContainer>
  )
}

export default Blog