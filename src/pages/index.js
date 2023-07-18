import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import {Title,Societies} from "../components/Title";
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <Title />
        <Societies />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <div className="stories">
            {posts
              .map(({ node: post }) => (
                <div
                  className="content story"
                  key={post.id}
                >
                  <p className="has-text-weight-semibold has-text-grey">{post.frontmatter.date}</p>
                  <p>
                    <Link className="has-text-primary has-text-weight-bold is-size-3" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="story__button is-small" to={post.fields.slug}>
                      More →
                    </Link>
                  </p>
                </div>
              ))}
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
