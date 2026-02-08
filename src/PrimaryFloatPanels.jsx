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
			onClick={() => setExperiencePath("experience")}
			position={[-1.552, 0.647, -1.85]}
		>
			<TitleLabel>EXPERIENCE</TitleLabel>
			<DescriptionLabel>Worked on a handful of commissioned game projects and participated in multiple team-based game jams.</DescriptionLabel>
			<StandardButton
				text="SEE EXPERIENCE"
				onClick={() => setExperiencePath("experience")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("about me")}
			position={[1.231, 0.434, -2.132]}
		>
			<TitleLabel>ABOUT ME</TitleLabel>
			<DescriptionLabel>18/y old full&mdash;stack programmer based in London, focused on building games and the systems behind them.</DescriptionLabel>
			<StandardButton
				text="READ MORE"
				onClick={() => setExperiencePath("about me")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("skills")}
			position={[2.425, 0.434, 0.428]}
		>
			<TitleLabel>SKILLS</TitleLabel>
			<DescriptionLabel>Years of hands-on experience across programming languages, UI frameworks, and 3D tools.</DescriptionLabel>
			<StandardButton
				text="SEE STACK & MORE"
				onClick={() => setExperiencePath("skills")}
			/>
		</FloatingPanel>

		<FloatingPanel
			onClick={() => setExperiencePath("projects")}
			position={[-2.257, -0.218, 1.053]}
		>
			<TitleLabel>PROJECTS</TitleLabel>
			<DescriptionLabel>Hundreds of personal and team projects built over six years, ranging from small modules to large system-heavy builds.</DescriptionLabel>
			<StandardButton
				text="SEE SOME"
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