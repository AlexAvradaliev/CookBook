import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import CreateRecipe from '../../../components/Recipe/Create/CreateRecipe';
import styles from './Create.module.css';

function Create() {
    return (
        <>
            <Header>
                <Nav />
            </Header>

            <Main>
                <ImageHeader />
                <section className={styles.profile__grids}>
                    <AsideMenu />
                    <CreateRecipe />
                </section>
            </Main>
        </>
    )
};

export default Create;