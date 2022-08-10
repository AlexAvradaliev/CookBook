import styles from './Loader.module.css';

const Loader = ({ type }) => {

	return <div className={`${styles.loader} ${styles[type]}`}></div>
}

export default Loader;
