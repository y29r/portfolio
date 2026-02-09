import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";

import { useExperiencePath } from "./Contexts/ExperiencePathContext.jsx"

function AboutMeFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== "about me") {
		return;
	}

	return <>
		<FloatingPanel
			position={[-0.637, 0.434, -2.378]}
		>
			<TitleLabel>HOW I WORK</TitleLabel>
			<DescriptionLabel>I take vague ideas and turn them into clear, working systems. I focus on structure first, then iterate and improve.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.231, 0.434, -1.04]}
		>
			<TitleLabel>PROJECT FOCUS</TitleLabel>
			<DescriptionLabel>Most of my work is on gameplay systems, procedural mechanics, and building complete features that actually ship.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.132, 0.434, 1.231]}
		>
			<TitleLabel>COLLABORATION</TitleLabel>
			<DescriptionLabel>I keep communication simple, give regular updates, and adjust quickly when plans change.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			position={[0, 0.434, 2.462]}
		>
			<TitleLabel>WHAT I LOOK FOR</TitleLabel>
			<DescriptionLabel>I'm open to commission, part-time, and full-time work. I prefer projects with clear goals, reasonable scope, and time to do things properly.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[1.231, 0.434, -2.132]}
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Return to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default AboutMeFloatPanels;