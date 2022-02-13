import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BigLkmex = () => {
	return(
		<StaticImage
			className=""
			layout="fixed"
			formats={["AUTO", "WEBP", "AVIF"]}
			src="../images/lkmex.png"
			width={195}
			height={195}
			quality={95}
			alt="Elrond Shibas farm Waffles!"
		/>
	)
	}

	export default BigLkmex
