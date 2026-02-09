import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber';

import Experience from "./Experience.jsx"

import StartScreen from "./StartScreen/StartScreen.jsx";

import { ExperienceContext } from "./Contexts/ExperiencePathContext.jsx"
import { StartContext } from "./Contexts/StartScreenContext.jsx";

import "./fonts.css";

export function App() {
	return (
		<ExperienceContext>
			<StartContext>
				<StartScreen />
				<Canvas>
					<Experience />
				</Canvas>
			</StartContext>
		</ExperienceContext>
	);
}

const root = createRoot(document.querySelector("#root"));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)