import { useRecipeContext } from '../../context/recipeFormContext';

import newFile from './assets/newFile.png'
 
import ErrorMessage from '../../../../Common/Error-message/ErrorMessage';
import styles from './RecipeImages.module.css';

const RecipeImages = () => {

    const {
        errors,
        previewImage,
        recipe,
        changeRecipe,
        checkData,
        changePreviewImage,
        removePreviewImage,
        checkMimeType,
    } = useRecipeContext();

    
    const addImage = (e) => {
        const newImage = e.target.files[0];
        if(!checkMimeType('images', newImage.type)){
            const reader = new FileReader();
            reader.readAsDataURL(newImage);
            reader.onloadend = () => {
                
                changePreviewImage({url: reader.result, mimeType: newImage.type});
            };
        };
    };

    const removeImage = (e) => {
        const id = e.target.id;
        const filtred = previewImage.filter(x => x.url != id);
        removePreviewImage(filtred);
    };

    return (
        <fieldset>
            <p className={styles.add__image__p}>Add images</p>
            <label className={styles.custom__file__upload}>
                <input type="file" onChange={addImage} />
                <i className="fa fa-images"></i>
                Import
            </label>

            {errors.images &&
            <ErrorMessage >{errors.images[0]}</ErrorMessage>
        }
                
            <section className={styles.create__images}>
                    {previewImage.map((img, i) =>
                    (
                        <div key={img.url} className={styles.create__image} >
                            <img src={newFile} className={styles.logo}/>
                            <img src={img.url} alt="" className={styles.image}  />
                            <i className='fas fa-times' onClick={removeImage} id={img.url}></i>
                            </div>
                    ))}
            </section>
        </fieldset>
    );
};

export default RecipeImages;
