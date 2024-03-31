import { useContext } from "react"
import { StyleContext } from "../../../providers/style"
import { Header } from "./header"
import { Search } from "./search"
import { Graphic } from "./graphic"

export default function Hero() {
	const style = useContext(StyleContext)
	console.log(style.home)

	return (
		<div style={style.home.heroContainer}>
			<Header />
			<div style={style.home.heroHomeContainer}>
				<div style={style.home.heroHomeInner}>
					<Search />
					{window.innerWidth >= 780 && <Graphic />}
				</div>
			</div>
		</div>
	)
}