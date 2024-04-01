export default function Container({ children, main = false, bgColor = 'transparent', style = {} }) {
	const outer = {
		width: "100vw",
		flex: main ? '1 0' : null,
		display: "flex",
		justifyContent: "center",
		backgroundColor: bgColor
	}

	const inner = {
		width: "100%",
		maxWidth: "1300px",
		padding: "12px 24px",
		display: "flex",
		justifyContent: "center",
		...style,
	}

	return (
		<div style={outer}>
			<div style={inner}>
				{children}
			</div>
		</div>
	)
}