import styles from './RecipeImages.module.css';

const RecipeImages = (props) => {

    return (
        <fieldset>
            <p className={styles.add__image__p}>Add images</p>
            <label className={styles.custom__file__upload}>
                <input type="file" />
                <i className="fa fa-images"></i>
                Import
            </label>
            <section className={styles.create__images}>
            <div  className='create__image'>
              <img src="" alt="" />
              <i className='fas fa-times'></i>
            </div>
            </section>
        </fieldset>
    );
};

export default RecipeImages;
