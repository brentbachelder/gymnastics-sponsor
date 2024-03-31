import { createContext, useContext, useMemo } from 'react'
import { GlobalContext } from './global';
import { HomeStyle } from './styles/home';

export const StyleContext = createContext({});

export function Style({ children }) {
	const global = useContext(GlobalContext)

	const memoizedValue = useMemo(
		() => ({
			home: HomeStyle(global.mobile)
		}), [global.mobile]
	);

	return <StyleContext.Provider value={memoizedValue}>{children}</StyleContext.Provider>;
}

