import styles from "./DescriptionLabel.module.css";

function DescriptionLabel({
	className = "",
	children,
}) {
	return <p className={styles.description.concat(" ", className)}>{children}</p>
}

export default DescriptionLabel;