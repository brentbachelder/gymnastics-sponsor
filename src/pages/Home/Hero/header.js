import { useContext, useRef } from "react"
import { StyleContext } from "../../../providers/style"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../providers/global"

export function Header() {
	const style = useContext(StyleContext)
	const global = useContext(GlobalContext)
	const headerRef = useRef(null)
	const navigate = useNavigate()

	function gotoLogin() {
		console.log("got her3ew")
		if (global.user) navigate(`/profile/${global.user.id}`)
		else navigate('./login')
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const scrollToInfo = () => {
		const hero = document.getElementById('hero-container')
		const heroHeight = hero.clientHeight
		const yOffset = headerRef.current.clientHeight
		const top = heroHeight - yOffset
		console.log(top)
		window.scrollTo({ top: top, behavior: 'smooth' });
	}

	const scrollToMoreInfo = () => {
		const hero = document.getElementById('hero-container')
		const heroHeight = hero.clientHeight
		const info = document.getElementById('info-container')
		const infoHeight = info.clientHeight
		const yOffset = headerRef.current.clientHeight
		const top = heroHeight + infoHeight - yOffset
		console.log(top)
		window.scrollTo({ top: top, behavior: 'smooth' });
	}

	return (
		<div style={style.home.headerContainer} ref={headerRef}>
			<div style={style.home.headerInner}>
				<img src='/img/logo.png' style={style.home.headerLogo} alt='logo' onClick={scrollToTop} />
				{!global.mobile && <div style={style.home.headerLinkContainer} className="b-font">
					<button style={style.home.headerButton} className="b-font hover-gray" onClick={scrollToInfo}>Learn More</button>
					<button style={style.home.headerButton} className="b-font hover-gray" onClick={scrollToMoreInfo}>Even More</button>
					<button style={{ ...style.home.headerButton, backgroundColor: "rgba(0, 0, 0, .3)", fontWeight: "600" }}
						className="b-font hover-gray hover-bg-dark" onClick={() => gotoLogin()}>
						{global.user ? 'My Account' : 'Gymnast Login'}
					</button>
				</div>}
			</div>
		</div>
	)
}