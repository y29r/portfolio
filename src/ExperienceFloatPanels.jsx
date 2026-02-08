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
				<ListLabel>Built a custom animation sync system supporting 600+ emotes with reliable client replication</ListLabel>
				<ListLabel>Rewrote most of the game’s codebase to replace unstable and hard-to-scale logic</ListLabel>
				<ListLabel>Fixed major data saving and loading issues and reworked the database structure</ListLabel>
				<ListLabel>Added player leaderboards and contributed numerous smaller gameplay and system improvements</ListLabel>
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
				<ListLabel>Took part in a 72-hour team game jam centered around the theme "computers"</ListLabel>
				<ListLabel>Implemented puzzles, minigames, dialogue, and core interactions</ListLabel>
				<ListLabel>Built camera work, sound effects, and intro/outro sequences</ListLabel>
				<ListLabel>Project was shortlisted as one of the top entries</ListLabel>
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
				<ListLabel>Built a procedural tower generation system for a Tower of Hell&mdash;style game</ListLabel>
				<ListLabel>Implemented pickups, camera effects, and progression features</ListLabel>
				<ListLabel>Added leaderboards and other supporting systems</ListLabel>
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
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Return to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default ExperienceFloatPanels;