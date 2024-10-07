import styles from './header.module.scss';
import logoSrc from '../../assets/logo.png';
import { ButtonUpdate } from '../button-update';
import { HEADER_BUTTONS } from '../../constants';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt="Hacker News Logo" />
      </div>
      <div className={styles.btnWrapper}>
        {HEADER_BUTTONS.map(btn => (
          <ButtonUpdate text={btn.text} icon={btn.icon} />
        ))}
      </div>
    </header>
  );
};
