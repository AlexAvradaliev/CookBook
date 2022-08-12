import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeSearch.module.css';

const HomeSearch = () => {

    const navigate = useNavigate();
    const [term, setTerm] = useState('');
    const searchHandler = (e) => {
        e.preventDefault()

        if (term.trim()) {
            navigate(`/search/?name=${term}&page=1`)
        } else {
            navigate('/')
        }

    };
    const onChangeSearch = (e) => setTerm(e.target.value)

        return (
            <form className={styles.header__search} onSubmit={searchHandler}>
                <h2
                    className={styles.header__search__text}>
                    Discover the world best recipes &amp; foods
                </h2>
                <div>
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        name="search"
                        className={styles.search}
                        placeholder="What do you want to cook?"
                        value={term}
                        onChange={onChangeSearch}
                    />
                </div>
            </form>
        );
    };

    export default HomeSearch;
