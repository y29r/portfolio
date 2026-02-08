import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import StandardButton from "./StandardButton/StandardButton.jsx"

import DateLabel from "./DateLabel/DateLabel.jsx";
import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import SubtitleLabel from "./SubtitleLabel/SubtitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import UnorderedList from "./UnorderedList/UnorderedList.jsx";
import ListLabel from "./ListLabel/ListLabel.jsx";
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";

import { useExperiencePath } from "./ExperiencePathContext.jsx"

function ExperienceFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== "experience") {
		return;
	}

	return <>
		<FloatingPanel
			position={[-2.406, 0.647, -0.21]}
		>
			<TitleLabel>FULLSTACK DEVELOPER</TitleLabel>
			<SubtitleLabel>FREELANCE</SubtitleLabel>
			<DateLabel start="Jan. 2024" end="Oct. 2025"></DateLabel>
			<UnorderedList>
				<ListLabel>Designed and implemented a scalable animation synchronization system to ensure consistent state across clients</ListLabel>
				<ListLabel>Refactored the majority of the frontend and backend codebase to improve structure, readability, and long-term maintainability</ListLabel>
				<ListLabel>Identified and replaced outdated, unreliable logic with modern, more robust implementations</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>Replication</SkillButton>
				<SkillButton>Optimization</SkillButton>
				<SkillButton>System Design</SkillButton>
			</HorizontalLayout>
		</FloatingPanel>

		<FloatingPanel
			position={[-1.85, 0.647, 1.552]}
		>
			<TitleLabel>BACKEND DEVELOPER</TitleLabel>
			<SubtitleLabel>GAME-JAM COMPETITION</SubtitleLabel>
			<DateLabel start="Feb. 2025" end="Feb. 2025"></DateLabel>
			<UnorderedList>
				<ListLabel>Participated in a 72-hour team-based game jam focused on rapid prototyping and iteration</ListLabel>
				<ListLabel>Built core gameplay systems including dialogue, puzzles, and minigames within a limited development window</ListLabel>
				<ListLabel>Helped deliver a complete narrative-driven game with multiple NPCs and interactive mechanics</ListLabel>
				<ListLabel>Project was shortlisted as a top contender in the competition</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>System Design</SkillButton>
				<SkillButton>Game Design</SkillButton>
			</HorizontalLayout>
			<StandardButton
				text="PLAY ➞"
				onClick={(element) => {
					element.stopPropagation();

					window.open("https://www.roblox.com/games/80893838972474/TOSH", "_blank");
				}}
			></StandardButton>
		</FloatingPanel>

		<FloatingPanel
			position={[-0.21, 0.647, 2.406]}
		>
			<TitleLabel>FULLSTACK DEVELOPER</TitleLabel>
			<SubtitleLabel>FREELANCE</SubtitleLabel>
			<DateLabel start="Oct. 2024" end="Oct. 2024"></DateLabel>
			<UnorderedList>
				<ListLabel>Built core interactive systems such as item pickup logic and contextual camera effects</ListLabel>
				<ListLabel>
					Designed and implemented a randomized tower generation pipeline inspired by Tower of Hell&mdash;style gameplay
				</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>Procedural Generation</SkillButton>
				<SkillButton>Gameplay Systems</SkillButton>
			</HorizontalLayout>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[-1.552, 0.647, -1.85]}
			title="BACK"
			description="Back to the main menu"
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Back to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default ExperienceFloatPanels;