import styles from "./DescriptionLabel.module.css";

function DescriptionLabel({
	children,
}) {
	return <p className={styles.description}>{children}</p>
}

export default DescriptionLabel;