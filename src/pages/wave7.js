import * as React from "react"
import { Link } from "gatsby"
import Layoutsub from "../components/layoutsub"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Wave7 = () => (
  <Layoutsub>
    <Seo title="Wave 7" className="level is-mobile"/>
     <div className="">
       <div className="navBar-safetypad"></div>
       <StaticImage
          className="mt-5"
          src="../images/wave7-banner.jpg"
          width={1500}
          height={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Wave 7 of Elrond Shibas minting Februrary 2022"
          style={{ marginBottom: `1.45rem` }}
        />    
      <div className="pl-2 pt-2 container is-mobile is-flex-direction-column">
        <h1 className="has-text-centered">Wave 7 Minting Februrary 21</h1>
        <p className="has-text-centered">300 Shibas, 2 legendaries</p>
        <h3 className="has-text-centered">0.6 EGLD each, limit 5 per wallet</h3>
        <p className="button center"><a href="https://mint.elrondshibas.com/">Mint Here!</a></p>
      </div>
    </div>
  </Layoutsub>
)

export default Wave7
