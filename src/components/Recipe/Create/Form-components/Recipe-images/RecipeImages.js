import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../../../context/AuthContext';
import { useRecipeContext } from '../../context/recipeFormContext';
import * as uploadService from '../../../../../servces/uploadService';

import newFile from './assets/newFile.png'

import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import Loader from '../../../../Common/Loader/Loader';
import styles from './RecipeImages.module.css';
import { useErrorsContext } from '../../../../../context/ErrorsContext';

const RecipeImages = () => {

    const {
        errors,
        previewImage,
        recipe,
        changeRecipe,
        changePreviewImage,
        removePreviewImage,
        checkMimeType,
    } = useRecipeContext();

    const { recipeId } = useParams();
    const { user, logout } = useAuthContext();
    const {addErrors} = useErrorsContext();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const addImage = (e) => {
        setLoading(true);
        const newImage = e.target.files[0];
        if (!checkMimeType('images', newImage.type)) {
            const reader = new FileReader();
            reader.readAsDataURL(newImage);
            reader.onloadend = () => {

                changePreviewImage({ url: reader.result, mimeType: newImage.type });
            };
        };
        setLoading(false);
    };

    const deletePreviewImage = (e) => {
        setLoading(true);
        const id = e.target.id;
        const filtred = previewImage.filter(x => x.url !== id);
        removePreviewImage(filtred);
        setLoading(false);
    };

    const deleteImage = (e) => {
        setLoading(true);
        const id = e.target.id;
        const image = recipe.images.filter(x => x.url === id);
        uploadService.removeImage({ id: image[0].id, url: image[0].url }, recipeId, user.accessToken)
            .then(() => {
                const filtred = recipe.images.filter(x => x.url !== id);
                changeRecipe('images', filtred);
                setLoading(false);
            })
            .catch((err) => {
                if(err.status === 401){
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            })
            .finally(() => {
                setLoading(false);
            })

    };

    return (
        <fieldset>
            <p className={styles.add__image__p}>Add images</p>
            {loading &&
            <Loader />
            }
            <label className={styles.custom__file__upload}>
                <input type="file" onChange={addImage} />
                <i className="fa fa-images"></i>
                Import
            </label>

            {errors.images &&
                <ErrorMessage >{errors.images[0]}</ErrorMessage>
            }

            {previewImage &&
                < section className={styles.create__images}>
                    {previewImage.map((img, i) =>

                        <div key={img.url} className={styles.create__image} >
                            <img src={newFile} alt='' className={styles.logo} />
                            <img src={img.url} alt="" className={styles.image} />
                            <i className='fas fa-times' onClick={deletePreviewImage} id={img.url}></i>
                        </div>
                    )}
                </section>
            }

            {recipe.images &&
                 < section className={styles.create__images}>
                    {recipe.images.map((img) =>

                        <div key={img.id} className={styles.create__image} >
                            <img src={img.url} alt='' className={styles.image} />
                            <i className='fas fa-times' onClick={deleteImage} id={img.url}></i>
                        </div>
                    )}

                </section>
            }
            
        </fieldset >
    );
};

export default RecipeImages;
