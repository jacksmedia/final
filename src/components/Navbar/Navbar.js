import React, { useState } from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
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
  background: linear-gradient(#161717, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 1010;
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
  background: linear-gradient(#161717, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 1009;
`

const TopBar = styled.nav`
  min-height: 72px;
  height: 72px;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  text-transform: uppercase;
  background: #161717;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  position: fixed;
  height: 8vh;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  z-index: 2;
`

const Toggle = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0 4vw;
  display: flex;
  z-index: 999;
`

const Navtray = styled.div`
  top: 72px;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  padding-top: 15vh;
  background: linear-gradient(#161717, black);
  transition: all 0.5s ease-in;
  right: ${props => (props.open ? "-100%" : "0")};
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

const ScrollTo = styled.button`
  background: #0000;
  border: black 0 solid;
  text-decoration: none;
  font-size: 2.35rem;
  display: inline-block;
  white-space: nowrap;
  margin: 2vw 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: tomato;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: blue;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 4px 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 2.35rem;
  display: inline-block;
  white-space: nowrap;
  margin: 2vw 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: tomato;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #f93;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 4px 0;
    font-size: 1.2rem;
    z-index: 6;
  }
`

const Navbar = () => {
  const [ isSplash, setSplash ] = useState(true)
  const handleToggle = () => {
    setSplash(!isSplash)
  }

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <SplashFrame>
        { isSplash ? (
          <>
          <SplashyShibsLeft open>
            <button className="special-btn" open onClick={handleToggle}>Visit Shibaworld</button>
          </SplashyShibsLeft>
          <SplashyShibsRight open></SplashyShibsRight>
          </>          
          ) : (
          <>
          <SplashyShibsLeft>
            <div className="splashed slideshow level is-mobile">
              <div className="images01"></div>
            </div>
            <div className="splash-btn" open onClick={handleToggle}>Visit Shibaworld</div>
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
        <TopBar>
          <button onClick={handleToggle} className="clearpiece">
            <Logowrap />
          </button>
        <Toggle
          className="bg-passionfruit"
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (<Hamburger open />) : 
            (<Hamburger />)
          }
        </Toggle>
        {navbarOpen ? (
          <Navtray>

            <div className="level">
              <div className="level-left">
                <ScrollTo onClick={() => scrollTo('#faq')} className="is-hoverable">FAQ</ScrollTo>
                <ScrollTo onClick={() => scrollTo('#roadmap')} className="is-hoverable">Roadmap</ScrollTo>
                <a href="https://mint.elrondshibas.com" className="link-like is-hoverable ">Mint</a>
              </div>
              <hr className="is-hidden-tablet" />
              <div className="level-item">
                <NavItem href="https://discord.gg/ark67RKkrV" className="is-hoverable"><FontAwesomeIcon icon={faDiscord} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Discord</span></NavItem>
                <NavItem href="https://twitter.com/elrondshibas" className="is-hoverable"><FontAwesomeIcon icon={faTwitter} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Twitter</span></NavItem>
                <NavItem href="https://www.instagram.com/elrondshibas/" className="is-hoverable"><FontAwesomeIcon icon={faInstagram} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Insta</span></NavItem>
              </div>
              <div className="level-right">
                <NavItem href="https://deadrare.io/collection/SHIB-50039b" className=" is-hoverable"><div className="svg-market-1 is-hoverable"></div><div className="is-hidden-tablet">DeadRare</div></NavItem>
                <NavItem href="https://trust.market/collection/SHIB-50039b" className=" is-hoverable"><div className="svg-market-2 is-hoverable"></div><div className="is-hidden-tablet" className="is-hidden-tablet">TrustMarket</div></NavItem>
                <NavItem href="https://isengard.market/profile/ElrondShibas" className=" is-hoverable"><div className="svg-market-3 is-hoverable"></div><div className="is-hidden-tablet">Isengard</div></NavItem>
              </div>
            </div>
          
          </Navtray>
        ) : (
          <Navtray open onClick={() => setNavbarOpen(!navbarOpen)}>
            
            <div className="level">
              <div className="level-left">
                <ScrollTo onClick={() => scrollTo('#faq')} className="is-hoverable">FAQ</ScrollTo>
                <ScrollTo onClick={() => scrollTo('#roadmap')} className="is-hoverable">Roadmap</ScrollTo>
                <a href="https://mint.elrondshibas.com" className="link-like is-hoverable ">Mint</a>
              </div>
              <hr className="is-hidden-tablet" />
              <div className="level-item">
                <NavItem href="https://discord.gg/ark67RKkrV" className="is-hoverable"><FontAwesomeIcon icon={faDiscord} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Discord</span></NavItem>
                <NavItem href="https://twitter.com/elrondshibas" className="is-hoverable"><FontAwesomeIcon icon={faTwitter} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Twitter</span></NavItem>
                <NavItem href="https://www.instagram.com/elrondshibas/" className="is-hoverable"><FontAwesomeIcon icon={faInstagram} className="is-hoverable" /><span className="is-hidden-tablet">&nbsp;Insta</span></NavItem>
              </div>
              <div className="level-right">
                <NavItem href="https://deadrare.io/collection/SHIB-50039b" className=" is-hoverable"><div className="svg-market-1 is-hoverable"></div><div className="is-hidden-tablet">DeadRare</div></NavItem>
                <NavItem href="https://trust.market/collection/SHIB-50039b" className=" is-hoverable"><div className="svg-market-2 is-hoverable"></div><div className="is-hidden-tablet" className="is-hidden-tablet">TrustMarket</div></NavItem>
                <NavItem href="https://isengard.market/profile/ElrondShibas" className=" is-hoverable"><div className="svg-market-3 is-hoverable"></div><div className="is-hidden-tablet">Isengard</div></NavItem>
              </div>
            </div>

          </Navtray>
        )}
      </TopBar>
    </>
  )
}

export default Navbar