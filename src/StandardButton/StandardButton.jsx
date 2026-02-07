import styles from "./StandardButton.module.css"

function StandardButton({
	onClick,
	text,
	children,
}) {
	return <button
		className={styles.button}
		onClick={onClick}
	>
		{text}
		{children}
	</button>
}

export default StandardButton;