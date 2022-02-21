import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import WaflToken from "../components/WaflToken"

const Whitepaper = () => (
  <Layout>
    <Seo title="Whitepaper" />
      <div className="navBar-safetypad"></div>
      <div className="container is-fluid gray space-it-all">
       <h1 className="hero-text">Introducing WAFL token and <h1 className="whyt">ShibaWorld</h1></h1>
       <div className="level columns is-mobile">
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
      </div>
      <h2>TL;DR</h2>
      <p className="pr-5">Your Shibas and SFTs earn you WAFL daily and pay you each Wednesday. You get SFTs after 28 days of Shiba HODL.</p>
      <div className="level columns is-mobile space-it-all">
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
      </div>
      <h2>WAFL Token Facts</h2>
      <p>There's a total supply of 20,000,000 $WAFL tokens. No more will ever be created.</p>
      <ul>
        <li>When $WAFL is spent in ShibaWorld it is 100% BURNED</li>
        <li>$WAFL began emitting on 2/2/22</li>
        <li>Earned by holding Elrond Shibas (SHIB-50039b) NFT’s</li>
        <li>Earned by holding SHIBWRLD SFT’s (<span className="yikes">Collection Drops March 2nd</span>)</li>
        <li>Used to buy new Elrond Shibas NFT collections (AniShib, 3DSHIB)</li>
        <li>Other use cases will emerge!</li>
      </ul>

      <div className="container is-fluid gray p-2">
        <h2>Earning SFTs from ShibaWorld</h2>
        <p>After 28 days in your wallet...</p>
        <ul>
          <li>5 Elrond Shiba NFTs earn you a SHIBA GARDEN SFT (🌻)</li>
          <li>10+ NFTs build you a SHIBA FARM SFT (🚜)</li>
          <li>25+ NFTs establish a SHIBA CASTLE SFT (🏯)</li>
          <li>50+ NFTs architect a SHIBA SPACESHIP SFT (🚀)</li>
        </ul>
      </div>

      <div>
        <h2 className="pt-3">WAFL Distribution Details</h2>
        <p>$WAFL is distributed every Wednesday 1430 UTC &nbsp;<a href="https://twitter.com/search?q=%24WAFL&src=cashtag_click" className="peachy-txt">#WAFLWednesdays</a></p>
        <ul>
          <li>Each SHIB-50039b NFT in your wallet generates 1 $WAFL per day</li>
          <li>Each <span className="peachy-txt">Shiba Garden</span> SFT generates 1 $WAFL per day</li>
          <li>Each <span className="peachy-txt">Shiba Farm</span> SFT generates 2 $WAFL per day</li>
          <li>Each <span className="peachy-txt">Shiba Castle</span> SFT generates 3 $WAFL per day</li>
          <li>Each <span className="peachy-txt">Shiba Spaceship</span> SFT generates 4 $WAFL per day</li>
        </ul>
      </div>

      <div className="container is-fluid gray pb-4">
        <h2 className="pt-3">SHIBWRLD SFTs can be earned more than once (by holding for consecutive 28 day periods) and are TRADEABLE and SELLABLE</h2>
        <p>The SHIBWRLD Collection is capped at 7777 SFTs. It is created in a First Mint, First Kept (FMFK) fashion-- many more Gardens will exist than any other SFT type, and Spaceships will only drop into the most dedicated Elrond Shiba collectors' wallets.</p>  
        <table className="table is-narrow">
          <thead>
            <tr>
              <th></th>
              <th><span className="peachy-txt">Launch<br/>2/2/2022</span></th>
              <th><span className="peachy-txt">4 wks<br/>3/2/2022</span></th>
              <th><span className="peachy-txt">8 wks<br/>3/30/2022</span></th>
              <th><span className="peachy-txt">12 wks<br/>4/27/2022</span></th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <td>SHIB-50039b NFT in Circulation</td>
              <td>1400</td>
              <td>2300</td>
              <td>3200</td>
              <td>5000</td>
            </tr>
           <tr>
              <td>Shiba Gardens in Circulation</td>
              <td>0</td>
              <td>50</td>
              <td>140</td>
              <td>360</td>
            </tr>
           <tr>
              <td>Shiba Farms in Circulation</td>
              <td>0</td>
              <td>30</td>
              <td>72</td>
              <td>185</td>
            </tr>
           <tr>
              <td>Shiba Castles in Circulation</td>
              <td>0</td>
              <td>10</td>
              <td>24</td>
              <td>60</td>
            </tr>
             <tr>
                <td>Shiba Spaceships in Circulation</td>
                <td>0</td>
                <td>2</td>
                <td>5</td>
                <td>10</td>
              </tr>
             <tr>
              <td>SHIBWRLD SFTs Minted</td>
              <td>0</td>
              <td>92</td>
              <td>333</td>
              <td>948</td>
            </tr>
          </tbody>
        </table>
      </div>
        
      <div className="container is-fluid gray pb-4">
        <h2 className="pt-3">SHIBWRLD SFTs can be earned more than once (by holding for consecutive 28 day periods) and are TRADEABLE and SELLABLE</h2>
        <p>The SHIBWRLD Collection is capped at 7777 SFTs. It is created in a First Mint, First Kept (FMFK) fashion-- many more Gardens will exist than any other SFT type, and Spaceships will only drop into the most dedicated Elrond Shiba collectors' wallets.</p>  
      </div>

    </div>
  </Layout>
)

export default Whitepaper
