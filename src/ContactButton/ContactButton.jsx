import styles from "./ContactButton.module.css"

function ContactButton({
	onClick,
	image,
	children,
}) {
	return <img
		src={image}
		className={styles.button}
		onClick={onClick}
		draggable="false"
	>
		{children}
	</img>
}

export default ContactButton;