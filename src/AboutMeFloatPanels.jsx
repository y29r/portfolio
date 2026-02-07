import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import StandardButton from "./StandardButton/StandardButton.jsx"
import ContactButton from "./ContactButton/ContactButton.jsx"

import DateLabel from "./DateLabel/DateLabel.jsx";
import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import SubtitleLabel from "./SubtitleLabel/SubtitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import UnorderedList from "./UnorderedList/UnorderedList.jsx";
import ListLabel from "./ListLabel/ListLabel.jsx";
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";
import HyperlinkLabel from "./HyperlinkLabel/HyperlinkLabel.jsx";

import { useExperiencePath } from "./ExperiencePathContext.jsx"

function AboutMeFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== "about me") {
		return;
	}

	return <>
		<FloatingPanel
			position={[0, 0.6, 2]}
		>
			<TitleLabel>WHAT I DO</TitleLabel>
			<UnorderedList>
				<ListLabel>Build maintainable gameplay systems, tools, and UI-heavy applications</ListLabel>
				<ListLabel>Focus on reusable architecture and portability across projects</ListLabel>
				<ListLabel>{"Primary stack: Luau, JavaScript, React (More under projects)"}</ListLabel>
			</UnorderedList>
			{/* <HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>Replication</SkillButton>
				<SkillButton>Optimization</SkillButton>
				<SkillButton>System Design</SkillButton>
			</HorizontalLayout> */}
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[-1.7, 0.6, 1.6]}
			title="BACK"
			description="Back to the main menu"
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Back to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default AboutMeFloatPanels;