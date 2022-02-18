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
      <div className="section spacer-zone columns">
        
        <div className="column">
          <h1 className="hero-text">Next-Level NFT Community</h1>
          <p>The Elrond Shibas CDO expands upon traditional NFT clubs (DAOs) by offering passive income and rewarding continued membership. The team is building a ShibaWorld of NFTs and SFTs unlike anything Earth has ever seen. Adopt and join our expanding world of $WAFL tokens, Shiba SFTs, and much joyful borking!</p>
          <a href="https://discord.gg/ark67RKkrV" className="button">DISCORD</a>
        </div>
        <div className="column">
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
        </div>

      </div>

      <div className="section spacer-zone ">
        <h1 className="dark-forest-text">Loyal NFT pets that keep your crypto warm, here come the Elrond Shibas!</h1>
      </div>
  
      <div className="section spacer-zone">
        <div className="columns">
          <div className="column act-zone ">
            <AnimationOnScroll animateIn="animate__bounceInUp">
              <h2>Waves of Shiba are Arriving</h2>
            </AnimationOnScroll>
            <div className="">
              <p className="">Sailing in from ShibaWorld, these cute frens pay you for owning them!</p>
              <p>Adopt one from a trusted marketplace today!!</p>
              <p>Stay tuned to our social media for Wave 7 Mint news.</p>
            </div>
            <a href="https://deadrare.io/collection/SHIB-50039b" className="button">BUY NOW</a>
          </div>
          <div className="column"></div>
        </div>
      </div>

      <div className="section spacer-zone ">
        <h1 className="dark-forest-text">Earn 2 Types of Passive Income!!</h1>
        <p className="dark-forest-text">LKMEX and WAFL</p>
      </div>
  
  
      <div className="section">
        <div className="" id="faq">
          <AnimationOnScroll animateIn="animate__bounceInUp">
            <h2>FAQ</h2>
          </AnimationOnScroll>
          <div className="level center">
      <h1>Roadmap</h1>
    </div>
    <div className="section eshib-bg-13 level">
      <div class="timeline">
        <div class="roady right">
          <div class="date">Q1</div>
          <i class="icon fa fa-home"></i>
          <div class="content">
            <h4 className="roady-title">SHIB-50039b Mint Completed</h4>
            <p>All rewards and contests distributed</p>
            <p>All Shibas offchain, in circulation</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q2</div>
          <i class="icon fa fa-home"></i>
          <div class="content">
            <h4 className="roady-title">ANIShib collection mint</h4>
            <p>New ShibaWorld adventure begins!</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q2</div>
          <i class="icon fa fa-user"></i>
          <div class="content">
            <h4 className="roady-title">Elrond Shiba Merch Store</h4>
            <p>Digs, Headpieces, Specs and more-- financed by CDO royalties</p>
            <p>Purchaseable with $WAFL, $USD</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q3</div>
          <i class="icon fa fa-gift"></i>
          <div class="content">
            <h4 className="roady-title">Mint 3DSHIB NFT collection</h4>
            <p>such voxels bork</p>
            <p>$WAFL allowed as mint currency for 1/2 collection</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q3</div>
          <i class="icon fa fa-running"></i>
          <div class="content">
            <h4 className="roady-title">Gateway to ShibaWorld</h4>
            <p>Zoning assignment begins for Shiba Gardens, Shiba Farms, Shiba Castles, and Shiba Spaceports</p>
            <p>WAFL can purchase real estate in ShibaWorld.</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q4</div>
          <i class="icon fa fa-cog"></i>
          <div class="content">
            <h4 className="roady-title">ShibaWorld metaverse launch</h4>
            <p>SHBWRLD NFTs become playable characters!</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q4</div>
          <i class="icon fa fa-certificate"></i>
          <div class="content">
            <h4 className="roady-title">$WAFL on MaiarDex</h4>
            <p>
            $WAFL registered as Tradeable Asset (SEC, other regulations fulfilled)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="spacer-zone">
      <h2 className="pl-3 pt-2"> Anime Shibas (ANISHIB) NFT collection</h2>
      <ul>
        <li>5000 Supply, each collections</li>
        <li>2,500 Buyable ONLY with $WAFL</li>
        <li>2,500 Buyable ONLY with $EGLD</li>
        <li>Future collections: same ½ EGLD - ½ WAFL approach</li>
      </ul>
      <div className="tile is-parent is-60vh">
        <div className="tile is-child anishib-bg-1 ghost-fade"></div>
        <div className="tile is-child anishib-bg-2 ghost-fade"></div>
        <div className="tile is-child anishib-bg-3 ghost-fade"></div>
      </div>


    </div>





    <div className="level">
      <div className="container pt-3 pl-3 is-fluid">
        <h2>Historical Progress</h2>
        <p>December 2021 - First wave (0.25 EGLD)</p>
        <p>January 2022 - Second, Third, Fourth Waves (0.3 - 0.5 EGLD)</p>
        <p>February 2022 - Fifth Wave Sells out in <strong>3 minutes</strong> 300 @ 0.6 EGLD</p>
        <p>February 2022 - Exclusive Wave 6 / 100 Shibas / 0.8 EGLD</p>
      </div>
      <div className="container pt-3 pl-3 is-fluid">
      <h2>Upcoming</h2>
        <ul>
          <li>50 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li><strong>Wave 7 @ 1400 UTC Feb 21/2022</strong> 0.6 EGLD ~ 300 Shibas</li>
          <li>75 EGLD weepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li>Wave 8 & Beyond,  ? EGLD, remaining 2750 Shibas</li> 
          <li>100 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
        </ul>  
      </div>
    </div>
        </div>
      </div>

    
      <div className="section spacer-zone" id="whitepaper">

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
