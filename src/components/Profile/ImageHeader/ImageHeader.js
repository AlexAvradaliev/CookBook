import { useAuthContext } from '../../../context/AuthContext';
import * as uploadService from '../../../servces/uploadService';

import {imagesType} from '../../../utils/validation/validation';

import styles from './ImageHeader.module.css';

const ImageHeader = () => {
    const {user, changePhoto} = useAuthContext();

    const changeAvatar = (e) => {
        const newImage = e.target.files[0];

        const error = imagesType('avatar', newImage.type);

        if(error){
            throw error;
        };

        const reader = new FileReader();
        reader.readAsDataURL(newImage);
        reader.onloadend = () => {
            console.log({url: reader.result, mimeType: newImage.type})
            uploadService.avatar({url: reader.result, mimeType: newImage.type}, user.accessToken)
            .then(result => {
                changePhoto(result)
            })
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
                <p>{user?.firstName}{' '} {user?.lastName} </p>
        </section>
    );
};

export default ImageHeader;