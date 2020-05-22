export function fetchRecipies() {
	let recipies = fetch(`http://localhost:5050/home`);
	var tableArr = [];
	return (dispatch) => {
		recipies.then((recipies) => {
			recipies = recipies.json();
			recipies.then((res) => {
				tableArr = res;
				// console.log('tablearr', tableArr);
				dispatch({
					type: 'GET_RECIPIES',
					payload: tableArr,
				});
			});
		});
	};
}
