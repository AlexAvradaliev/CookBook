import bin from './assets/images/bin.png';
import styles from './ConfirmModal.module.css';

const ConfirmModal = ({
  remove,
  text,
}) => {

    return (
    <>
        <div className={styles.modal}>
        <section className={styles.modal__content} >
          <header className={styles.modal__header}>
            <div className={styles.modal__header__container}>
              <img src={bin} alt="bin" />
              <h5 >{`Delete the ${text}?`}</h5>
            </div>
            <button className={styles.modal__close}>
              <span onClick={() => remove(false)}>×</span>
            </button>
          </header>
          <section className={styles.modal__body}>
            <p>{`If you delete the ${text} will be gone forever. Are you sure you want to proceed?`}</p>
          </section>
          <footer className={styles.modal__footer}>
            <button onClick={() => remove(false)} className={`${styles.btn} ${styles.btn__light}`}>Cancel</button>
            <button onClick={() => remove(true)} className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
          </footer>
        </section>
        <section className={styles.modal__backdrop}></section>
    </div>
    </>
    );
};

export default ConfirmModal;
