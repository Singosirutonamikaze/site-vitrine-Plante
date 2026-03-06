import '../css/Categories.css'
import PropTypes from 'prop-types';

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')} className='lmj-categories-button'>Réinitialiser</button>
		</div>
	)
}

Categories.propTypes = {
	setActiveCategory: PropTypes.func.isRequired,
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeCategory: PropTypes.string.isRequired,
};

export default Categories