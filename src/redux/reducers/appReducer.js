let initailState = {
	text: 'gdrgsr',
	cuisines: [],
	recipies: [],
	recipieId: '',
	// newRecipie: '',
	editRecipie: [],
	editCuisine: [],
};

export function appReducerFunction(state = initailState, action) {
	let stateCopy = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case 'GET_CUISINES':
			stateCopy.cuisines = action.payload;
			return stateCopy;
		case 'GET_RECIPIES':
			stateCopy.recipies = action.payload;
			return stateCopy;
		case 'SELECT_RECIPIE':
			stateCopy.recipieId = action.payload;
		case 'GET_EDIT_RECIPIE':
			stateCopy.editRecipie = action.payload;
		case 'GET_CUISINES_FOR_EDIT':
			stateCopy.editCuisine = action.payload;

			return stateCopy;
		default:
			return stateCopy;
	}
}
