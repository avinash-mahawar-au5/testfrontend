import Axios from 'axios';

export function sendDataToBackend(state) {
	console.log('post req sent', state);
	return (dispatch) => {
		// console.log('post req sent');
		return Axios.post('http://localhost:5050/add', state);
	};
}
