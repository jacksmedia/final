import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
			<Link to="/">
			<StaticImage
				className="tiny-icon"
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="./logo.png"
				width={70}
				height={70}
				quality={95}
				alt="Elrond Shibas love you"
        	/>
        	</Link>
		</div>
	)
}

export default Logowrap
