import { useContext } from "react"
import { StyleContext } from "../../../providers/style"

export default function Something() {
	const style = useContext(StyleContext)

	console.log(style)

	return (
		<div style={style.home.infoContainer} id="something-container">
			This is the 2nd info Info Section
		</div>
	)
}