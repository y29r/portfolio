import TitleLabel from "../TitleLabel/TitleLabel.jsx";
import DescriptionLabel from "../DescriptionLabel/DescriptionLabel.jsx"
import SkillButton from "../SkillButton/SkillButton.jsx";
import HorizontalLayout from "../HorizontalLayout/HorizontalLayout.jsx";
import StandardButton from "../StandardButton/StandardButton.jsx";

import { useStartScreenContext } from "../Contexts/StartScreenContext.jsx";

import styles from "./StartScreen.module.css";

function StartScreen() {
	const { opened, setOpened } = useStartScreenContext();

	return <div className={styles.modal.concat(opened ? "" : ` ${styles.staticHidden}`)}>
		<div className={styles.glow.concat(opened ? "" : ` ${styles.hidden}`)}>

		</div>
		<div className={styles.layout.concat(opened ? "" : ` ${styles.hidden}`)}>
			<TitleLabel className={styles.title.concat(opened ? "" : ` ${styles.hidden}`)}>Hi, I'm Xav 👋</TitleLabel>
			<DescriptionLabel className={styles.description.concat(opened ? "" : ` ${styles.hidden}`)}>
				<b>Left click</b> + <b>drag</b> to orbit around my portfolio
			</DescriptionLabel>


			<div className={styles.mouseBackground.concat(opened ? "" : ` ${styles.hidden}`)}>
				<div className={styles.mouseLine}></div>
				<div className={styles.mouseContainer}>
					<img draggable={false} src="/StartScreenIcons/MouseLeftButton.svg" className={styles.mouseLeftButtonClickedIcon}></img>
					<img draggable={false} src="/StartScreenIcons/MouseUnclicked.svg" className={styles.mouseUnclickedIcon}></img>
				</div>
			</div>

			<StandardButton
				className={styles.button.concat(opened ? "" : ` ${styles.hidden}`)}
				onClick={() => setOpened(false)}
			>
				START
			</StandardButton>

		</div>
	</div >
}

export default StartScreen;