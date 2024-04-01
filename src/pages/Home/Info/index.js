import { useContext } from "react"
import { StyleContext } from "../../../providers/style"

export default function InfoSection() {
	const style = useContext(StyleContext)

	console.log(style)

	return (
		<div style={{ ...style.home.infoContainer, backgroundColor: "#f5f5f5" }} id="info-container">
			This is the Info Section
		</div>
	)
}