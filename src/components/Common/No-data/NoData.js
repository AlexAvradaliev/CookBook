import styles from './NoData.module.css';
import noComments from './assets/images/noComments.png';
import noRecipe from './assets/images/noRecipes.png'
import noFind from './assets/images/noFind.png'

const NoData = ({
  active,
}) => {

  let image = '';
  if(active === 'noComments'){
    image = noComments;
  } else if(active === 'noRecipe'){
    image = noRecipe;
  } else if(active === 'noFind'){
    image = noFind;
  };

    return (
        <article className={styles.profile__content__nothing}>
        <img alt='Nothing found' src={image} />
        <p>Nothing here yet</p>
      </article>
    );
};

export default NoData;
