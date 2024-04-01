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
			backgroundColor: "#49334f",
			display: "flex",
			justifyContent: "center",
			position: "fixed"
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
			maxHeight: "40px",
			cursor: "pointer"
		},
		headerLinkContainer: {
			display: "flex",
			gap: "18px",
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
			fontWeight: "400",
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
			justifyContent: mobile ? "center" : "space-between",
			alignItems: "center"
		},
		heroSearchContainer: {
			display: "flex",
			flexDirection: "column",
			width: mobile ? "100%" : "50%",
			maxWidth: "570px",
			padding: "0 36px",
			textAlign: mobile ? "center" : "left"
		},
		heroSearchTitle: {
			fontSize: window.innerWidth < 1200 && !mobile ? "60px" : "80px",
			lineHeight: window.innerWidth < 1200 && !mobile ? "60px" : "80px",
			color: "#ffffff",
			marginBottom: "4px"
		},
		heroSearchSub: {
			fontSize: window.innerWidth < 1200 && !mobile ? "18px" : "24px",
			lineHeight: window.innerWidth < 1200 && !mobile ? "24px" : "32px",
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
			width: "50%",
			height: "auto",
			maxWidth: "610px"
		},
		infoContainer: {
			width: "100%",
			height: "200vh",
			display: "flex",
			flexDirection: "column",
			backgroundColor: "#ffffff"
		}
	}
}