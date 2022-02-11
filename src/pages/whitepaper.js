import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import WaflToken from "../components/WaflToken"

const Whitepaper = () => (
  <Layout>
    <Seo title="Whitepaper" />
    <div className="pl-2 pt-2">
      <div className="container is-fluid eshib-bg-15">
        <h1 className="whyt">Elrond Shibas v2</h1>
        <h1>Introducing WAFL token and <h1 className="whyt">ShibaWorld</h1></h1>
      </div>
       <div className="level columns is-mobile">
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
      </div>
      <h2>TL;DR</h2>
      <p className="pr-5">Your Shibas and SFTs earn you WAFL daily and pay you each Wednesday. You get SFTs after 28 days of Shiba HODL.</p>
      <div className="level columns is-mobile">
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
        <li>Earned by holding SHIBWRLD SFT’s (Collection Coming Soon)</li>
        <li>Used to buy new collections</li>
        <li>Other use cases! Keep reading.</li>
      </ul>
      <div className="container is-fluid eshib-bg-10">
        <h2 className="pt-3">WAFL Distribution Details</h2>
        <p>$WAFL is distributed every Wednesday 1430&nbsp;<a href="https://twitter.com/search?q=%24WAFL&src=cashtag_click" className="yikes">#WAFLWednesdays</a></p>
        <ul>
          <li>Each SHIB-50039b NFT in your wallet generates 1 $WAFL per day</li>
          <li>Each <span className="yikes">Shiba Garden</span> SFT in your wallet generates 1 $WAFL per day</li>
          <li>Each <span className="yikes">Shiba Farm</span> SFT in your wallet generates 2 $WAFL per day</li>
          <li>Each <span className="yikes">Shiba Castle</span> SFT in your wallet generates 3 $WAFL per day</li>
          <li>Each <span className="yikes">Shiba Spaceship</span> SFT in your wallet generates 4 $WAFL per day</li>
        </ul>
      </div>
      <h2>Earning SFTs</h2>
      <p>After 28 days in your wallet...</p>
      <ul>
        <li>5 SHIB-50039b NFTs earn you a SHIBA GARDEN SFT from SHIBWRLD</li>
        <li>10+ NFTs earn you a SHIBA FARM SFT from SHIBWRLD</li>
        <li>25+ NFTs earn you a SHIBA CASTLE SFT from SHIBWRLD</li>
        <li>50+ NFTs earn you a SHIBA SPACESHIP SFT from SHIBWRLD</li>
      </ul>
      <div className="container is-fluid eshib-bg-10">
        <h2 className="pt-3">SHIBWRLD SFTs can be earned more than once (by holding for consecutive 28 day periods) and are TRADEABLE and SELLABLE</h2>
        <p>The SHIBWRLD NFT Collection is capped at 7777 SFTs. It is created in a First Mint, First Kept (FMFK) fashion-- many more Gardens will exist than any other SFT type, and Spaceships will only drop into the most dedicated Elrond Shiba collectors' wallets.</p>  
        <table className="table is-mobile">
          <thead>
            <tr>
              <th></th>
              <th>Launch<br/>2/2/2022</th>
              <th>4 wks<br/>3/2/2022</th>
              <th>8 wks<br/>3/30/2022</th>
              <th>12 wks<br/>4/27/2022</th>
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
    </div>
  </Layout>
)

export default Whitepaper
