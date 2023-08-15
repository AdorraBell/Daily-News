import classNames from 'classnames';
import cls from './AppHeader.module.css';
import Link from 'next/link';

interface AppHeaderProps {
    className?: string
}

export const AppHeader = ({className}: AppHeaderProps) => {

  return (
    <div className={classNames(cls.AppHeader, className)}>
      <div className={classNames(cls.firstLine, cls.line)}>
        <h1 className={cls.title}>
          DAILY NEWS
        </h1>
      </div>
      <div className={classNames(cls.secondLine, cls.line)}>
        <Link 
          href='/'
          className={cls.link}>
          News
        </Link>
        <Link 
          href='/'
          className={cls.link}>
          World
        </Link>
        <Link 
          href='/'
          className={cls.link}>
          Sport
        </Link>
      </div>
    </div>
  );
}