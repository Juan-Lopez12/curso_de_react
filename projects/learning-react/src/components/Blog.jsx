import React, { useEffect, useState } from 'react' // eslint-disable-line
import styled from 'styled-components'
import useGetArticles from '../hooks/useGetArticles'

const Blog = () => {
    const [articles, loading] = useGetArticles()

    return (
        <BlogContainer>
            <Title>Blog</Title>
            {loading ?
                <Title>Cargando . . .</Title>
            :
                <div>
                    {articles.map(article => {
                        return <Article key={article.id}>{article.title}</Article>
                    })}
                </div>
            }
        </BlogContainer>
    )
}

const BlogContainer = styled.div `
    margin: 40 0 20 0;
`

const Title = styled.h2 `
    margin-bottom: 10px;
`

const Article = styled.p `
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
`

export default Blog