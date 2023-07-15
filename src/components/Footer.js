import React from 'react'
const Footer = class extends React.Component {
    render(){
        return(
        <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column is-4">
                    <div id="quicklinks">
                        <h3>
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href="https:
                            </li>
                            <li>
                                <a href="https:
                            </li>
                            <li>
                                <a href="https:
                            </li>
                            <li>
                                <a href="http:
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column is-4">
                    <div id="social">
                        <h3>Follow us</h3>
                        <div>
                            <a href="https:
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https:
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="https:
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div id="contact">
                        <h4>Address</h4>
                        <address> TKM College of Engineering,
                            <br /> Karicode, Kollam, Kerala
                            <br />pin : 691005
                        </address>
                        <hr className="my-1" />
                        <h5>Chairperson</h5>
                        <p>Harry Paul : +91 9497704887</p>
                        <h5>Counselor</h5>
                        <p> Mrs. Sunitha Beevi.K : +91 9037364538</p>
                        <h5>Webmaster</h5>
                        <p>Amal Jossy : +91 9496863169</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container " id="copy">
            <p className="m-0">©IEEE SB, TKMCE</p>
        </div>
    </footer>
        )
    }
}
export default Footer
