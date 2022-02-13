import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const SplashyShibs = styled.div`
  min-height: 100vh;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  background: linear-gradient(#A0C6CC, #FE815B);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`

const Layout = ({ location, title, children }) => {
  const [ cookies, setCookie ] = useCookies(["visitor"])
  function handleCookie() {
    setCookie("visitor", "I AM HERE BORKBORKBORK", {
      path: "/"
    })
    console.log("Cookie eaten! 🥠")
    console.log(cookies.visitor)
  }
  function resetCookie() {
    setCookie("visitor", "", {
      path: "/"
    })
    console.log("Cookies reset!")
    console.log(cookies.visitor)
  }
  return (
    <div>
      <header>
          <button className="special-btn" onClick={resetCookie}>Show Me Shiba Splash ser</button>
          { !cookies.visitor && 
            <SplashyShibs>
              NavBar goes away
              <button className="special-btn" onClick={handleCookie}>Open WAFL</button>
            </SplashyShibs> 
          }
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
