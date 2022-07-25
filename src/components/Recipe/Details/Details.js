import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as recipeService from '../../../servces/recipeService';

import styles from './Details.module.css';

const Details = () => {

    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState({});
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        recipeService.getOneById(recipeId)
            .then(result => {
                setRecipe(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [recipeId]);
    
    return (
        <>
            <section className={styles.recipe__details__generic}>
                <article>
                    <header>
                        <h1 className={styles.recipe__details__generic__text}>{recipe?.name}</h1>
                        <div className={styles.recipe__details__generic__rating}>
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>(1) </span>
                        </div>
                    </header>
                    <section className={styles.recipe__details__generic__owner}>
                        <img
                            src={recipe._ownerId?.photo}
                            alt={recipe._ownerId?.firstName}
                        />
                        <p>{recipe._ownerId?.firstName} {' '} {recipe._ownerId?.lastName}</p>
                    </section>
                    <section className={styles.recipe__details__generic__badge}>

                        <figure className={`${styles.badge} ${styles.badge__info}`}>
                            <p>{recipe?.cuisine}</p>
                        </figure>

                        {recipe.groups?.map((gr) => (
                            <figure key={gr} className={`${styles.badge} ${styles.badge__info}`}>
                                <p>{gr}</p>
                            </figure>
                        ))}

                    </section>
                    <section className={styles.recipe__details__generic__information}>
                        <div>
                            <h2>{recipe?.ingredients && recipe?.ingredients.length}</h2> 
                            <p>Ingredients</p>
                        </div>
                        <div>
                            <h2>{recipe?.prepTime}</h2>
                            <p>Minutes to prepare</p>
                        </div>
                        <div>
                            <h2>{recipe?.cookTime}</h2>
                            <p>Minutes to cook</p>
                        </div>
                    </section>
                </article>
                <article className={styles.recipe__details__generic__images}>
                    <div className={styles.recipe__details__generic__images__active}>
                        <img 
                        src={recipe.images && recipe.images[activeImage]}
                        alt={recipe.name} 
                            />
                    </div>
                    <div className={styles.recipe__details__generic__images__select}>

                    {recipe.images &&
                    recipe.images.map((image, index) => (
                      <img
                        alt={recipe?.name}
                        key={index}
                        onClick={() => setActiveImage(index)}
                        src={image}
                      />
                    ))}

                     </div>
                </article>
            </section>
            <section className={styles.recipe__details__depth}>
                <h2 className={styles.recipe__details__depth__text}>Description</h2>
                <p>{recipe?.description}</p>
                <h2 className={styles.recipe__details__depth__text}>Ingredients</h2>

                <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>
                      <i className='far fa-dot-circle'></i> 
                      {ingredient}
                    </li>
                  ))}
                </ul>

                <h2 className={styles.recipe__details__depth__text}>Steps</h2>

                <ul>
                {recipe.steps &&
                  recipe.steps.map((step) => (
                    <li key={step}>
                      <i className='fas fa-utensils'></i> {step}
                    </li>
                  ))}
                  </ul>

            </section>
        </>
    );
};

export default Details;
