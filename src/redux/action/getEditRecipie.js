export function getEditRecipie(propId) {
	let editRecipie = fetch(`http://localhost:5050/edit/${propId}`);

	var tableArr = [];
	return (dispatch) => {
		editRecipie.then((editRecipie) => {
			editRecipie = editRecipie.json();
			editRecipie.then((res) => {
				tableArr = res;
				// console.log('tablearr in edit', tableArr);
				dispatch({
					type: 'GET_EDIT_RECIPIE',
					payload: tableArr,
				});
			});
		});
	};
}
