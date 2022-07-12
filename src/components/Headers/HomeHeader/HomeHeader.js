import styles from './HomeHeader.module.css';

const HomeHeader = (props) => {

    return (
        <header className={styles.header} id="header">
            {props.children}
        </header>
    );
};

export default HomeHeader;
