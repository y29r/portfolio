import styles from "./DateLabel.module.css";

function DateLabel({
	start = "2025",
	end = "2026",
	children,
}) {
	return <p className={styles.label}>
		{start} &mdash; {end}
		{children}
	</p>
}

export default DateLabel;