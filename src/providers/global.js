import { createContext, useEffect, useState, useMemo } from 'react'

export const GlobalContext = createContext({});

export function Global({ children }) {
	const [mobile, setMobile] = useState()
	const [user, setUser] = useState()

	useEffect(() => {
		window.addEventListener("resize", handleResize)
		handleResize()
	}, [])

	const handleResize = () => {
		if (window.innerWidth < 780) setMobile(true)
		else setMobile(false)
	}

	const updateUser = (user) => {
		console.log(user)
		setUser(user)
	}

	const signOut = () => {
		console.log("Signing Out")
		setUser()
	}

	const memoizedValue = useMemo(
		() => ({
			mobile: mobile,
			user: user,
			updateUser: updateUser,
			signOut: signOut
		}), [mobile, user]
	);

	return <GlobalContext.Provider value={memoizedValue}>{children}</GlobalContext.Provider>;
}

