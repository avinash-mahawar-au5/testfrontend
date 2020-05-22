export function fetchCuisines() {
	let cuisine = fetch('http://localhost:5050/cuisines');
	var tableArr = [];
	return (dispatch) => {
		cuisine.then((cuisine) => {
			cuisine = cuisine.json();
			cuisine.then((res) => {
				tableArr = res;
				// console.log('tablearr', tableArr);
				dispatch({
					type: 'GET_CUISINES',
					payload: tableArr,
				});
			});
		});
	};
}
