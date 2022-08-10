import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import * as recipeService from '../../servces/recipeService';

import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Common/Main/Main';
import RecipeList from '../../components/Recipe/Recipe-list/RecipeList';
import Paginate from '../../components/Paginate/Paginate';
import NoData from '../../components/Common/No-data/NoData';
import SkeletonRecipe from '../../components/Common/skeletons/SkeletonRecipe/SkeletonRecipe';
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
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

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
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                })
        } else {
            recipeService.getAll(activeTerm, page)
                .then(result => {
                    setRecipes(result.recipes);
                    setPage(Number(pageURL));
                    setPages(Number(result.pagination.pages));
                    window.scrollTo(0, 0);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                })
        }
    }, [activeTerm, page, pageURL, sendCategory, typeCategory]);

    const showBox = () => {
        setShowSearchBox(true)
    };

    const closeSearch = () => {
        setShowSearchBox(false);
    };

    const skeletonArr =[1,2,3,4,5,6,7,8]
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
                                    autoFocus
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
                    <div onClick={closeSearch} className={styles.recipes}>
                        {loading
                        ?<div className={styles.wrapper}>
                        {skeletonArr.map((i) => (
                            <SkeletonRecipe key={i} />
                        ))}
                    </div>
                    : <>
                            {recipes.length > 0
                                ? (<div><RecipeList recipes={recipes} /></div>)
                                : <NoData active={'noFind'} />
                            }
                            </>
                        }
                    </div>
                    <Paginate
                        pages={pages}
                        page={page}
                        term={activeTerm}
                        category={category}
                        typeCategory={typeCategory}
                    />
                </div>
            </Main>
        </>
    );
};

export default Search;