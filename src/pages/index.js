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
  background-color: ${({ isVisible }) => (isVisible ? '#0000' : 'snow')};
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
      <div className="navBar-safetypad"></div>
      <div className="mt-5 pt-5 section spacer-zone columns">
        
        <div className="column">
          <h1 className="hero-text">Next-Level NFT Community</h1>
          <p>The Elrond Shibas CDO expands upon traditional NFT clubs (DAOs) by offering passive income and rewarding continued membership. The team is building a ShibaWorld of NFTs and SFTs unlike anything Earth has ever seen. Adopt and join our expanding world of $WAFL tokens, Shiba SFTs, and much joyful borking!</p>
          <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
        </div>

        <div className="column">
          <div className="wibble-card anyshib">
            <StaticImage
              className="tiny-icon"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/samuraishib.png"
              width={270}
              height={270}
              quality={95}
              alt="Elrond Shibas, the legendary Samurai"
            />
            <div>
              <p className="dark-forest-text">Elrond Shiba #3110</p>
              <p className="smoltext">"お前はもう死んでいる, bork"</p>
              <div className="level">
                <p className="smoltext level-left">Rank 6 / 5000</p>
                <p className="smoltext level-right pr-3"><a href="https://deadrare.io/collection/SHIB-50039b?tab=rarities">Traits</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-hidden-mobile">
          <div className="wibble-card-2 anyshib-2">
            <StaticImage
              className="tiny-icon"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/dobro.png"
              width={240}
              height={240}
              quality={95}
              alt="Elrond Shibas, the Russian partyboi"
            />
            <div>
              <p className="dark-forest-text">Elrond Shiba #3212</p>
              <p className="smoltext">"Добро пожаловать на вечеринку! 🎉"</p>
              <div className="level">
                <p className="smoltext level-left">Rank 21 / 5000</p>
                <p className="smoltext level-right pr-3"><a href="https://deadrare.io/collection/SHIB-50039b?tab=rarities">Traits</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="section">    
        <div className="navBar-safetypad" id="faq"></div>
        <div className="level center">
          <p className="hero-text">
            <AnimationOnScroll animateIn="animate__fadeInUp">F</AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">A</AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">Q</AnimationOnScroll>
          </p>
        </div>

        <div className="columns">
          <div className="column act-zone">
            <p className="">Sailing in from ShibaWorld, these cute frens pay you for owning them!</p>
            <p>Adopt one from a trusted marketplace today!!</p>
            <p>Stay tuned to our social media for Wave 7 Mint news.</p>
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
          </div>

          <div className="column"></div>
        </div>
      </div>
  
      <div className="section">
        <div className="navBar-safetypad" id="roadmap"></div>
        <div className="level center">
          <AnimationOnScroll animateIn="animate__fadeInUp"><h1>Roadmap</h1></AnimationOnScroll>
        </div>
        <div className="level center">
          <div className="level section gray">1</div>
          <div className="level section">2</div>
          <div className="level section gray">3</div>
          <AnimationOnScroll animateIn="animate__fadeInUp"><div className="level section">4</div></AnimationOnScroll>
          <div className="level section gray">5</div>
          <div className="level section">6</div>
          <div className="level section gray">7</div>
        </div>
      </div>

    
      <div className="section spacer-zone">
        <Link className="button" to="/whitepaper">Whitepaper</Link>
      </div>
  
      <div className="section spacer-zone">
        <IO rootMargin = '-1px'>
        {({isVisible})=>(
        <FilmZone isVisible={isVisible}>
          <FilmStrip isVisible={isVisible}>
            <div className="images91"></div>
          </FilmStrip>
          <p>Animation on scroll imminent
          </p>
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
