import styles from "./HyperlinkLabel.module.css";

function HyperlinkLabel({
	children,
}) {
	return <p className={styles.label}>{children}</p>
}

export default HyperlinkLabel;