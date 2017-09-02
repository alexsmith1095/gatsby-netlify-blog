import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const PostTitle = styled.h2`
  margin-bottom: .4em;
  a {
    color: rebeccapurple;
    text-decoration: none;
  }
  a:hover {
    opacity: .85;
  }
`

const PostDate = styled.h5`
  margin-bottom: 1em;
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <PostTitle>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </PostTitle>
              <PostDate>{post.frontmatter.date}</PostDate>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
