import { memo } from 'react';
import styles from './Header.module.css';

const Header = (props) => {

    return (
        <header className={styles.main__header}>
            {props.children}
        </header>
    );
};

export default memo(Header);
