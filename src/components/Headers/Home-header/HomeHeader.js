import styles from './HomeHeader.module.css';

const HomeHeader = (props) => {

    return (
        <header className={styles.header} id="header">
            <div className={styles.container}>
                {props.children}
            </div>
        </header>
    );
};

export default HomeHeader;
