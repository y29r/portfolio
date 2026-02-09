import styles from "./TitleLabel.module.css";

function TitleLabel({
	className = "",
	children,
}) {
	return <h2 className={styles.title.concat(" ", className)}>{children}</h2>
}

export default TitleLabel;