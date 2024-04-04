import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
  return (
    <nav className="navbar">
      <h1><span>OMAR</span>GRAPHIX</h1>
      <ul className="list">
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
      <ul className="icons">
        <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faBell} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faBars} /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
