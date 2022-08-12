import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useErrorsContext } from '../../../context/ErrorsContext';
import * as uploadService from '../../../servces/uploadService';

import {imagesType} from '../../../utils/validation/validation';
import ErrorMessage from '../../Common/Error-message/ErrorMessage';
import Loader from '../../Common/Loader/Loader';

import styles from './ImageHeader.module.css';

const ImageHeader = () => {
    const {addErrors} = useErrorsContext;
    const {user, changePhoto, logout} = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeAvatar = (e) => {
        const newImage = e.target.files[0];

        const error = imagesType('avatar', newImage.type);

        if(error){
            setErrors(error);
            return null;
        };

        const reader = new FileReader();
        reader.readAsDataURL(newImage);
        reader.onloadend = () => {
        setLoading(true);
            uploadService.avatar({url: reader.result, mimeType: newImage.type}, user.accessToken)
            .then(result => {
                changePhoto(result);
            })
            .catch ((err) => {
                if(err.status == 401){
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            })
            .finally(() => {
                setLoading(false);
            });
        };
    };

    return (
        <section className={styles.profile}>
            <article className={styles.profile__image}>
                <img src={user?.photo}
                    alt={user?.firstName} />
                <label>
                    <input type="file" onChange={changeAvatar}/>
                    <i className="fas fa-camera fa-2x"></i>
                </label>
            </article>
            {errors.avatar?.length > 0 &&
            <ErrorMessage>{errors.avatar[0]}</ErrorMessage>
            }
            {loading &&
            <Loader type='medium' />
            }
                <p>{user?.firstName}{' '} {user?.lastName} </p>
        </section>
    );
};

export default ImageHeader;