import styles from "./SubtitleLabel.module.css";

function SubtitleLabel({
	children,
}) {
	return <h3 className={styles.label}>{children}</h3>
}

export default SubtitleLabel;