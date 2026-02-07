import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber';

import Experience from "./Experience.jsx"

import { ExperienceContext } from "./ExperiencePathContext.jsx"

import './fonts.css';

export function App() {
	return (
		<ExperienceContext>
			<Canvas>
				<Experience />
			</Canvas>
		</ExperienceContext>
	);
}

const root = createRoot(document.querySelector("#root"));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)