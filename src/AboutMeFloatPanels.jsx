import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";

import { useExperiencePath } from "./ExperiencePathContext.jsx"

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
			<DescriptionLabel>I usually start by thinking about structure before writing code. I care a lot about keeping things readable and easy to change later, especially when a project grows or lives for a long time. I don''t like one-off hacks unless they're truly temporary.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.231, 0.434, -1.04]}
		>
			<TitleLabel>MY STACK</TitleLabel>
			<DescriptionLabel>Most of my work is done in Luau and JavaScript, with a lot of time spent building interfaces using React and React-Luau. I'm comfortable working with databases (mainly SQL-based) and wiring frontends to backends. I'm not tied to one language and pick tools based on the problem.</DescriptionLabel>
			<div
				style={{
					marginTop: "12px",
				}}
			>
				<HorizontalLayout>
					<SkillButton icon={"./LanguageIcons/Lua.svg"}>Lua</SkillButton>
					<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
					<SkillButton icon={"./LanguageIcons/Rust.svg"}>Rust</SkillButton>
					<SkillButton icon={"./LanguageIcons/CSharp.svg"}>C#</SkillButton>
					<SkillButton icon={"./LanguageIcons/TypeScript.svg"}>TypeScript</SkillButton>
					<SkillButton icon={"./LanguageIcons/Three.js.svg"}>ThreeJS</SkillButton>
					<SkillButton icon={"./BrandImages/Blender.svg"}>Blender</SkillButton>
					<SkillButton icon={"./BrandImages/Figma.svg"}>Figma</SkillButton>
				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.132, 0.434, 1.231]}
		>
			<TitleLabel>COMMUNICATION</TitleLabel>
			<DescriptionLabel>I'm fluent in English and Polish, and I'm used to working with people remotely. I care about being clear when discussing ideas, limitations, or tradeoffs, especially when working with designers or other developers.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			position={[0, 0.434, 2.462]}
		>
			<TitleLabel>WHAT I LOOK FOR</TitleLabel>
			<DescriptionLabel>I'm open to commissions, contract work, or longer-term projects, especially ones that involve systems, tools, or UI-heavy work.</DescriptionLabel>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[1.231, 0.434, -2.132]}
			title="BACK"
			description="Back to the main menu"
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Back to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default AboutMeFloatPanels;