import React from 'react'
import { Link } from 'gatsby'
import './BurgerMenu.css'
import { slide as Menu } from 'react-burger-menu'
const BurgerMenu = class extends React.Component {
 render() {
   return (
    <Menu >
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/events">
        Events
      </Link>
    </Menu>
  )}
}
export default BurgerMenu
