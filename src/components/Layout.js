import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import BurgerMenu from '../components/BurgerMenu'
import Footer from "../components/Footer";
import './all.sass'
const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
	        <link rel="icon" type="image/png" href="/img/ieee_apple_favicon_57x57.png" sizes="57x57" />
	        <link rel="icon" type="image/png" href="/img/ieee_favicon.ico" sizes="16x16" />
	        <meta name="theme-color" content="#fff" />
	        <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <BurgerMenu />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)
export default TemplateWrapper
