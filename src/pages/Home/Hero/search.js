import { useContext } from "react"
import { StyleContext } from "../../../providers/style"
import { useNavigate } from "react-router-dom"

export function Search() {
	const style = useContext(StyleContext)
	const navigate = useNavigate()

	const performSearch = () => {
		const value = document.getElementById('search-input').value
		if (value !== '')
			navigate(`/gymnast/${value}`)
	}

	return (
		<div style={style.home.heroSearchContainer}>
			<div style={style.home.heroSearchTitle}>FIND A GYMNAST</div>
			<div style={style.home.heroSearchSub} className="b-font">Send your support to a gymnast today! Each gymnast has their own unique ID.</div>
			<div style={style.home.heroSearchInputContainer}>
				<input style={style.home.heroSearchInput} id='search-input' className="b-font" placeholder="Gymnast ID" />
				<button style={style.home.heroSearchButton} onClick={performSearch} className="a-font">
					Lets Go!
				</button>
			</div>
		</div>
	)
}