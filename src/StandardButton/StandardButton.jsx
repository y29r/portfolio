import styles from "./StandardButton.module.css"

function StandardButton({
	onClick,
	className = "",
	children,
}) {
	return <button
		className={styles.button.concat(" ", className)}
		onClick={onClick}
	>
		{children}
	</button>
}

export default StandardButton;