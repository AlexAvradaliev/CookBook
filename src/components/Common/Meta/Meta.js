import { memo } from 'react';
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title} </title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Cook Book: Food, Recipe inspiration and Search',
	description: 'Discover, learn, and share recipes',
	keywords:
		'recipes, cooking, share food, foods, vegan recipes, international cuisines',
};

export default memo(Meta);
