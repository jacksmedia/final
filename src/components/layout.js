import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const SplashyShibsLeft = styled.div`
  animation-duration: 0.72s;
  animation-name: splash-screen-move-left;
  transition: all 1.3s ease-out;
  transition: all 1.3s ease-in;
  right: ${props => (props.open ? "-100%" : "0")};
  min-height: 50vh;
  height: 50vh;
  width: 50%;
  min-width: 50%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: blue;
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`
const SplashyShibsRight = styled.div`
  animation-duration: 0.72s;
  animation-name: splash-screen-move-right;
  transition: all 1.3s ease-out;
  transition: all 1.3s ease-in;
  left: ${props => (props.open ? "-100%" : "0")};
  min-height: 50vh;
  width: 50%;
  min-width: 50%;
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: red;
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`

const Layout = ({ location, title, children }) => {
  const [ isActive, setActive ] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }
  const [ cookies, setCookie ] = useCookies(["visitor"])
  function handleCookie() {
    setCookie("visitor", "I AM HERE BORKBORKBORK", {
      path: "/"
    })
    console.log("Cookie eaten! 🥠")
    console.log(cookies.visitor)
    handleToggle()
  }
  function resetCookie() {
    setCookie("visitor", "", {
      path: "/"
    })
    console.log("Cookies reset!")
    console.log(cookies.visitor)
    handleToggle()
  }
  return (
    <div>
      <button className="special-btn float-above-it-all" onClick={resetCookie}>Show Me Shiba Splash ser</button>
      { !cookies.visitor && 
        <div className="splash-frame">
          <SplashyShibsLeft>
            <button className="special-btn" open onClick={handleCookie}>Open</button>
          </SplashyShibsLeft>
          <SplashyShibsRight>
            <button className="special-btn" open onClick={handleCookie}>WAFL</button>
          </SplashyShibsRight>
        </div>
      }
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
