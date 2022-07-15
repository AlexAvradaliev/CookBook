import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import CommentCard from '../../../components/Comments/New-comments/CommentCard';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import styles from './Comment.module.css';


function Comment() {
    return (
        <>
            <Header>
                <Nav />
            </Header>

            <Main>
                <ImageHeader />

                <section className={styles.profile__grids}>
                    <AsideMenu />

                    <section className={styles.profile__content}>
                        <p className={styles.profile__content__text}>comments</p>
                        <div className={styles.profile__content__container}>

                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />

                        </div>
                    </section>

                </section>
            </Main>
        </>
    )
};

export default Comment;