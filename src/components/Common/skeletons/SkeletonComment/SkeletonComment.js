import Shimmer from '../Shimmer/Shimmer';
import Skeleton from '../Skeleton/Skeleton';

import styles from './SkeletonComment.module.css';

const SkeletonComment = () => {
	return (
		<div className={styles.skeleton__wrapper}>
			<div>
				<div className={styles.skeleton__footer}>
					<Skeleton type='avatar' />
					<Skeleton type='title' />
					<Skeleton type='title' />
				</div>
				<Skeleton type='text' />
				<Skeleton type='text' />
			</div>
			<Shimmer />
		</div>
	);
};

export default SkeletonComment;
