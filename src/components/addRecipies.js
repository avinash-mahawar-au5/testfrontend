import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCuisines } from '../redux/action/fetchCuisines';
import { sendDataToBackend } from '../redux/action/postToBackend';
import { storage } from '../firebase/index';

class Recipies extends Component {
	state = {
		recipie_name: '',
		cuisine_name: '',
		ingredients: '',
		instructions: '',
		image: null,
		url: null,
	};

	componentDidMount() {
		this.props.fetchCuisines();
	}
	handleName(event) {
		this.setState({
			recipie_name: event.target.value,
		});
	}

	handleIngredients(event) {
		this.setState({
			ingredients: event.target.value,
		});
	}

	handleInstructions(event) {
		this.setState({
			instructions: event.target.value,
		});
	}

	handleCuisine(event) {
		console.log('cuisine Drp', this.state.cuisine_name);
		this.setState({
			cuisine_name: event.target.value,
		});
	}

	handleImage = (event) => {
		// console.log(event.target.files[0]);
		if (!event.target.files[0]) {
			alert('Please add Image');
		}
		this.setState({
			image: event.target.files[0],
		});
	};

	addImage = () => {
		const { image } = this.state;

		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				//progess function
			},
			(error) => {
				//errow function
				console.log(error);
			},
			() => {
				//complete function
				storage
					.ref('images')
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						console.log(url);
						this.setState({
							url: url,
						});
					});
			}
		);
	};

	submitData() {
		const data = {
			recipie_name: this.state.recipie_name,
			cuisine_name: this.state.cuisine_name,
			ingredients: this.state.ingredients,
			instructions: this.state.instructions,
			image: this.state.url,
			// url: this.state.url,
		};
		this.props.sendDataToBackend(data);
	}
	render() {
		// console.log('in rec', this.props);
		return (
			<div className='mainHome'>
				<div className='container'>
					<div className='row'>
						<span className='text-center'>
							<h3 className='text-white'>Add Your Recipies</h3>
							{/* <p className='muted'> List Here</p> */}
						</span>
					</div>

					<div className='row mt-4 '>
						<div className='col '>
							<input
								className='form-control text-capitalize  '
								type='text'
								placeholder='name'
								onChange={(event) => this.handleName(event)}
							/>
						</div>
						<div className='col '>
							<select
								className='form-control  '
								placeholder=''
								value={this.state.cuisine_name}
								onChange={(event) => this.handleCuisine(event)}>
								{this.props.cuisines &&
									this.props.cuisines.map((el) => {
										return (
											<option key={el.cuisine_id}>{el.cuisine_name}</option>
										);
									})}
							</select>
						</div>
					</div>
					<div className='row m-4'>
						<div className='col '>
							<span>
								<h5 className='text-white'>List of Ingredients</h5>
							</span>
							<textarea
								className='form-control mt-3'
								cols='80'
								rows='5'
								placeholder='Ingredients'
								onChange={(event) => this.handleIngredients(event)}></textarea>
						</div>
					</div>
					<div className='row m-3'>
						<div className='col'>
							<div className='row m-3'>
								<span>
									<h5 className='text-white'>Cooking Instructions</h5>
								</span>
							</div>
							<div className='row m-3'>
								<textarea
									className='form-control'
									cols='80'
									rows='8'
									placeholder='Instructions'
									onChange={(event) =>
										this.handleInstructions(event)
									}></textarea>
							</div>
						</div>
					</div>
					<div className='row mt-4'>
						<div className='col'>
							<span>
								<h5 className='text-white'>Image</h5>
							</span>
							<div className='row'>
								<input
									type='file'
									className='form-control'
									onChange={this.handleImage}
								/>
								<button
									className='btn btn-danger m-3'
									onClick={() => this.addImage()}
									disabled={!this.state.image}>
									Add Image
								</button>
							</div>
						</div>
						<div className='col'></div>
					</div>
					<div className='row'>
						<div className='col'></div>
						<div className='col'>
							<button
								className='btn btn-success'
								onClick={() => this.submitData()}
								disabled={
									!this.state.recipie_name ||
									!this.state.cuisine_name ||
									!this.state.ingredients ||
									!this.state.instructions ||
									!this.state.image
								}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log('dtste', state.recipies.cuisines);
	return {
		cuisines: state.recipies.cuisines,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchCuisines, sendDataToBackend }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipies);
