import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as feedbackService from '../../../servces/feedbackServices';

const Rating = () => {

    const [value, setValue] = useState(0);
    const {recipeId} = useParams();
    useEffect (() => {
feedbackService.get(recipeId)
.then((res) => {
    setValue(res)
})
    }, [])
	return (
		<div className='rating'>
			<span>
				<i
					style={styles}
					className={
						value >= 1
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
				<i
					style={styles}
					className={
						value >= 2
							? 'fas fa-star'
							: value >= 1.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
				<i
					style={styles}
					className={
						value >= 3
							? 'fas fa-star'
							: value >= 2.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
				<i
					style={styles}
					className={
						value >= 4
							? 'fas fa-star'
							: value >= 3.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
				<i
					style={styles}
					className={
						value >= 5
							? 'fas fa-star'
							: value >= 4.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
		</div>
	);
};

const styles = {
	color: '#E16120',
};
export default Rating;