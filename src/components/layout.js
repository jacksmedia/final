import React, { useState } from 'react'
import "animate.css/animate.min.css"
import { Link } from 'gatsby'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const Layout = ({ location, title, children }) => {  
  return (
    <div>
      <header>
        <Navbar />
        <h1 className="section hero-size-text">Elrond Shibas</h1>
      </header>
      <section className="mains">{children}</section>
       <div className="level is-mobile m-5">
        <a href="https://discord.gg/ark67RKkrV" className="pl-4">Join Discord</a>
        <Link to="/wave7" className="pr-4">Next Mint</Link>
        <Link to="/whitepaper" className="">Whitepaper</Link>
      </div>
      <footer>
        <Footblur />
      </footer>
    </div>
  )
}

export default Layout;
