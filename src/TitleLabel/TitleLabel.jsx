import styles from "./TitleLabel.module.css";

function TitleLabel({
	children,
}) {
	return <h2 className={styles.title}>{children}</h2>
}

export default TitleLabel;