import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from './styles.module.scss';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === 'dark' ? true : false);
  
  const handleToggle = () => {
    setChecked(!checked);
    setTheme(checked ? 'light' : 'dark');
  }
  
  useEffect(() => {
    if (theme === 'dark') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitcher;
