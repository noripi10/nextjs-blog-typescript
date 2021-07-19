import styles from '../styles/header.module.scss'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const onChangeTheme = () => {
    const changTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(changTheme)
  }

  return (
    <div className={styles.themeButton}>
      <div id='themeToggle' onClick={onChangeTheme}>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faMoon} color='#2c2c2c' className={styles.themeIcon} />
        ) : (
          <FontAwesomeIcon icon={faSun} color='#fff' className={styles.themeIcon} />
        )}
      </div>
    </div>
  )
}
