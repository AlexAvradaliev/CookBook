import {Link} from 'react-router-dom';

import cuisinesData from './CuisinesData';
import styles from './Cuisines.module.css'

const Cuisines = () => {

  return (
    <section id="cuisines" className={styles.cuisines}>
      <h1 className={styles.cuisines__text}>Go for your favorite cuisine</h1>
      <div>
        {cuisinesData.map((cuisine, i) => (
          <article key={i} className={styles.cuisine}>
            <Link to="#" className={styles.cuisine__container} >
              <img
                className={styles.cuisine__image}
                src={cuisine.img}
                alt={cuisine.name}
              />
              <p className={styles.cuisine__name}>{cuisine.name}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cuisines;
