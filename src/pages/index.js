import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { CookiesProvider, withCookies } from 'react-cookie'
import Layout from '../components/layout'
import WaflToken from '../components/WaflToken'
import BigWafl from '../components/BigWafl'
import LkmexToken from '../components/LkmexToken'
import IO from '../components/io'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Seo from '../components/seo'


const FilmZone = styled.div`
  -webkit-text-size-adjust: 100%;
  font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 90vh;
  margin-bottom: 0;
  padding-bottom: 186px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 80px;
  transition: background-color 8.5s ease;
  background-color: ${({ isVisible }) => (isVisible ? 'snow' : ' navy')};
`
const FilmStrip = styled.div`
  background: url(./images/slide1.png);
  height: 300px;
  width: 1200px;
  transform: translate3d(-0.8592%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-8deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: left 20s linear;
  left: ${({ isVisible }) => (isVisible ? '-100%' : '100%')};
`

const IndexPage = () => (
  <CookiesProvider>
    <Layout>
      <Seo title="Home" />
      <div className="section spacer-zone ">
        <h1>A NEW ERA OF NFT UTILITY</h1>
        <p>The Gutter Cat Gang DAO exists to transcend the potential of the Gang beyond that of your standard NFT community or club. The Gang survived an apocalypse and lived to tell the story of the Gutter DAO’s emergence from a collective of social network accounts and channels that transformed into a fully operational community run organization under the guise of the Gutter Cat Gang members.</p>
        <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
      </div>

      <div className="section spacer-zone ">
        <h1 className="dark-forest-text">Loyal NFT pets that keep your crypto warm, here come the Elrond Shibas!</h1>
      </div>
  
      <div className="section spacer-zone">
        <div className="columns">
          <div className="column gray act-zone ">
            <AnimationOnScroll animateIn="animate__bounceInUp">
              <h2>Waves of Shiba are Arriving</h2>
            </AnimationOnScroll>
            <p>Sailing in from ShibaWorld, these cute frens pay you for owning them!</p>
            <p>Adopt one from a trusted marketplace today!!</p>
            <p>Stay tuned to our social media for Wave 7 Mint news.</p>
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
          </div>
          <div className="column gray"></div>
        </div>
      </div>

      <div className="section spacer-zone ">
        <h1 className="dark-forest-text">Earn 2 Types of Passive Income!!</h1>
        <p className="dark-forest-text">LKMEX and WAFL</p>
      </div>
  
  
      <div className="section spacer-zone ">
        <div className="columns gray" id="faq">
          <div className="column ">
            <AnimationOnScroll animateIn="animate__bounceInUp">
              <h2>Elrond Shibas pay you LKMEX</h2>
            </AnimationOnScroll>

            <p>Stake your LKMEX on Maiar Exchange or spend it on NFTs!</p>
            <Link to="/lkmex" className="button center">LKMEX?</Link>
          </div>
          <div className="column">
            OK THEN FREN
          </div>
        </div>
      </div>

    
      <div className="section spacer-zone" id="whitepaper">
        <h1 className="">Read more about $WAFL and the SFTs in the Whitepaper!</h1>
      </div>

      <div className="section spacer-zone 1">
        <h1 className="dark-forest-text">Every Saturday at 1400 UTC your Shibas will bring you more! #ShibaSaturday </h1>
      </div>
  
      <div className="section spacer-zone ">
        <IO rootMargin = '-1px'>
        {({isVisible})=>(
        <FilmZone isVisible={isVisible}>
          <FilmStrip isVisible={isVisible}>
            <div className="images91"></div>
          </FilmStrip>
        </FilmZone>
        )}</IO>
      </div>

      <div className="section spacer-zone">
        <Link to="/rarity" className="button">Rarity Trait Charts</Link>        
      </div>

    </Layout>
  </CookiesProvider>
)

export default withCookies(IndexPage)
