import Axios from 'axios';

export function sendEditedData(state, propId) {
	console.log('edit req sent', state);
	return (dispatch) => {
		// console.log('post req sent');
		return Axios.put(`http://localhost:5050/edit/${propId}`, state);
	};
}
