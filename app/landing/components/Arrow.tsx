export const Arrow = ({ color = "white" }) => {
	return (
		<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.25 7.5L9 11.25L12.75 7.5"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
