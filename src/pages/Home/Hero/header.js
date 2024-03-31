import { useContext } from "react"
import { StyleContext } from "../../../providers/style"
import { Link, useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../providers/global"

export function Header() {
	const style = useContext(StyleContext)
	const global = useContext(GlobalContext)
	const navigate = useNavigate()

	function gotoLogin() {
		console.log("got her3ew")
		if (global.user) navigate(`/profile/${global.user.id}`)
		else navigate('./login')
	}

	return (
		<div style={style.home.headerContainer}>
			<div style={style.home.headerInner}>
				<Link to='/'><img src='/img/logo.png' style={style.home.headerLogo} alt='logo' /></Link>
				<div style={style.home.headerLinkContainer} className="b-font">
					<button style={style.home.headerButton} className="b-font hover-gray">Learn More</button>
					<button style={{ ...style.home.headerButton, backgroundColor: "rgba(0, 0, 0, .3)" }}
						className="b-font hover-gray hover-bg-dark" onClick={() => gotoLogin()}>
						{global.user ? 'My Account' : 'Gymnast Login'}
					</button>
				</div>
			</div>
		</div>
	)
}