import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
			<StaticImage
				className="tiny-icon"
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="../../images/logo.png"
				width={100}
				height={100}
				quality={95}
				alt="Elrond Shibas love you"
        />
		</div>
	)
}

export default Logowrap
