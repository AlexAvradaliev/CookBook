import styles from './Details.module.css';

const Details = () => {

    return (
        <>
            <section className={styles.recipe__details__generic}>
                <article>
                    <header>
                        <h1 className={styles.recipe__details__generic__text}>Quick Moroccan Couscous</h1>
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
                        <img src="/assets/images/user.webp"
                            alt="Quick Moroccan Couscous" />
                        <p>Alex Alex</p>
                    </section>
                    <section className={styles.recipe__details__generic__badge}>
                        <figure className={`${styles.badge} ${styles.badge__info}`}><p>Moroccan</p></figure>
                        <figure className={`${styles.badge} ${styles.badge__info}`}><p>grains</p></figure>
                        <figure className={`${styles.badge} ${styles.badge__info}`}><p>vegetables</p></figure>
                        <figure className={`${styles.badge} ${styles.badge__info}`}><p>protein foods</p></figure>
                    </section>
                    <section className={styles.recipe__details__generic__information}>
                        <div>
                            <h2>8</h2>
                            <p>Ingredients</p>
                        </div>
                        <div>
                            <h2>10</h2>
                            <p>Minutes to prepare</p>
                        </div>
                        <div>
                            <h2>35</h2>
                            <p>Minutes to cook</p>
                        </div>
                    </section>
                </article>
                <article className={styles.recipe__details__generic__images}>
                    <div className={styles.recipe__details__generic__images__active}>
                        <img src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644680344/Recipes/recipes/jhriziazrgr4jromndej.bmp"
                            alt="Quick Moroccan Couscous" />
                    </div>
                    <div className={styles.recipe__details__generic__images__select}>
                        <img alt=""
                            src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644680344/Recipes/recipes/jhriziazrgr4jromndej.bmp" />
                        <img alt=""
                            src="https://res.cloudinary.com/dmalpxwu4/image/upload/v1644680326/Recipes/recipes/idmzscdurksyg5gvywgk.jpg" />
                    </div>
                </article>
            </section>
            <section className={styles.recipe__details__depth}>
                <h2 className={styles.recipe__details__depth__text}>Description</h2>
                <p>Tried to replicate couscous portion from the Moroccan chicken from Cheesecake Factory®.</p>
                <h2 className={styles.recipe__details__depth__text}>Ingredients</h2>
                <ul>
                    <li><i className="far fa-dot-circle"></i> 1 tablespoon olive oil</li>
                    <li><i className="far fa-dot-circle"></i> 2 cups water</li>
                    <li><i className="far fa-dot-circle"></i> ½ cup chopped yellow onion</li>
                    <li><i className="far fa-dot-circle"></i> ½ cup chopped oil-packed sun-dried tomatoes</li>
                    <li><i className="far fa-dot-circle"></i> ½ cup golden raisins</li>
                    <li><i className="far fa-dot-circle"></i> ¼ teaspoon ground black pepper</li>
                    <li><i className="far fa-dot-circle"></i> 3 tablespoons lemon juice</li>
                    <li><i className="far fa-dot-circle"></i> 1 tablespoon butter, softened</li>
                </ul>
                <h2 className={styles.recipe__details__depth__text}>Steps</h2>
                <ul>
                    <li><i className="fas fa-utensils"></i> Bring the water to a boil in a saucepan; stir couscous into the
                        boiling water and cook until couscous absorbs all the water and is cooked through, 10 to 15
                        minutes.</li>
                    <li><i className="fas fa-utensils"></i> Heat olive oil in a skillet over medium-low heat; cook and stir
                        onion, shallot, and garlic in the hot oil until onion is lightly browned, 15 to 20 minutes. Stir
                        raisins, sun-dried tomatoes, and almonds into onion mixture; cook and stir until heated through,
                        about 5 minutes.</li>
                    <li><i className="fas fa-utensils"></i> Stir couscous into onion-raisin mixture; cook and stir until
                        heated through, about 5 minutes. Season couscous mixture with salt and pepper; add lemon juice.
                        Remove skillet from heat and stir butter into couscous mixture.</li>
                </ul>
            </section>
        </>
    );
};

export default Details;
