import FloatingPanel from './FloatingPanel/FloatingPanel.jsx';
import StandardButton from "./StandardButton/StandardButton.jsx"

import TitleLabel from "./TitleLabel/TitleLabel.jsx";
import ContactButton from "./ContactButton/ContactButton.jsx";
import DescriptionLabel from "./DescriptionLabel/DescriptionLabel.jsx"

import { useExperiencePath } from "./ExperiencePathContext.jsx"

function PrimaryFloatPanels() {
	const { experiencePath, setExperiencePath } = useExperiencePath();
	if (experiencePath !== null) {
		return;
	}

	return <>
		<FloatingPanel
			onClick={() => setExperiencePath("about me")}
			position={[1.231, 0.434, -2.132]}
		>
			<TitleLabel>ABOUT ME</TitleLabel>
			<DescriptionLabel>18-year-old self-taught fullstack and game programmer based in London, focused on building creative, system-driven experiences.</DescriptionLabel>
			<StandardButton
				text="SEE MORE"
				onClick={() => setExperiencePath("about me")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("experience")}
			position={[-1.552, 0.647, -1.85]}
		>
			<TitleLabel>EXPERIENCE</TitleLabel>
			<DescriptionLabel>Over six years building games and applications, with deep experience in HTML and React-style reconciliation frameworks and commissions for top Roblox developers.</DescriptionLabel>
			<StandardButton
				text="SEE MORE"
				onClick={() => setExperiencePath("experience")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("skills")}
			position={[2.425, 0.434, 0.428]}
		>
			<TitleLabel>SKILLS</TitleLabel>
			<DescriptionLabel>Five years of Luau experience alongside React, React-Luau, JavaScript, SQL databases, 3,000+ hours in Blender, and extensive UI development work.</DescriptionLabel>
			<StandardButton
				text="SEE MORE"
				onClick={() => setExperiencePath("skills")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("projects")}
			position={[-2.257, -0.218, 1.053]}
		>
			<TitleLabel>PROJECTS</TitleLabel>
			<DescriptionLabel>A collection of system-heavy projects including 3D websites, catalog API tooling with rotating proxies, and open-source work available on GitHub.</DescriptionLabel>
			<StandardButton
				text="SEE MORE"
				onClick={() => setExperiencePath("projects")}
			/>
		</FloatingPanel>

		<FloatingPanel
			position={[0.432, -0.218, 2.453]}
		>
			<TitleLabel>CONTACT</TitleLabel>
			<DescriptionLabel>Let's connect. Open to discussing new opportunities and interesting projects.</DescriptionLabel>
			<div
				style={{
					margin: "none",
					marginTop: "12px",
					display: "flex",
					justifyContent: "left",
				}}
			>
				<ContactButton
					onClick={() => window.open("https://x.com/real_y29r")}
					image={"./BrandImages/X.svg"}
				/>
				<ContactButton
					onClick={() => window.open("https://www.github.com")}
					image={"./BrandImages/Github.svg"}
				/>
				<ContactButton
					onClick={() => window.open("https://discord.com/users/1160614251090690068")}
					image={"./BrandImages/Discord.svg"}
				/>
				<ContactButton
					onClick={() => {
						const gmail = 'https://mail.google.com/mail/?view=cm&to=y29r.development@gmail.com';
						const mailto = 'mailto:y29r.development@gmail.com';

						window.open(gmail, '_blank') || (window.location.href = mailto);
					}}
					image={"./BrandImages/Gmail.svg"}
				/>
			</div>

		</FloatingPanel>
	</>
}

export default PrimaryFloatPanels;