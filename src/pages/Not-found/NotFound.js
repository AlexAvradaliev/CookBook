import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/Headers/Header/Header';
import Nav from '../../components/Nav/Nav';
import { useErrorsContext } from '../../context/ErrorsContext';
import styles from './NotFound.module.css';

const NotFound = () => {
    const { errors, addErrors } = useErrorsContext();
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate('/');
        addErrors(null)
    };
    let errorMsg = []
   
    if (errors) {
        errorMsg = Object.values(errors);
    }

    return (
        <>
            <Header>
                <Nav />
            </Header>

            <div className={styles.not__found}>
                <img src="https://res.cloudinary.com/dbsz8lxsm/image/upload/v1656256155/static/sad_thmfto.png" alt="icon" />

                <h1>404 PAGE NOT FOUND!</h1>
                {errors
                    ? errorMsg.map(x => <p key={x}>{x}. Sorry about that.</p>)
                    : <p>This page isn't available. Sorry about that.</p>

                }
                <Link className={`${styles.btn} ${styles.btn__primary}`} to="/">
                    Home
                </Link>
            </div>
        </>
    )
};

export default NotFound;