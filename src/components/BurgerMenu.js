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
      <Link to="/membership">
        Join IEEE
      </Link>
      <Link to="/execom">
        Execom
      </Link>
      <Link to="/blog">
        Stories
      </Link>
    </Menu>
  )}
}
export default BurgerMenu
