import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { CookiesProvider, withCookies } from 'react-cookie'
import Layout from '../components/layout'
import WaflToken from '../components/WaflToken'
import BigWafl from '../components/BigWafl'
import LkmexToken from '../components/LkmexToken'
import BigLkmex from '../components/BigLkmex'
import Seo from '../components/seo'

const IndexPage = () => (
  <CookiesProvider>
    <Layout>
      <Seo title="Home" />
      <div className="section pt-2 pl-2 eshib-bg-2">
        <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
  
        <div className="">
          <div className="section slim-down-section"><a href="">
            <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/es164.png"
              width={170}
              height={170}
              quality={95}
              alt="Elrond Shibas love you!"
            />
            <h2 className="smoltext">Pixel art pfp of Shibs w/o gas fees</h2></a>
          </div>
          <div className="section slim-down-section gray all-right"><a href="#lkmex">
             <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/es511.png"
              width={170}
              height={170}
              quality={95}
              alt="Elrond Shibas love you!"
            />
            <h2 className="smoltext">Earns #LKMEX on Saturdays!</h2></a>
          </div>
          <div className="section slim-down-section"><a href="#wafl">
             <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/es720.png"
              width={170}
              height={170}
              quality={95}
              alt="Elrond Shibas love you!"
            />
            <h2 className="smoltext">Earns $WAFL on Wednesdays!</h2></a>
          </div>
          <div className="section slim-down-section gray all-right"><a href="#ShibaWorld">
             <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/es884.png"
              width={170}
              height={170}
              quality={95}
              alt="Elrond Shibas love you!"
            />
            <h2 className="smoltext">Your ticket to SHIBAWORLD and free SFTs</h2></a>
          </div>
        </div>
  
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
         <div className="columns eshib-bg-3">
          <div className="column gray">
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
         <div className="columns gray" id="lkmex">
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
        <a href="/whitepaper" className="button">Whitepaper</a>
        <div className="slideshow level is-mobile">
          <div className="images01"></div>
        </div>
      </div>
  
  
      <div className="section spacer-zone">
         <div className="columns" id="ShibaWorld">
          <div className="column gray">
            <h2>ShibaWorld Awaits</h2>
            <p>AniShib and 3DShib collections dropping soon.</p>
            <p>These special collections will serve as keys to ShibaWorld! Each collection can be purchased with WAFL or EGLD!</p>
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
            <p className="whyt">They all pay LKMEX and WAFL</p>
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
