import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap to Shibaworld" />
    <div className="level center">
      <h1>Roadmap</h1>
    </div>
    <div className="section eshib-bg-13 level">
      <div class="timeline">
        <div class="roady right">
          <div class="date">Q1</div>
          <i class="icon fa fa-home"></i>
          <div class="content">
            <h5>SHIB-50039b Mint Completed</h5>
            <p>All rewards and contents distro</p>
            <p>All Shibas offchain, in circulation</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q2</div>
          <i class="icon fa fa-home"></i>
          <div class="content">
            <h5>ANIShib collection mint</h5>
            <p>New ShibaWorld adventure begins!</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q2</div>
          <i class="icon fa fa-user"></i>
          <div class="content">
            <h5>Elrond Shiba Merch Store</h5>
            <p>Digs, Headpieces, Specs and more-- financed by CDO royalties</p>
            <p>Purchaseable with $WAFL, $USD</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q3</div>
          <i class="icon fa fa-gift"></i>
          <div class="content">
            <h5>Mint 3DSHIB NFT collection</h5>
            <p>such voxels bork</p>
            <p>$WAFL allowed as mint currency for 1/2 collection</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q3</div>
          <i class="icon fa fa-running"></i>
          <div class="content">
            <h5>Gateway to ShibaWorld</h5>
            <p>Zoning assignemnt begins for Shiba Gardens, Shiba Farms, Shiba Castles, and Shiba Spaceports</p>
            <p>WAFL can purchase real estate in ShibaWorld.</p>
          </div>
        </div>
        <div class="roady left">
          <div class="date">Q4</div>
          <i class="icon fa fa-cog"></i>
          <div class="content">
            <h5>ShibaWorld metaverse launch</h5>
            <p>SHBWRLD NFTs become playable characters!</p>
          </div>
        </div>
        <div class="roady right">
          <div class="date">Q4</div>
          <i class="icon fa fa-certificate"></i>
          <div class="content">
            <h5>$WAFL on MaiarDex</h5>
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
      <div className="level is-fluid is-flex-tablet">
      <StaticImage
            className=""
            layout="constrained"
            formats={["AUTO", "GIF", "AVIF"]}
            src="../images/anishib1.png"
            width={120}
            height={120}
            quality={95}
            alt="Elrond AniShibs loves you"
          />
      <StaticImage
            className=""
            layout="constrained"
            formats={["AUTO", "GIF", "AVIF"]}
            src="../images/anishib2.png"
            width={120}
            height={120}
            quality={95}
            alt="Elrond AniShibs loves you"
          />
      <StaticImage
            className=""
            layout="constrained"
            formats={["AUTO", "GIF", "AVIF"]}
            src="../images/anishib4.png"
            width={120}
            height={120}
            quality={95}
            alt="Elrond AniShibs loves you"
          />
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
          <li><strong>Wave 7</strong>, ??? EGLD. ??? Shibas</li>
          <li>75 EGLD weepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li><strong>Wave 8 & Beyond</strong>,  ??? EGLD, remaining 5000 Shibas</li> 
          <li>100 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
        </ul>  
      </div>
    </div>
  </Layout>
)

export default Roadmap
