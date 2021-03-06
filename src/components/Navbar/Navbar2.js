import React, { useState } from 'react'
import styled from 'styled-components'
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
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-column-gap: 10px;
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
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(#161717, black);
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 1009;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-column-gap: 10px;
`

const ShibaStrip = styled.div`
  position: relative;
  height: 110vh;
  opacity: 0.7;
  @media (max-width: 375px) { width: 51px; }
  @media (max-width: 768px) { width: 123px; }
}
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
  transition: all 0.22s ease-in;
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

const ScrollTo = styled.h4`
  background: #0000;
  border: black 0 solid;
  text-decoration: none;
  font-size: 2.35rem;
  font-family: "Neue Machina Bold";
  display: inline-block;
  white-space: nowrap;
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
  font-family: "Neue Machina Bold";
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


const Navbar2 = ({ location }) => {
  const [ isSplash, setSplash ] = useState(true)
  const handleSplash = () => {
    setSplash(!isSplash)
  }

  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNav = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      <SplashFrame>
        { isSplash ? (
          <>
          <SplashyShibsLeft open>
            <button className="special-btn" open onClick={handleSplash}>Visit Shibaworld</button>
          </SplashyShibsLeft>
          <SplashyShibsRight open></SplashyShibsRight>
          </>          
          ) : (
          <>
          <SplashyShibsLeft>
            <ShibaStrip className="splash-slides-1"></ShibaStrip>
            <ShibaStrip className="splash-slides-2"></ShibaStrip>
            <ShibaStrip className="splash-slides-3"></ShibaStrip>
            <div className="splash-btn special-btn center p-3" open onClick={handleSplash}>Visit Shibaworld</div>
          </SplashyShibsLeft>
          <SplashyShibsRight>
            <ShibaStrip className="splash-slides-4"></ShibaStrip>
            <ShibaStrip className="splash-slides-5"></ShibaStrip>
            <ShibaStrip className="splash-slides-6"></ShibaStrip>
          </SplashyShibsRight>
          </>
          )
        }
        </SplashFrame>
        <TopBar>
          <button onClick={handleSplash} className="clearpiece">
            <Logowrap />
          </button>
        <Toggle
          className="bg-passionfruit"
          navbarOpen={navbarOpen}
          onClick={handleNav}
        >
          {navbarOpen ? (<Hamburger open />) : 
            (<Hamburger />)
          }
        </Toggle>
        {navbarOpen ? (
          <Navtray>

            <div className="">

              <div className="ml-1 columns">
                <div className="column"><Link to="/#faq" onClick={() => {handleNav()}} className="is-hoverable"><h4>FAQ</h4></Link></div>
                <div className="column"><Link to="/#roadmap" onClick={() => {handleNav()}} className="is-hoverable"><h4>Roadmap</h4></Link></div>
                <div className="column"><a href="https://mint.elrondshibas.com" className="link-like is-hoverable "><h4>Mint</h4></a></div>
              </div>
              <hr className="is-hidden-touch" />
              
              <div className="center">
                <NavItem href="https://discord.gg/ark67RKkrV">
                  <FontAwesomeIcon icon={faDiscord} className="is-hoverable" /><h6 className="is-hidden-touch">&nbsp;Discord</h6>
                </NavItem>
                <NavItem href="https://twitter.com/elrondshibas">
                  <FontAwesomeIcon icon={faTwitter} className="is-hoverable" /><h6 className="is-hidden-touch">&nbsp;Twitter</h6>
                </NavItem>
                <NavItem href="https://www.instagram.com/elrondshibas/" className="">
                  <FontAwesomeIcon icon={faInstagram} className="is-hoverable" /><h6 className="is-hidden-touch">&nbsp;Insta</h6>
                </NavItem>
              </div>

              <div className="m-1 columns is-mobile">
                <NavItem href="https://deadrare.io/collection/SHIB-50039b" className="is-hoverable center column">
                  <div className="center svg-market-2 is-hoverable"></div><div className="is-hidden-touch"><h6>DeadRare</h6>
                  </div>
                </NavItem>
                <NavItem href="https://trust.market/collection/SHIB-50039b" className="is-hoverable center column">
                  <div className="center svg-market-1 is-hoverable"></div><div className="is-hidden-touch"><h6>TrustMarket</h6>
                  </div>
                </NavItem>
                <NavItem href="https://elrondnftswap.com/collection/SHIB-50039b" className="is-hoverable center column">
                  <div className="center svg-market-3 is-hoverable"></div><div className="is-hidden-touch"><h6>NFTSwap</h6>
                  </div>
                </NavItem>
                <NavItem href="https://www.frameit.gg/marketplace/SHIB-50039b" className="is-hoverable center column">
                  <div className="center svg-market-5 is-hoverable"></div><div className="is-hidden-touch"><h6>Frame It</h6>
                  </div>
                </NavItem>
                <NavItem href="https://isengard.market/profile/ElrondShibas" className="is-hoverable center column">
                  <div className="center svg-market-4 is-hoverable"></div><div className="is-hidden-touch"><h6>Isengard</h6>
                  </div>
                </NavItem>
              </div>
            </div>
          
          </Navtray>
        ) : (
          <Navtray open onClick={handleNav}>
            
            <div className="">
              <div className="">
                <div className="column"><Link to="/#faq" onClick={() => {handleNav()}} className="is-hoverable"><h4>FAQ</h4></Link></div>
                <div className="column"><Link to="/#roadmap" onClick={() => {handleNav()}} className="is-hoverable"><h4>Roadmap</h4></Link></div>
                <div className="column"><a href="https://mint.elrondshibas.com" className="link-like is-hoverable "><h4>Mint</h4></a></div>
              </div>
              <hr className="is-hidden-touch" />
              <div className="">
                <NavItem href="https://discord.gg/ark67RKkrV" className="is-hoverable"><FontAwesomeIcon icon={faDiscord} className="is-hoverable" /><span className="is-hidden-touch">&nbsp;Discord</span></NavItem>
                <NavItem href="https://twitter.com/elrondshibas" className="is-hoverable"><FontAwesomeIcon icon={faTwitter} className="is-hoverable" /><span className="is-hidden-touch">&nbsp;Twitter</span></NavItem>
                <NavItem href="https://www.instagram.com/elrondshibas/" className="is-hoverable"><FontAwesomeIcon icon={faInstagram} className="is-hoverable" /><span className="is-hidden-touch">&nbsp;Insta</span></NavItem>
              </div>
              <div className="">
                <NavItem href="https://deadrare.io/collection/SHIB-50039b" className=" is-hoverable"><div className="center svg-market-2 is-hoverable"></div><div className="is-hidden-touch">DeadRare</div></NavItem>
                <NavItem href="https://trust.market/collection/SHIB-50039b" className=" is-hoverable"><div className="center svg-market-1 is-hoverable"></div><div className="is-hidden-touch" className="is-hidden-touch">TrustMarket</div></NavItem>
                <NavItem href="https://elrondnftswap.com/collection/SHIB-50039b" className=" is-hoverable">
                  <div className="center svg-market-3 is-hoverable"></div><div className="is-hidden-touch">NFTSwap
                  </div>
                </NavItem>
                <NavItem href="https://www.frameit.gg/marketplace/SHIB-50039b" className=" is-hoverable">
                  <div className="center svg-market-5 is-hoverable"></div><div className="is-hidden-touch">Frame It
                  </div>
                </NavItem>
                <NavItem href="https://isengard.market/profile/ElrondShibas" className=" is-hoverable"><div className="center svg-market-4 is-hoverable"></div><div className="is-hidden-touch">Isengard</div></NavItem>
              </div>
            </div>

          </Navtray>
        )}
      </TopBar>
    </>
  )
}

export default Navbar2