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
      <div className="section eshib-bg-2">
       
       
      <IO rootMargin = '-1px'>
        {({isVisible})=>(
        <FilmZone isVisible={isVisible}>
          <FilmStrip isVisible={isVisible}>
            <div className="images91">
            </div>
          </FilmStrip>
        </FilmZone>
      )}</IO>
      </div>
      

      <div className="section spacer-zone eshib-bg-6">

         <div className="columns">
          <div className="column gray">
            <h2>Shiba NFTs with their Own Metaverse</h2>
            <h2>Wait until you hold one for a few weeks!</h2>
            <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
            <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
          </div>
          <div className="column gray">
            <div className="slideshow2 is-hidden-mobile">
              <div className="images-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section spacer-zone eshib-bg-1">
        <h1 className="dark-forest-text">Loyal NFT pets that keep your crypto warm, here come the Elrond Shibas!</h1>
        <div className="slideshow level is-mobile">
          <div className="images01"></div>
        </div>
      </div>
  
      <div className="section spacer-zone">
         <div className="columns">
          <div className="column gray act-zone eshib-bg-3">
            <h2 className="whyt">Waves of Shiba are Arriving</h2>
            <p>Sailing in from ShibaWorld, these cute frens pay you for owning them!</p>
            <p>Adopt one from a trusted marketplace today!!</p>
            <p>Stay tuned to our social media for Wave 7 Mint news.</p>
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
          </div>
          <div className="column gray">
            <div className="slideshow2 is-hidden-mobile">
              <div className="images-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section spacer-zone eshib-bg-9">
        <h1 className="dark-forest-text">Earn 2 Types of Passive Income!!</h1>
        <div className="slideshow level is-mobile">
          <div className="images01"></div>
        </div>
        <h1 className="dark-forest-text">LKMEX and WAFL</h1>
        <div className="level is-mobile is-space-around">
          <WaflToken className="level-item" />
          <LkmexToken className="level-item" />
          <WaflToken className="level-item" />
          <LkmexToken className="level-item" />
          <WaflToken className="level-item" />
        </div>
      </div>
  
  
      <div className="section spacer-zone eshib-bg-7">
         <div className="columns gray" id="faq">
          <div className="column ">
            <h2 className="whyt">Elrond Shibas pay you LKMEX</h2>
            <p>Stake your LKMEX on Maiar Exchange or spend it on NFTs!</p>
            <Link to="/lkmex" className="button center">LKMEX?</Link>
            <div className="level is-mobile">
              <LkmexToken /><LkmexToken /><LkmexToken />
            </div>
            <p className="smoltext">LKMEX compounds well!</p></div>
            <div className="column">
              <div className="slideshow2 is-hidden-mobile">
                <div className="column images-2"></div>
              </div>
            </div>
          </div>
      </div>
      <div className="section spacer-zone eshib-bg-21">
        <h1 className="dark-forest-text">Every Saturday at 1400 UTC your Shibas will bring you more! #ShibaSaturday </h1>
        <div className="slideshow level is-mobile">
          <div className="images01"></div>
        </div>
      </div>
  
  
      <div className="section spacer-zone gray">
       <div className="level columns is-mobile">
          <div className="column"><WaflToken /></div>
          <div className="column"><WaflToken /></div>
          <div className="column"><WaflToken /></div>
          <div className="column"><WaflToken /></div>
          <div className="column"><WaflToken /></div>
        </div>
         <div className="" id="wafl">
          <div className="">
            <h2>WAFL tokens</h2>
            <p>Every day each Shiba earns you a $WAFL token! Packs of Shibs will earn you free SFTs like Shiba Gardens and Shiba Farms!</p>
            <a href="https://trust.market/collection/SHIB-50039b" className="button">BUY NOW</a>
              <div className="level is-mobile">
                <WaflToken className="level-item" />
                <BigWafl className="level-item is-hidden-mobile" />
                <WaflToken className="level-item" />
              </div>
            </div>
        </div>
      </div>
      <div className="section spacer-zone eshib-bg-wafl">
        <h1 className="syrup-text">Read more about WAFL and the SFTs in the Whitepaper!</h1>
        
        <div className="slideshow level is-mobile">
          <div className="images01"></div>
        </div>
      </div>
  
  
      <div className="section spacer-zone">
         <div className="columns" id="whitepaper">
          <div className="column gray">
            <h2 className="">ShibaWorld Awaits</h2>
            <p className=" smoltext">AniShib and 3DShib collections dropping soon.</p>
            <p className=" smoltext">These special collections will serve as keys to ShibaWorld! Each collection can be purchased with WAFL or EGLD!</p>
            <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
          </div>
          <div className="column gray">
             <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "GIF", "AVIF"]}
              src="../images/anishib3.png"
              width={200}
              height={200}
              quality={95}
              alt="Elrond AniShibs loves you"
            />
            <p>AniShib from ShibaWorld</p>
            <h1 className="is-hidden-mobile">Coming Soon</h1>
          </div>
        </div>
      </div>
      <div className="section spacer-zone eshib-bg-5">
        <div className="columns">
          <div className="column is-7">
            <h1 className="dark-forest-text">Ghostly Shibs also exist</h1>
            <p className="whyt">They all pay LKMEX and WAFL...</p>
            <p className="whyt">Ghosts need homes, too!</p>
            <a href="/rarity" className="button">RARITY</a>
          </div>
          <div className="slideshow2 column is-5 ghost-fade">
            <div className="images-6"></div>
          </div>
        </div>
      </div>
    </Layout>
  </CookiesProvider>
)

export default withCookies(IndexPage)
