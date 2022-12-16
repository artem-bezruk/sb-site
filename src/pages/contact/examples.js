import React from "react";
import Link from "gatsby-link";
import Layout from '../../components/Layout'
export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Hi people</h1>
              <p>
                This is an example site integrating Netlify’s form handling with Gatsby
              </p>
              <ul>
                <li><Link to="/contact">Basic contact form</Link></li>
                <li><Link to="/contact/file-upload/">Form with file upload</Link></li>
              </ul>
              <h2>Troubleshooting</h2>
              <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>This can be caused by the offline-plugin. <a href="https:
              <h3>Adding reCAPTCHA</h3>
              <p>If you are planning to add reCAPTCHA please go to <a href="https:
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
