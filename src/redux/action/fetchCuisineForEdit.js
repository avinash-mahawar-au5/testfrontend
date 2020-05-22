export function fetchCuisineForEdit(propId) {
	let cuisine = fetch(`http://localhost:5050/edit/${propId}`);
	var tableArr = [];
	return (dispatch) => {
		cuisine.then((cuisine) => {
			cuisine = cuisine.json();
			cuisine.then((res) => {
				tableArr = res;
				// console.log('tablearr', tableArr);
				dispatch({
					type: 'GET_CUISINES_FOR_EDIT',
					payload: tableArr,
				});
			});
		});
	};
}
