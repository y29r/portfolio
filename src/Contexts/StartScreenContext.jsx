import { createContext, useContext, useState } from "react";

const StartScreenContext = createContext(undefined);

export function StartContext({
	children
}) {
	const [opened, setOpened] = useState(true);

	return <StartScreenContext.Provider value={{
		opened,
		setOpened,
	}}>
		{children}
	</StartScreenContext.Provider>
};

export function useStartScreenContext() {
	const context = useContext(StartScreenContext);
	if (context === undefined) {
		throw new Error("useStartScreenContext requires the StartContext provider before using!");
	}

	return context
};