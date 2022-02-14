import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const SplashyShibsLeft = styled.div`
  transition: all 0.3s ease-out;
  left: ${props => (props.open ? "-50%" : "0")};
  min-height: 100vh;
  height: 100vh;
  width: 50%;
  min-width: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#0172bd, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`
const SplashyShibsRight = styled.div`
  transition: all 0.3s ease-out;
  right: ${props => (props.open ? "-50%" : "0")};
  min-height: 100vh;
  height: 100vh;
  width: 50%;
  min-width: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#0172bd, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`

const Layout = ({ location, title, children }) => {
  const [ isActive, setActive ] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }
  
  return (
    <div>
      <button className="ml-5 special-btn float-above-it-all" onClick={handleToggle}>Show Me Shiba Splash ser</button>
        <div className="splash-frame">
        { isActive ? (
          <>
          <SplashyShibsLeft open>
            <button className="special-btn" open onClick={handleToggle}>Open</button>
          </SplashyShibsLeft>
          <SplashyShibsRight open>
            <button className="special-btn" open onClick={handleToggle}>WAFL</button>
          </SplashyShibsRight>
          </>          
          ) : (
          <>
          <SplashyShibsLeft>
            <button className="special-btn" open onClick={handleToggle}>Open</button>
          </SplashyShibsLeft>
          <SplashyShibsRight>
            <button className="special-btn" open onClick={handleToggle}>WAFL</button>
          </SplashyShibsRight>
          </>
          )
        }
        </div>
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
