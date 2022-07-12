import styles from './ConfirmModal.module.css';
import bin from './assets/images/bin.png'

const ConfirmModal = () => {

    return (
        <modal className={styles.modal}>
        <section className={styles.modal__content}>
          <header className={styles.modal__header}>
            <div className={styles.modal__header__container}>
              <img src={bin} />
              <h5 >Delete the recipe?</h5>
            </div>
            <button className={styles.modal__close}>
              <span>×</span>
            </button>
          </header>
          <section className={styles.modal__body}>
            <p>If you delete the recipe will be gone forever. Are you sure you want to proceed?</p>
          </section>
          <footer className={styles.modal__footer}>
            <button className={`${styles.btn} ${styles.btn__light}`}>Cancel</button>
            <button className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
          </footer>
        </section>
        <section className={styles.modal__backdrop}></section>
    </modal>
    );
};

export default ConfirmModal;
