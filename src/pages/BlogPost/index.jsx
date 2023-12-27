import React from 'react'
import PageContainer from '../../components/PageContainer'
import BlogPostComp from '../../components/BlogPostComps/BlogPostComp'
import ReadMorePosts from '../../components/BlogPostComps/ReadMorePosts'


const BlogPost = () => {
    return (
        <PageContainer>
            <BlogPostComp />
            <ReadMorePosts />
        </PageContainer>

    )
}

export default BlogPost