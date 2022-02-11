import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BigWafl = () => {
	return(
		<StaticImage
			className=""
			layout="fixed"
			formats={["AUTO", "WEBP", "AVIF"]}
			src="../images/wafl.png"
			width={195}
			height={195}
			quality={95}
			alt="Elrond Shibas love you!"
		/>
	)
	}

	export default BigWafl
