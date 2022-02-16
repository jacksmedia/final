import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LkmexToken from '../components/LkmexToken'
import BigLkmex from '../components/BigLkmex'

const Rarity = () => (
  <Layout>
    <Seo title="Rarity" />
    <div className="container is-fluid pt-3">
      <h1>ElrondShibas Love LKMEX</h1>
      <h3 className="yikes">Look forward to ShibaSaturdays</h3>
      <p>The SHIB-50039b NTFs currently yield <span className="yikes">9496.84615 LKMEX</span> per week!</p>
      <p>Not finding your LKMEX gift, fren? Follow this guide to locate your Locked Maiar Exchange tokens and enjoy your passive income lifestyle!</p>
      <div className="mt-3 level is-mobile">
        <LkmexToken /><LkmexToken /><LkmexToken /><LkmexToken /><LkmexToken />
      </div>
      <h2>Step #1</h2>
      <StaticImage
        className="tile"
        src="../images/lkmex1.png"
        width={702}
        height={199}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="how to find your LKMEX"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>Please input your wallet address into <a href="https://explorer.elrond.com/">Elrond Explorer</a></p>

      <h2>Step #2</h2>
      <StaticImage
        className="tile"
        src="../images/lkmex2.png"
        width={763}
        height={880}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="how to find your LKMEX"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>Go down and find the SC (Smart Contracts) page link.</p>


      <h2>Step #3</h2>
      <StaticImage
        className="tile"
        src="../images/lkmex3.png"
        width={1440}
        height={900}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="how to find your LKMEX"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>Check for 2 transactions around 1410 utc (6:10am Los Angeles & 2210 Shanghai)</p>


      <h2>Step #4</h2>
      <StaticImage
        className="tile"
        src="../images/lkmex4.png"
        width={1440}
        height={900}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="how to find your LKMEX"
        style={{ marginBottom: `1.45rem` }}
      />
     <p>Each SHIB-50039b NTF yielded 9496.84615 LKMEX on 2/12/2022!</p>
     <p>As the CDO treasury compounds, SHIB-50039b NTFs will grow in lucrativity!</p>
    </div>
    <div className="section center">
      <BigLkmex />
    </div>
  </Layout>
)

export default Rarity
