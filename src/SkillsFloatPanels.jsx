import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";

import { useExperiencePath } from "./ExperiencePathContext.jsx"

function SkillsFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== "skills") {
		return;
	}

	return <>
		<FloatingPanel
			position={[1.886, 0.434, -1.583]}
		>
			<TitleLabel>LANGUAGES</TitleLabel>
			<DescriptionLabel>I've spent most of my time working in Luau and JavaScript, using them daily for game logic, tools, and interfaces. I'm also comfortable reading and working in other languages when needed.</DescriptionLabel>
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
				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[-0.215, 0.434, -2.453]}
		>
			<TitleLabel>FRAMEWORKS & LIBRARIES</TitleLabel>
			<DescriptionLabel>I have extensive experience with React and React-Luau, including state management, component structure, and reconciliation-style UIs. I've also worked with older Roact-based setups.</DescriptionLabel>
			<div
				style={{
					marginTop: "12px",
				}}
			>
				<HorizontalLayout>
					<SkillButton icon={"./LanguageIcons/Three.js.svg"}>ThreeJS</SkillButton>
					<SkillButton icon={"./LanguageIcons/React.svg"}>React</SkillButton>
					<SkillButton icon={"./LanguageIcons/React.svg"}>React-luau</SkillButton>
				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.132, 0.434, -1.231]}
		>
			<TitleLabel>TOOLS & SOFTWARE</TitleLabel>
			<DescriptionLabel>I regularly use VS Code for development and Blender for 3D work, with over 3,000 hours logged across modeling and environment support for projects.</DescriptionLabel>
			<div
				style={{
					marginTop: "12px",
				}}
			>
				<HorizontalLayout>
					<SkillButton icon={"./BrandImages/Figma.svg"}>Figma</SkillButton>
					<SkillButton icon={"./BrandImages/VisualStudioCode.svg"}>VSC</SkillButton>
					<SkillButton icon={"./BrandImages/Blender.svg"}>Blender</SkillButton>
					<SkillButton icon={"./BrandImages/Supabase.svg"}>Supabase</SkillButton>


				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath(null)}
			position={[2.425, 0.434, 0.428]}
			title="BACK"
			description="Back to the main menu"
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Back to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default SkillsFloatPanels;