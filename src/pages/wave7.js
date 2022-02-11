import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"


const Wave7 = () => (
  <Layout className="wave6-colors">
    <Seo title="Wave 7" className="level is-mobile"/>
     <StaticImage
        className="tile"
        src="../images/wave7-banner.png"
        width={1500}
        height={500}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Wave 7 of 5000 Shibas minting Februrary 2022"
        style={{ marginBottom: `1.45rem` }}
      />    
    <div className="pl-2 pt-2">
      <h1 className="yikes">Wave 7 Minting Soon</h1>
      <p className="yikes">Date and Price TBD</p>
        <strong><a href="https://mint.elrondshibas.com/"></a></strong>
    </div>
  </Layout>
)

export default Wave7
