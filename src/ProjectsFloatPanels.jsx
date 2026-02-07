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

function ProjectsFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== "projects") {
		return;
	}

	return <>
		<FloatingPanel
			position={[0.7, 0.2, 2.2]}
		>
			<TitleLabel>CATALOG V2</TitleLabel>
			<SubtitleLabel>PERSONAL PROJECT</SubtitleLabel>
			<DateLabel start="Dec. 2024" end="Mar. 2025"></DateLabel>
			<UnorderedList>
				<ListLabel>Complete avatar customization ui</ListLabel>
				<ListLabel>Full avatar editor: scaling, clothing, accessories, colors, and transform editing</ListLabel>
				<ListLabel>Implemented outfit upload & saving backed by Supabase</ListLabel>
				<ListLabel>Designed a rotational proxy system to handle large request volumes safely</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton icon={"./LanguageIcons/React.svg"}>React-luau</SkillButton>
				<SkillButton icon={"./LanguageIcons/SQL.svg"}>SQL</SkillButton>
				<SkillButton icon={"./BrandImages/Supabase.svg"}>Supabase</SkillButton>
				<SkillButton>Roblox</SkillButton>
				<SkillButton>Proxies</SkillButton>
			</HorizontalLayout>
		</FloatingPanel>

		<FloatingPanel
			position={[- 1.7, 0.1, 2]}
		>
			<TitleLabel>TOME</TitleLabel>
			<SubtitleLabel>OPEN&mdash;SOURCE LIBRARY</SubtitleLabel>
			<DateLabel start="Nov. 2023" end="Dec. 2025"></DateLabel>
			<UnorderedList>
				<ListLabel>Open-source resource management / garbage collection module</ListLabel>
				<ListLabel>Inspired by Maid, Trove, and Janitor, but with expanded lifecycle control</ListLabel>
				<ListLabel>Provides more methods and sustainability for long-running systems</ListLabel>
				<ListLabel>Actively maintained and publicly available on Github</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>Memory Management</SkillButton>
				<SkillButton>API Design</SkillButton>
				<SkillButton>System Design</SkillButton>
			</HorizontalLayout>
			<div
				style={{
					margin: "none",
					marginTop: "12px",
					display: "flex",
					justifyContent: "left",
				}}
			>
				<ContactButton
					image={"./BrandImages/Github.svg"}
					onClick={(element) => {
						element.stopPropagation();

						window.open("https://github.com/y29r/Tome", "_blank");
					}}
				></ContactButton>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[- 2.5, -0.05, 0.2]}
		>
			<TitleLabel>BEAVER</TitleLabel>
			<SubtitleLabel>OPEN&mdash;SOURCE LIBRARY</SubtitleLabel>
			<DateLabel start="Aug. 2025" end="present"></DateLabel>
			<UnorderedList>
				<ListLabel>A custom native string formatter for coverting unreadable data, into something readable. e.g. <code><br />10000000 &#8594; 10.0m</code></ListLabel>
				<ListLabel>Featuring nearly a hundred unique formatters for almost any use case.</ListLabel>
				<ListLabel>Built for large pooling; being performant enough to run millions of callbacks per frame.</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>String Formatting</SkillButton>
				<SkillButton>Functional Programming</SkillButton>
			</HorizontalLayout>
			<div
				style={{
					margin: "none",
					marginTop: "12px",
					display: "flex",
					justifyContent: "left",
				}}
			>
				<ContactButton
					image={"./BrandImages/Github.svg"}
					onClick={(element) => {
						element.stopPropagation();

						window.open("https://github.com/y29r/Beaver", "_blank");
					}}
				></ContactButton>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[- 1.7, -0.2, -1.6]}
		>
			<TitleLabel>SKYDIVE TOWER</TitleLabel>
			<SubtitleLabel>PERSONAL GAME</SubtitleLabel>
			<DateLabel start="Oct. 2025" end="present"></DateLabel>
			<UnorderedList>
				<ListLabel>Built using react-luau with a structured multiscript architecture</ListLabel>
				<ListLabel>End-to-end development over a 4-month production cycle</ListLabel>
				<ListLabel>Designed UI flows and layouts in Figma, translated directly into game UI</ListLabel>
				<ListLabel>Created 3D assets in Blender and assembled full playable environments</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>3D Modelling</SkillButton>
				<SkillButton>Multiscript Systems</SkillButton>
				<SkillButton>System Design</SkillButton>
			</HorizontalLayout>
		</FloatingPanel>

		<FloatingPanel
			position={[0, 0, -2.6]}
		>
			<TitleLabel>UNTITLED BOAT GAME</TitleLabel>
			<SubtitleLabel>PERSONAL GAME</SubtitleLabel>
			<DateLabel start="Nov. 2023" end="Dec. 2025"></DateLabel>
			<UnorderedList>
				<ListLabel>Implemented custom Gerstner-based water waves for dynamic ocean movement</ListLabel>
				<ListLabel>Built a scalable chunking system with procedural island generation</ListLabel>
				<ListLabel>Developed NPC dialogue, inventory, leaderboard, and playerlist systems</ListLabel>
			</UnorderedList>
			<HorizontalLayout>
				<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
				<SkillButton>Replication</SkillButton>
				<SkillButton>Optimization</SkillButton>
				<SkillButton>System Design</SkillButton>
			</HorizontalLayout>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[2.2, 0.5, 1]}
			title="BACK"
			description="Back to the main menu"
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Back to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default ProjectsFloatPanels