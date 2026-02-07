import styles from "./ListLabel.module.css";

function ListLabel({
	children,
}) {
	return <li className={styles.label}>{children}</li>
}

export default ListLabel;