import { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import * as uploadService from '../../../servces/uploadService';

import {imagesType} from '../../../utils/validation/validation';
import Loader from '../../Common/Loader/Loader';

import styles from './ImageHeader.module.css';

const ImageHeader = () => {
    const {user, changePhoto} = useAuthContext();
    const [loading, setLoading] = useState(false);

    const changeAvatar = (e) => {
        setLoading(true);
        const newImage = e.target.files[0];

        const error = imagesType('avatar', newImage.type);

        if(error){
            throw error;
        };

        const reader = new FileReader();
        reader.readAsDataURL(newImage);
        reader.onloadend = () => {
            uploadService.avatar({url: reader.result, mimeType: newImage.type}, user.accessToken)
            .then(result => {
                changePhoto(result);
            })
            .catch ((err) => {

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
                </label>
                    <i className="fas fa-camera fa-2x"></i>
            </article>
            {loading &&
            <Loader type='medium' />
            }
                <p>{user?.firstName}{' '} {user?.lastName} </p>
        </section>
    );
};

export default ImageHeader;