import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { CookiesProvider, withCookies } from 'react-cookie'
import WaflToken from '../components/WaflToken'
import BigWafl from '../components/BigWafl'
import Layout from '../components/layout'
import IO from '../components/io'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Seo from '../components/seo'

const IndexPage = () => (
  <CookiesProvider>
    <Layout>
      <Seo title="Home" />
      <div className="navBar-safetypad"></div>
      
      <div className="section columns">
        <div className="column is-5">
          <h1 className="hero-text">Shiba Passive Income Gang</h1>
          <p className="pb-4">The Elrond Shibas CDO expands upon traditional NFT clubs (DAOs) by offering passive income and rewarding continued membership. The team is building a ShibaWorld of NFTs and SFTs unlike anything Earth has ever seen. Adopt and join our expanding world of $WAFL tokens, Shiba SFTs, and much joyful borking, especially on Shiba Saturdays!</p>
          <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
        </div>

        <div className="column is-7 center">
          <div className="wibble-card anyshib">
            <StaticImage
              className="tiny-icon center"
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
              </div>
            </div>
          </div>
        
          <div className="wibble-card-3 anyshib-2">
            <StaticImage
              className="tiny-icon"
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/es511.png"
              width={216}
              height={218}
              quality={95}
              alt="Gatsby, who prefers JSX to JS always, bork"
            />
            <div>
              <p className="dark-forest-text">Elrond Shiba #511</p>
              <p className="smoltext">"Only 6.5% Shibas earn Academia hats"</p>
              <div className="level">
                <p className="smoltext level-left">Rank 4063 / 5000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="center is-hidden-tablet">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="faq">    
        {/*FAQ*/}

        <div className="navBar-safetypad"></div>
        
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
            <p><Link to="/wave7"><span className="yikes">Wave 7 is minting right now!</span></Link></p>
            <p><a href="https://mint.elrondshibas.com" className="button">MINT 0.6 EGLD!</a></p>
            {/*  Marketplace btn
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
            */}
          </div>
          <div className="column">
            <div className="center is-hidden-touch">
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
                </div>
              </div>
            </div>
          </div>
        {/*FAQ*/}
      </div>
      </div>
  
      <div className="section">
        {/* roadmap */}
        <div className="navBar-safetypad" id="roadmap"></div>
        
        <div className="level center">
          <AnimationOnScroll animateIn="animate__fadeInUp"><h1 className="hero-text">Roadmap</h1></AnimationOnScroll>
        </div>
        
        <div>
           <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section roady rounded-roadie-right columns">
            <h2 className="column is-3">ShibaWorld SFTs appear, beginning March 2nd</h2>
            <div className="column is-9 columns">
              <div className="column">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/garden.jpg"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                /><h6>Elrond Shiba Garden</h6>
              </div>
              <div className="column is-hidden-touch">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/farm.jpg"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                /><h6>Elrond Shiba Farm</h6>
              </div>
              <div className="column">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/castle.jpg"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                /><h6>Elrond Shiba Castle</h6>
              </div>
            </div>
          </div></AnimationOnScroll>

        {/* collabs */}
          <AnimationOnScroll animateIn="animate__fadeInRight">
          <div className="level section roady rounded-roadie-left">
            <h3 className="">Collaborations with other NFT collections</h3>
            <div className="columns">
              <div className="column is-7">
                <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/shibacula.png"
                  width={216}
                  height={216}
                  quality={95}
                  alt="Shibacula, who can bite other NFTs!"
                />
                <h6>Shibacula, who can bite other NFTs and yields $BLOOD (Elrond Vampires collab)</h6>
              </div>

              <div className="column is-5 center">
                <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/dojolayer.png"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Dojo Monsters collab"
                />
                <h6>Dojo Monsters' Shiba Layer</h6>
              </div>

              <div className="column is-10">
                <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/mysteryegg.png"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Shibs come from Eggs, bork!"
                />
                <h6>Elrond Ducks CDO partnership, Announcing in March...</h6>
              </div>

            </div>

          </div>
          </AnimationOnScroll>


        {/* AniShibs */}
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section roady rounded-roadie-right columns">
            <h2 className="column is-3">AniShib NFT collection drops! Will offer ½ NFTs priced in EGLD & ½ in $WAFL</h2>
            <div className="columns column is-9">
              <div className="column">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/anishib2.png"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                />
              </div>
              <div className="column">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/anishib3.png"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                />
              </div>
              <div className="column is-hidden-touch">
                 <StaticImage
                  className="tiny-icon"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/anishib4.png"
                  width={180}
                  height={180}
                  quality={95}
                  alt="Anime Shibas love you by default"
                />
              </div>
            </div>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="level section roady rounded-roadie-left">
            <h2>Elrond Shiba Merch Store coming second half 2022</h2>
            <p>Specs, Headpieces & Digs you can wear IRL-- funded by CDO wallet</p>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="level section roady rounded-roadie-right">
            <h2>3DSHIB NFT Collection drops, with ½ EGLD and ½ $WAFL sales</h2>
            <p>Priced like the AniShib collection, these 3D Shiba will bring untold gifts...</p>
          </div></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><div className="level section roady rounded-roadie-left columns">
            <p className="column is-4"><BigWafl /></p>
            <p className="column is-8">Launch $WAFL token as Tradeable Asset on MaiarDex<h6>(Pending SEC Registration and other regulations)</h6></p>
          </div></AnimationOnScroll>
        </div>
        
        <div className="mt-5">
          <p className="level center">Read the details in our WP!</p>
          <div className="level center">
            <Link className="button mt-3" to="/whitepaper">Whitepaper</Link>
          </div>
        </div>
      {/* roadmap */}
      </div>
  
      <div className="section center filmstrip-A negative-hollow">
        <div className="filmstrip-1"></div>
      </div>


      <div className="section center">
        <Link to="/rarity" className="button">Rarity Trait Charts</Link>
      </div>

    </div>

    </Layout>
  </CookiesProvider>
)

export default withCookies(IndexPage)
