import { useContext } from "react"
import { StyleContext } from "../providers/style"
import { Link } from "react-router-dom"
import Container from "./container"

export default function Menu() {
	const style = useContext(StyleContext)

	return (
		<Container background="#ddd" style={style.menu.container}>
			<Link to='/'><img src='/img/logo.png' style={style.menu.logo} alt='Logo' /></Link>
			<div style={style.menu.linkContainer}>
				<Link to='/gymnast' style={style.menu.link}>Gymnast</Link>
				<Link to='/register' style={style.menu.link}>Register a Gymnast</Link>
			</div>
		</Container>
	)
}