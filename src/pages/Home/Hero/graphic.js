import { useContext } from "react"
import { StyleContext } from "../../../providers/style"

export function Graphic() {
	const style = useContext(StyleContext)

	return (
		<img src='/img/hero.png' alt='hero-graphic' style={style.home.heroGraphic} />
	)
}