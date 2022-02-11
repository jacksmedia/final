import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavbarLinks = () => {
  return (
    <div className="level">
      <div className="level-left">
        <NavItem to="/roadmap" className="is-hoverable">Roadmap</NavItem>
        <NavItem to="/whitepaper" className="is-hoverable">Whitepaper</NavItem>
        <NavItem to="/rarity" className="is-hoverable">Rarity</NavItem>
        <NavItem to="/wave7" className="is-hoverable">Wave 7</NavItem>
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
  )
}

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
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
    font-size: 1rem;
    z-index: 6;
  }
`

export default NavbarLinks