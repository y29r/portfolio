import styles from "./HorizontalLayout.module.css";

function HorizontalLayout({
	children,
}) {
	return <div className={styles.list}>
		{children}
	</div>
}

export default HorizontalLayout;