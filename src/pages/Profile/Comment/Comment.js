import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useErrorsContext } from '../../../context/ErrorsContext';
import * as commentService from '../../../servces/commentService';

import AsideMenu from '../../../components/Aside-menu/AsideMenu';
import CommentCard from '../../../components/Comments/New-comments/CommentCard';
import Main from '../../../components/Common/Main/Main';
import Header from '../../../components/Headers/Header/Header';
import Nav from '../../../components/Nav/Nav';
import ImageHeader from '../../../components/Profile/ImageHeader/ImageHeader';
import NoData from '../../../components/Common/No-data/NoData';
import SkeletonComment from '../../../components/Common/skeletons/SkeletonComment/SkeletonComment';
import styles from './Comment.module.css';
import Meta from '../../../components/Common/Meta/Meta';


function Comment() {

    const { user, logout } = useAuthContext();
    const { addErrors } = useErrorsContext();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        commentService.getAllOwner(user.accessToken)
            .then(result => {
                setComments(result);
                setLoading(false);
            })
            .catch((err) => {
                if (err.status === 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            });
    }, [user, addErrors, logout, navigate]);

    const skeletonArr = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Meta
                title={`Cook Book | ${user && user.firstName} ${user && user.lastName
                    }`}
            />
            <Header>
                <Nav />
            </Header>

            <Main>
                <ImageHeader />

                <section className={styles.profile__grids}>
                    <AsideMenu />

                    <section className={styles.profile__content}>
                        <p className={styles.profile__content__text}>comments</p>

                        {loading
                            ? <div className={styles.wrapper}>
                                {skeletonArr.map((i) => (
                                    <SkeletonComment key={i} />
                                ))}
                            </div>

                            : <>
                                {comments.length > 0

                                    ? <div className={styles.profile__content__container}>
                                        {comments.map((comment) =>
                                            <CommentCard comment={comment} key={comment._id} />
                                        )}
                                    </div>
                                    : <NoData active={'noComments'} />
                                }
                            </>
                        }


                    </section>

                </section>
            </Main>
        </>
    )
};

export default Comment;