
import { createContext, useContext, useState } from "react";

const ExperiencePathContext = createContext(undefined)

export function ExperienceContext({
	children
}) {
	const [experiencePath, setExperiencePath] = useState(null);

	return <ExperiencePathContext.Provider value={{
		experiencePath,
		setExperiencePath
	}}>
		{children}
	</ExperiencePathContext.Provider>
}

export function useExperiencePath() {
	const experiencePath = useContext(ExperiencePathContext)
	if (experiencePath === undefined) {
		throw new Error("useExperiencePath requires the ExperienceContext provider before using!")
	}

	return experiencePath
}