import { useTheme } from 'next-themes';
import styles from './header.module.scss';

export const Header = () => {
	const { theme, setTheme } = useTheme();

	const themes = [
		{ value: 'system', checked: theme === 'system' },
		{ value: 'light', checked: theme === 'light' },
		{ value: 'dark', checked: theme === 'dark' },
	];

	return (
		<div className={styles.header}>
			<div className={styles.header_title}>気ままにBlog</div>
			<div className={styles.header_setting}>
				<label htmlFor="select_theme">theme </label>
				<select
					id="select_theme"
					className={styles.select_theme}
					onChange={(e) => setTheme(e.target.value)}
				>
					{themes.map((theme) => {
						return (
							<option key={theme.value} {...theme}>
								{theme.value}
							</option>
						);
					})}
				</select>
				{/* <div className={styles.switchArea}>
					<input type="checkbox" id="switch1" value={checked} />
					<label htmlFor="switch1">
						<span></span>
					</label>
					<div id="swImg"></div>
				</div> */}
			</div>
		</div>
	);
};
