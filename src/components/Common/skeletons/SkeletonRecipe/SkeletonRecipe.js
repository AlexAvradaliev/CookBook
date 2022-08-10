import Shimmer from '../Shimmer/Shimmer';
import Skeleton from '../Skeleton/Skeleton';

import styles from './SkeletonRecipe.module.css';

const SkeletonRecipe = () => {
	return (
		<div className={styles.skeleton__wrapper}>
			<div>
				<Skeleton type='image' />
				<Skeleton type='title' />
				<Skeleton type='text' />
				<div className={styles.skeleton__footer}>
					<Skeleton type='avatar' />
					<Skeleton type='name' />
				</div>
			</div>
			<Shimmer />
		</div>
	);
};

export default SkeletonRecipe;
