import {Link} from 'react-router-dom';

import styles from './Groups.module.css';
import groupsData from './GroupsData';

const Groups = () => {

  return (
    <section className={styles.groups} id="groups">
      <div>
        {groupsData.map((group, i) => (
          <article className={styles.group} key={i} >
            <Link to="#" key={i}>
              <img src={group.img} alt={group.name} />
              <p>{group.name}</p>
            </Link>
          </article>
        ))}
      </div>
      <h1 className={styles.groups__text}>Find your favorite food groups</h1>
    </section>
  );
};

export default Groups;
