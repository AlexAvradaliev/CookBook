import { Link } from 'react-router-dom';
import styles from './Paginate.module.css'

export const Paginate = ({ pages, page, term = '', typeCategory = '',  category = ''}) => {
	const btnPrimary = styles.btn__primary
	
	return (
		pages > 1 && (
			typeCategory
			? <div className={styles.paginate}>
				{[...Array(pages).keys()].map((key) => (
				 <Link key={key} to={`/search/?name=${term}&category=${typeCategory}&${typeCategory}=${category}&page=${key + 1}`}>
						<button className={`${styles.btn} ${key + 1 === page && btnPrimary}`}>
							{key + 1}
						</button>
					</Link>
				))}
			 </div>
			 : <div className={styles.paginate}>
			 {[...Array(pages).keys()].map((key) => (
					<Link key={key} to={`/search/?name=${term}&page=${key + 1}`}>
					 <button className={`${styles.btn} ${key + 1 === page && btnPrimary }`}>
						 {key + 1}
					 </button>
				 </Link>
			 ))}
		  </div>
		)
	);
};

export default Paginate;
