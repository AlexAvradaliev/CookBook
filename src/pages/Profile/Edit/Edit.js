import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import Edit from '../../../components/Profile/Edit/Edit';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import styles from './Edit.module.css';

function EditProfile() {
    return (
        <>
            <Header>
                <Nav />
            </Header>

            <Main>
                <ImageHeader />
                <section className={styles.profile__grids}>
                    <AsideMenu />
                    <Edit />
                </section>
            </Main>
        </>
    )
};

export default EditProfile;