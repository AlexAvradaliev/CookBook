import Cuisines from '../../components/Common/Cuisines/Cuisines';
import Groups from '../../components/Common/Groups/Groups';
import Main from '../../components/Common/Main/Main';
import HomeHeader from '../../components/Headers/Home-header/HomeHeader';
import HomeSearch from '../../components/Headers/Home-search/HomeSearch';
import Nav from '../../components/Nav/Nav';
import RecipeList from '../../components/Recipe/Recipe-list/RecipeList';
import styles from './Home.module.css';


const Home = () => {

    return (
        <>
            <HomeHeader>
                <Nav homeStyles={true} />
                <HomeSearch />
            </HomeHeader>
            <Main>
                <Cuisines />
                <Groups />
                <section className={styles.recipes} id="recipes">
                    <h1 className={styles.recipes__text}>Latest recipes</h1>
                    <div>
                        <RecipeList />
                        <section className={styles.see__more}>
                            <a className={`${styles.btn__lg} ${styles.btn__info}`} href="#">See more</a>
                        </section>
                    </div>
                </section>
            </Main>
        </>
    );
};

export default Home;
