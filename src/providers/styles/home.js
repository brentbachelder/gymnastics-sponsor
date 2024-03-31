export const HomeStyle = (mobile) => {
	return {
		heroContainer: {
			width: "100vw",
			height: "100vh",
			backgroundImage: 'url("/img/background.jpg")',
			display: "flex",
			flexDirection: "column"
		},
		headerContainer: {
			width: "100%",
			padding: "12px 24px",
			backgroundColor: "rgba(0, 0, 0, .2)",
			display: "flex",
			justifyContent: "center"
		},
		headerInner: {
			width: "100%",
			maxWidth: "1180px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		headerLogo: {
			width: "auto",
			height: "auto",
			maxHeight: "40px"
		},
		headerLinkContainer: {
			display: "flex",
			gap: "48px",
			alignItems: "center"
		},
		headerButton: {
			padding: "12px 16px",
			borderRadius: "4px",
			outline: "none",
			boxShadow: "none",
			border: "0",
			color: "#ffffff",
			cursor: "pointer",
			fontWeight: "600",
			backgroundColor: "transparent"
		},
		heroHomeContainer: {
			flex: "1 0",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "100%"
		},
		heroHomeInner: {
			display: "flex",
			width: "100%",
			maxWidth: "1180px",
			justifyContent: "space-between",
			alignItems: "center"
		},
		heroSearchContainer: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			maxWidth: "570px",
			padding: mobile ? "0 24px" : "0",
			textAlign: mobile ? "center" : "left"
		},
		heroSearchTitle: {
			fontSize: "80px",
			lineHeight: "80px",
			color: "#ffffff",
			marginBottom: "4px"
		},
		heroSearchSub: {
			fontSize: "24px",
			lineHeight: "32px",
			color: "#ffffff"
		},
		heroSearchInputContainer: {
			width: "100%",
			display: "flex",
			flexDirection: mobile ? "column" : "row",
			gap: mobile ? "16px" : "10%",
			margin: "30px 0 0"
		},
		heroSearchInput: {
			padding: "0 20px",
			height: "60px",
			fontSize: "18px",
			fontWeight: "500",
			width: mobile ? "100%" : "60%",
			borderRadius: "12px",
			border: "0",
			outline: "none"
		},
		heroSearchButton: {
			height: "60px",
			width: mobile ? "100%" : "30%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "24px",
			borderRadius: "12px",
			boxShadow: "none",
			border: "0",
			backgroundColor: "#db8dfa",
			color: "#ffffff"
		},
		heroGraphic: {
			width: "100%",
			height: "auto",
			maxWidth: "610px"
		}
	}
}