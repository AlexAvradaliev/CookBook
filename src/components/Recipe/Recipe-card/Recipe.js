import { useState, useEffect, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ConfirmModal from '../../Common/Confirm-modal/ConfirmModal';

import styles from './Recipe.module.css';

const Recipe = ({
    recipeInfo,
    deleteHandler
}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [showButtons, setShowButtons] = useState(false);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        if (location.pathname.includes('profile')) {
            setShowButtons(true);
        };
    }, [location]);

    const onClickUpdate = () => {
        navigate(`/recipe/${recipeInfo._id}/edit`)
    };

    const remove = (choise) => {
        if (choise) {
            deleteHandler(recipeInfo._id);
            setOpen(false);
        } else {
            setOpen(false);
        };
    };

    const onClickDelete = () => {
        setOpen(true);
    };

    return (
        <>
            {open &&
                <ConfirmModal remove={remove} text='recipe'/>
            }
            <article className={styles.recipe}>
                <Link to={`/recipe/${recipeInfo._id}`}>
                    <img
                        className={styles.recipe__image}
                        src={recipeInfo?.images[0]?.url}
                        alt={recipeInfo?.title}
                    />
                    <p className={styles.recipe__name}>{recipeInfo?.title} </p>
                    <div className={styles.recipe__owner}>
                        <img
                            src={recipeInfo._ownerId?.photo}
                            alt={recipeInfo._ownerId?.firstName}
                        />
                        <p>
                            {recipeInfo._ownerId?.firstName}{' '}
                            {recipeInfo._ownerId?.lastName}
                        </p>
                    </div>
                </Link>

                {showButtons && (
                    <>
                        <button onClick={onClickUpdate} className={`${styles.btn} ${styles.btn__info}`}>Update</button>
                        <button onClick={onClickDelete} className={`${styles.btn} ${styles.btn__danger}`}>Delete</button>
                    </>
                )}

            </article>
        </>
    );
};

export default memo(Recipe);
