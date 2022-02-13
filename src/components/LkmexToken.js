import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const LkmexToken = () => {
	return(
		<StaticImage
			className=""
			layout="fixed"
			formats={["AUTO", "WEBP", "AVIF"]}
			src="../images/lkmex.png"
			height={40}
			width={40}
			quality={95}
			alt="Elrond Shibas bring you LKMEX on Saturdays!"
		/>
	)
	}

	export default LkmexToken
