export function selectRecipie(id) {
	return {
		type: 'SELECT_RECIPIE',
		payload: id,
	};
}
