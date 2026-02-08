import { Html } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

import styles from "./FloatingPanel.module.css";

const EASE_POWER = 1.6;
const HIDE_THRESHOLD = 0.02;

const MAX_PANEL_VISIBLE_ANGLE = Math.PI * 0.64;

function FloatingPanel({
	position = [0, 0, 0],
	fadeSpeed = 100,
	onClick,
	children,
}) {
	const [visibilityFactor, setVisibilityFactor] = useState(0);
	const [sizeFactor, setSizeFactor] = useState(2);
	const { camera } = useThree();

	useFrame(() => {
		const worldCenter = new Vector3(0, 0, 0);

		const panelPosition = new Vector3(...position);
		const cameraPosition = camera.position.clone();

		const localCameraPosition = cameraPosition.clone().sub(worldCenter).normalize();
		const localPanelPosition = panelPosition.clone().sub(worldCenter).normalize();

		const angleDifference = localCameraPosition.dot(localPanelPosition);

		const normalAngle = Math.acos(Math.max(-1, Math.min(1, angleDifference)));
		const newVisibilityFactor = Math.max(0, 1 - (normalAngle / MAX_PANEL_VISIBLE_ANGLE));

		window.requestAnimationFrame(() => {
			setVisibilityFactor(newVisibilityFactor);
		})

		const newSizeFactor = window.innerHeight / 345;
		if (newSizeFactor === sizeFactor)
			return;

		setSizeFactor(newSizeFactor);
	});

	const visibilityScale = Math.max(0, 0.8 - Math.pow(1 - visibilityFactor, EASE_POWER));

	const isConsideredVisible = visibilityScale >= HIDE_THRESHOLD;
	const panelScale = visibilityScale * 1.65;
	const backgroundAlpha = visibilityScale * 0.86;

	return <Html
		position={position}
		center
		distanceFactor={sizeFactor}
	>
		<div
			className={styles.panel}
			style={{
				backgroundColor: `rgba(0, 0, 0, ${backgroundAlpha})`,
				backdropFilter: `blur(${8 + (1 - visibilityScale) * 12}px)`,
				WebkitBackdropFilter: `blur(${8 + (1 - visibilityScale) * 12}px)`,
				transform: `scale(${panelScale})`,
				fontFamily: "var(--font-main)",
				border: `${visibilityScale <= 0.5 ? 1 : 0}px solid rgba(255, 255, 255, ${0.08 * visibilityScale})`,
				//boxShadow: `0 0px ${(1 - visibilityScale) * 128}px rgba(0, 0, 0, ${backgroundAlpha})`,
				pointerEvents: isConsideredVisible ? 'auto' : 'none',
			}}
			onClick={onClick}
		>
			<div className={styles.dottedDiv}>{children}</div>
		</div>
	</Html>
}

export default FloatingPanel;