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

	const memoizedValue = useMemo(
		() => ({
			mobile: mobile,
			user: user,
			setUser: setUser()
		}), [mobile, user]
	);

	return <GlobalContext.Provider value={memoizedValue}>{children}</GlobalContext.Provider>;
}

