import classNames from 'classnames';
import cls from './AppHeader.module.css';
import Link from 'next/link';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { BurgerMenuIcon } from 'components/UI/BurgerMenuIcon/BurgerMenuIcon';

interface AppHeaderProps {
    className?: string
}

export const AppHeader = ({className}: AppHeaderProps) => {

  return (
    <div className={classNames(cls.AppHeader, className)}>
      <div className={classNames(cls.firstLine, cls.line)}>
        <BurgerMenuIcon />
        <h1 className={cls.title}>
          DAILY NEWS
        </h1>
        <ThemeSwitcher />
      </div>
      <div className={classNames(cls.secondLine, cls.line)}>
        <Link 
          href='/news'
          className={cls.link}>
          News
        </Link>
        <Link 
          href='/world'
          className={cls.link}>
          World
        </Link>
        <Link 
          href='/sport'
          className={cls.link}>
          Sport
        </Link>
      </div>
    </div>
  );
}