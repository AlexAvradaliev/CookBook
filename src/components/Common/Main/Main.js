import styles from './Main.module.css';


const Main = (props) => {

    return (
        <main className={styles.container}>
            {props.children}
        </main>
    );
};

export default Main;
