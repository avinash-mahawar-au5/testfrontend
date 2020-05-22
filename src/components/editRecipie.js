import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getEditRecipie } from '../redux/action/getEditRecipie';
import { fetchCuisineForEdit } from '../redux/action/fetchCuisineForEdit';
import { fetchCuisines } from '../redux/action/fetchCuisines';
import { sendEditedData } from '../redux/action/postEditedData';
class Edit extends Component {
	state = {
		recipie_name: '',
		cuisine_name: '',
		ingredients: '',
		instructions: '',
		image: '',
	};

	componentDidMount() {
		this.props.getEditRecipie(this.props.recipieId);
		// this.props.fetchCuisineForEdit();
		this.props.fetchCuisineForEdit(this.props.recipieId);
	}

	handleNameEdit(event) {
		this.setState({
			recipie_name: event.target.value,
		});
	}
	handleIngredientsEdit(event) {
		this.setState({
			ingredients: event.target.value,
		});
	}

	handleInstructionsEdit(event) {
		this.setState({
			instructions: event.target.value,
		});
	}
	handleCuisine(event) {
		this.setState({
			cuisine_name: event.target.value,
		});
	}

	handleImage = (event) => {
		// console.log(event.target.files[0]);
		this.setState({
			image: event.target.files[0],
		});
	};

	add(state) {
		const data = {
			recipie_name: this.state.recipie_name,
			cuisine_name: this.state.cuisine_name,
			ingredients: this.state.ingredients,
			instructions: this.state.instructions,
			image: this.state.image,
		};
		this.props.sendEditedData(data, this.props.recipieId);
	}
	render() {
		// console.log('edititems', this.props);
		const { cuisines } = this.props;
		return (
			<div className='mainHome'>
				<div className='container'>
					<div className='row'>
						<span className='text-center'>
							<h3 className='text-white'>Edit Your Recipies</h3>
						</span>
					</div>

					<div className='row mt-4'>
						<div className='col'>
							<input
								className='form-control text-capitalize'
								type='text'
								// value={editRecipie.recipie_name}
								onChange={(event) => this.handleNameEdit(event)}
							/>
						</div>
						<div className='col '>
							<select
								className='form-control'
								placeholder=''
								onchange={(event) => this.handleCuisine(event)}>
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
								// value={editRecipie.ingredients}
								onChange={(event) =>
									this.handleIngredientsEdit(event)
								}></textarea>
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
									// value={editRecipie.instructions}
									onChange={(event) =>
										this.handleInstructionsEdit(event)
									}></textarea>
							</div>
						</div>
					</div>
					{/* <div className='row mt-4'>
						<div className='col'>
							<span>
								<h5 className='text-white' onchange={this.handleImage}>
									Image
								</h5>
							</span>
							<input type='file' className='form-control' />
						</div>
						<div className='col'></div>
					</div> */}
					<div className='row'>
						<div className='col'></div>
						<div className='col'>
							<button
								className='btn btn-success'
								onClick={() => this.add()}
								// disabled={
								// 	!this.state.category ||
								// 	!this.state.contactNumber ||
								// 	!this.state.productName ||
								// 	!this.state.city ||
								// 	!this.state.sellingPrice ||
								// 	!this.state.sellerName
								// }
							>
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
	console.log('state', state.recipies.editRecipie.recipie_name);

	return {
		recipieId: state.recipies.recipieId,
		editRecipie: state.recipies.editRecipie,
		state: state,
		fetchCuisineForEdit: state.recipies.fetchCuisineForEdit,
		cuisines: state.recipies.cuisines,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ getEditRecipie, fetchCuisineForEdit, fetchCuisines, sendEditedData },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
