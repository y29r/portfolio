import styles from "./SkillButton.module.css";

function SkillButton({
	icon,
	children,
}) {
	return <p className={styles.button}>
		{icon ? <img src={icon} className={styles.icon}></img> : undefined}
		{children}
	</p>
}

export default SkillButton;