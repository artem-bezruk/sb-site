import React from 'react'
import { Link } from 'gatsby'
const Navbar = class extends React.Component {
  componentDidMount() {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
   if ($navbarBurgers.length > 0) {
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
       });
     });
   }
 }
 render() {
   return (
  <nav className="navbar" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          {}
          IEEE SB TKMCE
        </Link>
        {}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/events">
          Events
        </Link>
      </div>
      </div>
    </div>
  </nav>
  )}
}
export default Navbar
