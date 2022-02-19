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
				src="./logo-text.png"
				width={151}
				height={66}
				quality={95}
				alt="Elrond Shibas love you"
        	/>
        	</Link>
		</div>
	)
}

export default Logowrap
