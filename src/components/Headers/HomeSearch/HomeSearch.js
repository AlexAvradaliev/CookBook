import styles from './HomeSearch.module.css';

const HomeSearch = (props) => {

    return (
        <form className={styles.header__search}>
        <h2 className={styles.header__search__text}>Discover the world best recipes &amp; foods</h2>
        <div>
            <i className="fas fa-search"></i>
            <input type="text" className={styles.search} placeholder="What do you want to cook?" />
        </div>
    </form>
    );
};

export default HomeSearch;
