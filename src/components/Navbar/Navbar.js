import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarLinks from './NavbarLinks'
import Logowrap from './Logowrap'

const SplashFrame = styled.div`
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 100vw;
`

const SplashyShibsLeft = styled.div`
  transition: all 0.3s ease-out;
  left: ${props => (props.open ? "-50%" : "0")};
  min-height: 100vh;
  height: 100vh;
  width: 50%;
  min-width: 50%;
  position: absolute;
  display: flex;
  padding: 0 0 0 0;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#0172bd, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 10;
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
  padding: 0 0 0 0;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#0172bd, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 9;
`

const TopBar = styled.nav`
  min-height: 72px;
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  text-transform: uppercase;
  background: #161717;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navtray = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 15vh;
    background: linear-gradient(#161717, black);
    transition: all 0.3s ease-in;
    top: 72px;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #eee;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #eee;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [ isSplash, setSplash ] = useState(true)
  const handleToggle = () => {
    setSplash(!isSplash)
  }

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <TopBar>
      <SplashFrame>
        { isSplash ? (
          <>
          <SplashyShibsLeft open>
            <button className="special-btn" open onClick={handleToggle}>Open</button>
          </SplashyShibsLeft>
          <SplashyShibsRight open></SplashyShibsRight>
          </>          
          ) : (
          <>
          <SplashyShibsLeft>
            <div className="splashed slideshow level is-mobile">
              <div className="images01"></div>
            </div>
            <div className="splash-btn" open onClick={handleToggle}>Open</div>
          </SplashyShibsLeft>
          <SplashyShibsRight>
            <div className="splashed slideshow2 is-hidden-mobile">
              <div className="images-2"></div>
            </div>
          </SplashyShibsRight>
          </>
          )
        }
        </SplashFrame>
        <button onClick={handleToggle} className="clearpiece">
          <Logowrap />
        </button>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (<Hamburger open />) : 
          (<Hamburger />)
        }
      </Toggle>
      {navbarOpen ? (
        <Navtray>
          <NavbarLinks />
        </Navtray>
      ) : (
        <Navtray open>
          <NavbarLinks />
        </Navtray>
      )}
    </TopBar>
  )
}

export default Navbar