import React from 'react'
import tkm from '../img/tkm.png'
export const Title = class extends React.Component {
    render(){
        return (
            <section className="hero landing is-fullheight is-transparent">
                <div className="hero-decoration-left" style={{backgroundImage:"url(img/hero-bg-left.svg)"}}></div>
                <div className="hero-decoration-right" style={{backgroundImage:"url(img/hero-bg-right.svg)"}}></div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            {}
                            <div className="column is-5 ">
                                <h1 className="title is-1 is-light is-semibold is-spaced">IEEE SB TKMCE</h1>
                                <h2 className="subtitle is-5 is-light is-thin">
                                Bring the benefits of the great organization to the society and to contribute to the technical centric approach.
                                </h2>
                                {}
                                <p>
                                    <a href="#start" className="story__button is-fat is-bold">
                                        Join
                                    </a>
                                </p>
                            </div>
                            {}
                            <div className="column is-7">
                                <figure className="image">
                                    <img src={tkm} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export const Societies=()=>(
    <section className="hero-foot">
        <div className="container">
            <div className="tabs" >
                <ul style={{display:"flex",justifyContent:"space-between"}}>
                    <li><img className="hero-logo" src="img/cs-logo.gif" alt="cs-logo" /></li>
                    <li><img className="hero-logo" src="img/ias-logo.png" alt="ias-logo" /></li>
                    <li><img className="hero-logo" src="img/pes-logo.png" alt="pes-logo" /></li>
                    <li><img className="hero-logo" src="img/ras-logo.png" alt="ras-logo" /></li>
                    <li><img className="hero-logo" src="img/sight-logo.png" alt="sight-logo" /></li>
                    <li><img className="hero-logo" src="img/wie-logo.gif" alt="wie-logo" /></li>
                </ul>
            </div>
        </div>
    </section>
)
