import styles from './ErrorMessage.module.css'

function ErrorMessage(props) {
  return (
    <p className={styles.error}>*{props.children}</p>
  );
};

export default ErrorMessage;