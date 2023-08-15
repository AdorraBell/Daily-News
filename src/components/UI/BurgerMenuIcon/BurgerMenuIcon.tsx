import classNames from 'classnames';
import cls from './BurgerMenuIcon.module.css';

interface BurgerMenuIconProps {
    className?: string
}

export const BurgerMenuIcon = ({className}: BurgerMenuIconProps) => {
  return (
    <div className={classNames(cls.BurgerMenuIcon, className)} >
      <svg aria-hidden="true" viewBox="0 0 16 12" 
        className={cls.BurgerMenuIcon}>
        <rect x="3" y="0" width="20" height="2"></rect>
        <rect x="3" y="5" width="20" height="2"></rect>
        <rect x="3" y="10" width="20" height="2"></rect>
      </svg>
    </div>
  );
}