import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
export const EventCardTemplate = ({
  description,
  title,
  start,
  end,
  image,
  eventurl,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <p>{start}-{end}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
EventCardTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string, 
  helmet: PropTypes.object,
}
const EventCard = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <EventCardTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Event"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}
EventCard.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export default EventCard
export const pageQuery = graphql`
  query EventInfoByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
