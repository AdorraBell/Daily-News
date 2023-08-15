import classNames from 'classnames';
import cls from './ThemeSwitcher.module.css';
import { useTheme } from "theme/useTheme";
import { useEffect, useMemo } from 'react';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  const isLight = theme === 'light';

  return (
    <div 
      className={classNames(cls.ThemeSwitcher, className)}
      onClick={toggleTheme}>
      <button
        className={classNames(cls.circle, isLight ? cls.lightThemeCircle : cls.darkThemeCurcle)}
          />
    </div>
  );
}