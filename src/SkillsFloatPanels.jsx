import FloatingPanel from "./FloatingPanel/FloatingPanel.jsx";

import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"
import SkillButton from "./SkillButton/SkillButton.jsx";
import HorizontalLayout from "./HorizontalLayout/HorizontalLayout.jsx";

import { useExperiencePath } from "./Contexts/ExperiencePathContext.jsx"

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
			<DescriptionLabel>Luau, Python, and TypeScript are my main languages, though I have experience working in several others.</DescriptionLabel>
			<div
				style={{
					marginTop: "12px",
				}}
			>
				<HorizontalLayout>
					<SkillButton icon={"./LanguageIcons/Lua.svg"}>Lua</SkillButton>
					<SkillButton icon={"./LanguageIcons/Luau.svg"}>Luau</SkillButton>
					<SkillButton icon={"./LanguageIcons/TypeScript.svg"}>TypeScript</SkillButton>
					<SkillButton icon={"./LanguageIcons/Python.svg"}>Python</SkillButton>
					<SkillButton icon={"./LanguageIcons/Rust.svg"}>Rust</SkillButton>
					<SkillButton icon={"./LanguageIcons/CSharp.svg"}>C#</SkillButton>
				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[-0.215, 0.434, -2.453]}
		>
			<TitleLabel>FRAMEWORKS & LIBRARIES</TitleLabel>
			<DescriptionLabel>React and React-Luau are what I use for UI and state-driven systems. Three.js is my go-to for 3D web work.</DescriptionLabel>
			<div
				style={{
					marginTop: "12px",
				}}
			>
				<HorizontalLayout>
					<SkillButton icon={"./LanguageIcons/Three.js.svg"}>ThreeJS</SkillButton>
					<SkillButton icon={"./LanguageIcons/React.svg"}>React-luau</SkillButton>
					<SkillButton icon={"./LanguageIcons/React.svg"}>React</SkillButton>

				</HorizontalLayout>
			</div>
		</FloatingPanel>

		<FloatingPanel
			position={[-2.132, 0.434, -1.231]}
		>
			<TitleLabel>TOOLS & SOFTWARE</TitleLabel>
			<DescriptionLabel>VSC for development, Blender for 3D work, Figma for UI and icons, GitHub for version control, and Supabase for databases.</DescriptionLabel>
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
		>
			<TitleLabel>BACK</TitleLabel>
			<DescriptionLabel>Return to the main menu</DescriptionLabel>
		</FloatingPanel>
	</>
}

export default SkillsFloatPanels;