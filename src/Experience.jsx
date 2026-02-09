import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from "postprocessing"
import { OrbitControls, Float, Html, useCamera } from '@react-three/drei';

import { FlowFieldParticles } from "./InstanceEffects/FieldFlowParticles.jsx"

import { useExperiencePath } from "./Contexts/ExperiencePathContext.jsx"
import { useStartScreenContext } from "./Contexts/StartScreenContext.jsx";

import PrimaryFloatPanels from "./PrimaryFloatPanels.jsx"
import ExperienceFloatPanels from "./ExperienceFloatPanels.jsx"
import ProjectsFloatPanels from "./ProjectsFloatPanels.jsx";
import AboutMeFloatPanels from "./AboutMeFloatPanels.jsx";
import SkillsFloatPanels from "./SkillsFloatPanels.jsx";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Experience() {
	const { opened } = useStartScreenContext();
	if (opened) {
		return;
	}

	const { experiencePath, setExperiencePath } = useExperiencePath();

	const controlsRef = useRef();

	const [startTime] = useState(Date.now());

	useFrame((state, delta) => {
		const elapsed = (Date.now() - startTime) / 1000;
		const duration = 1.75;

		const speed = Math.max(0, 1 - elapsed / duration);

		if (controlsRef.current) {
			controlsRef.current.autoRotateSpeed = speed * 2500 * delta;
		}
	});

	return <>
		<EffectComposer>
			<ToneMapping mode={ToneMappingMode.NEUTRAL} />
			<Bloom
				luminanceThreshold={0.3}
				luminanceSmoothing={0.9}
				intensity={1.0}
				mipmapBlur={true}
			/>
		</EffectComposer>

		<ambientLight intensity={0.4} color="#ffffff" />

		<directionalLight
			position={[10, 10, 5]}
			intensity={1}
			color="#ffffff"
			castShadow
			shadow-mapSize-width={1024}
			shadow-mapSize-height={1024}
		/>

		<directionalLight
			position={[-5, 3, -5]}
			intensity={0.1}
			color="#ffffff"
		/>

		<OrbitControls
			ref={controlsRef}
			minDistance={2.5}
			maxDistance={7}
			enableDamping
			dampingFactor={0.025}
			enablePan={false}
			autoRotate={true}
			autoRotateSpeed={1}
		/>

		<Float
			speed={0.6}
			rotationIntensity={1.1}
			floatIntensity={0.1}
			floatingRange={[-0.1, 0.1]}
		>
			<mesh>
				<torusKnotGeometry args={[1, 0.42, 256, 32]} />
				<meshNormalMaterial />
			</mesh>

			<FlowFieldParticles
				size={1.35}
				shape="disc"
				repulsionDistance={2.0}
				strength={0.01}
				disturbIntensity={0.725}
				positionScale={[1.262, 1.2, 1.225]}
				repulsionForce={0.1}
				useNormalsForColor={true}
			>
				<mesh>
					<torusKnotGeometry args={[1, 0.48, 256, 32]} />
					<meshStandardMaterial color="#ffffff" />
				</mesh>
			</FlowFieldParticles>

			<FlowFieldParticles
				size={1.5}
				shape="disc"
				repulsionDistance={1.6}
				strength={0.01}
				disturbIntensity={0.4}
				positionScale={[1.262, 1.2, 1.225]}
				repulsionForce={0.4}
				useNormalsForColor={true}
			>
				<mesh>
					<torusKnotGeometry args={[1, 0.46, 256, 32]} />
					<meshStandardMaterial color="#ffffff" />
				</mesh>
			</FlowFieldParticles>

			<PrimaryFloatPanels />
			<ExperienceFloatPanels />
			<ProjectsFloatPanels />
			<AboutMeFloatPanels />
			<SkillsFloatPanels />
		</Float>

		<FlowFieldParticles
			size={1.258}
			shape="disc"
			timeScale={0.05}
			strength={0.002}
			disturbIntensity={1}
			positionScale={[4, 5, 3.25]}
			interactive={false}
		>
			<mesh>
				<icosahedronGeometry args={[8, 5]} />
				<meshStandardMaterial color="#cdcdcd" />
			</mesh>
		</FlowFieldParticles>
	</>
}

export default Experience