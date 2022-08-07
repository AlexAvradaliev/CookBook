import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import * as recipeService from '../../servces/recipeService';

import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Common/Main/Main';
import RecipeList from '../../components/Recipe/Recipe-list/RecipeList';

import styles from './Search.module.css'

function Search() {
    const navigate = useNavigate();

    const [search] = useSearchParams();
    const typeCategory = search.get('category');
    const category = search.get(typeCategory)
    const name = search.get('name');
    const pageURL = search.get('page');

    const [activeTerm, setActiveTerm] = useState(name || '');
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [termVal, setTermVal] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1)

    const sendCategory = `?${typeCategory}=${category}`;

    const closeHandler = () => {
        setActiveTerm('');
        setTermVal('');
        if (category) {
            navigate(`/search/?name=&category=${typeCategory}&${typeCategory}=${category}&page=1`);
        } else {
            navigate(`/search/?name=&page=1`);
        };
    };

    const hanldeInput = (e) => {
        setActiveTerm(e.target.value);
        setTermVal(e.target.value);
        setShowSearchBox(false)
        if (category) {
            navigate(`/search/?name=${e.target.value}&category=${typeCategory}&${typeCategory}=${category}&page=1`);
        } else {
            navigate(`/search/?name=${e.target.value}&page=1`);
        };
    };

    useEffect(() => {

        if (typeCategory) {
            recipeService.getAll(activeTerm, page, sendCategory)
                .then(result => {
                    setRecipes(result.recipes);
                    setPage(Number(pageURL));
                    setPages(Number(result.pagination.pages));
                    window.scrollTo(0, 0);
                })
        } else {
            recipeService.getAll(activeTerm, page)
                .then(result => {
                    setRecipes(result.recipes);
                    setPage(Number(pageURL));
                    setPages(Number(result.pagination.pages));
                    window.scrollTo(0, 0)
                })

        }
    }, [activeTerm, page, pageURL, sendCategory, typeCategory]);

    const showBox = () => {
        setShowSearchBox(true)
    }

    const closeSearch = () => {
            setShowSearchBox(false);
    }

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>
                <div className={styles.search__page}>

                    {showSearchBox && (
                        <div className={styles.input__box}>
                            <div className={styles.input__box__container}>
                                <input
                                    type='text'
                                    placeholder='Search recipes...'
                                    defaultValue={termVal}
                                    onBlur={hanldeInput}
                                />
                            </div>
                        </div>
                    )}
                    {!showSearchBox && (
                        <div className={styles.search__box}>
                            <i
                                onClick={showBox}
                                className='fas fa-search'
                            ></i>
                        </div>
                    )}

                    {activeTerm && activeTerm.trim() !== "" && (
                        <button onClick={closeHandler} className={`${styles.filter}  ${styles.active}`}>
                            {activeTerm} <i className='fas fa-times'></i>
                        </button>
                    )}
                    <div  className={styles.recipes}>
                        <div onClick={closeSearch}>
                            <RecipeList recipes={recipes} />
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
};

export default Search;