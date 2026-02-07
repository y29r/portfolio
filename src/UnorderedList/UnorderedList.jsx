import styles from "./UnorderedList.module.css";

function UnorderedList({
	children,
}) {
	return <ul className={styles.list}>{children}</ul>
}

export default UnorderedList;