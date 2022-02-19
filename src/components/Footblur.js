import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footblur = () => {
  const daowallet = "erd1x5xyd7wll5us3rlztzyfsc8sazph5dnrqen8v90pr34gfpr7s5vqdjv8d7"
  return(
    <div className="footsie">
        <p>Made with Love by Elrond Shibas Team</p>
        <p>Website by <a href="https://jacks.media">Jacks Media</a>
        {`, `}{new Date().getFullYear()}</p>
      <div className="bottommost-text">
        <div className="center">
        <StaticImage
          className="tiny-icon"
          color="snow"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/egld.svg"
          width={36}
          height={36}
          quality={95}
          alt="Egold symbol"
        />
        <p className="h-smoltext">CDO: {daowallet}</p>
        </div>
      </div>
    </div>
  )
}
export default Footblur