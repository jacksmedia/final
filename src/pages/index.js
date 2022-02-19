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
      <div className="section columns">
        
        <div className="column">
          <h1 className="hero-text">Shiba Passive Income Gang</h1>
          <p className="pb-4">The Elrond Shibas CDO expands upon traditional NFT clubs (DAOs) by offering passive income and rewarding continued membership. The team is building a ShibaWorld of NFTs and SFTs unlike anything Earth has ever seen. Adopt and join our expanding world of $WAFL tokens, Shiba SFTs, and much joyful borking, especially on Shiba Saturdays!</p>
          <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
        </div>

        <div className="column is-2">
          <div className="wibble-card anyshib">
            <StaticImage
              className="tiny-icon"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/samuraishib.png"
              width={185}
              height={185}
              quality={95}
              alt="Elrond Shibas, the legendary Samurai"
            />
            <div>
              <p className="dark-forest-text">Elrond Shiba #3110</p>
              <p className="smoltext">"お前はもう死んでいる, bork"</p>
              <div className="level">
                <p className="v-smoltext level-left">Rank 6 / 5000</p>
                <p className="level-right pr-3"><a href="https://deadrare.io/collection/SHIB-50039b?tab=rarities" className="v-smoltext">Traits</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-3 center">
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

        <div className="column is-6">
          <div className="wibble-card-3 anyshib-2">
            <StaticImage
              className="tiny-icon"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/shibacula.png"
              width={200}
              height={200}
              quality={95}
              alt="Shibacula, who can bite other NFTs!"
            />
            <div>
              <p className="dark-forest-text">Elrond Shiba #3212</p>
              <p className="smoltext">"sânge și vafe 🩸🧇"</p>
              <div className="level">
                <p className="smoltext level-left">Rank 4 / 5000</p>
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
          <div className="column">
            <p className="">Every Saturady at 1400 UTC your Elrond Shiba will bring LKMEX into your Maiar Wallet.</p>
            <p>Each Shiba NFT and every Shibaworld SFT also pays you $WAFL tokens, same time, on Wednesdays!</p>
            <p>Adopt an Elrond Shiba from a trusted marketplace today!!</p>
            <p>Stay tuned to our social media for Mint news. <span className="yikes">Wave 7 is available in under 48 hours!</span></p>
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
          </div>

          <div className="column"></div>
        </div>
      </div>
  
      <div className="section">
        <div className="navBar-safetypad" id="roadmap"></div>
        <div className="level center">
          <AnimationOnScroll animateIn="animate__fadeInUp"><h1 className="hero-text">Roadmap</h1></AnimationOnScroll>
        </div>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="level section min-30vh gray">
            <p>Collab collections/fusions with other creators</p>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section min-30vh">
            <h2>AniShib SFT collection will have ½ priced in EGLD & ½ in $WAFL</h2>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="level section min-30vh gray">
            Elrond Shiba Merch Store coming 2022Q3, funded by CDO wallet royalties.
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section min-30vh">
            Use your Shiba NFT art however you want, copyfree! 3D Print YOUR NFT ontp shirts, hoodies, mugs-- sky is the limit, fren!
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="level section min-30vh gray">
            <h2>3DSHIB SFT Collection drops, with ½ $WAFL scheme same as AniShib collection</h2>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section min-30vh">
            Launch $WAFL token as Tradeable Asset on MaiarDex (Pending SEC Registration and other regulations)
          </div></AnimationOnScroll>
        </div>

    
      <div className="section">
        <Link className="button" to="/whitepaper">Whitepaper</Link>
      </div>
  
      <div className="section">
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

      <div className="section">
        <Link to="/rarity" className="button">Rarity Trait Charts</Link>        
      </div>

    </Layout>
  </CookiesProvider>
)

export default withCookies(IndexPage)
