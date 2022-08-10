import styles from './Skeleton.module.css'; 

const Skeleton = ({ type }) => {
	const classType = `skeleton__${type}`
	const classes = `${styles.skeleton} ${styles[classType]}`

	return <div className={classes}></div>
};

export default Skeleton;
