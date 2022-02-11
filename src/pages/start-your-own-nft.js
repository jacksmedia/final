import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const StartYourOwnNft = () => (
  <Layout>
    <Seo title="NFT" />
    <div className="pl-2 pt-2 section">
      <h1>Start Your Own NFT Collection with Our Quick Start Package</h1>
      <StaticImage
          className="tile"
          src="../images/shibawave.png"
          width={275}
          height={275}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Waves of Elrond Shibas"
          style={{ marginBottom: `1.45rem` }}
       />
      <h2>Automated Minting</h2>
      <p>Bulk mints your collection to the blockchain</p>
      <h2>Elrond Dapp and Smart Contracts</h2>
      <ul>
        <li>Professionally mint and collect payments from your community.</li>
        <li>20 EGLD - Scripts + Instructions</li>
        <li>40 EGLD - Scripts + White Glove Service</li>
        <li>Draxon0012#8511 on Discord</li>
        <li><a href="https://twitter.com/elrondshibas">@elrondshibas on Twitter</a>!</li>
      </ul>
      <h2>Discord Bots</h2>
     <p>Secondary Marketplace Discord Watch Bot so your community can get <strong>hype</strong> about sales!</p>
    </div>
  </Layout>
)

export default StartYourOwnNft
