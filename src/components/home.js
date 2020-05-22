import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRecipies } from '../redux/action/fetchRecipies';
import { selectRecipie } from '../redux/action/selectRecipie';
import { Card, Button, Badge } from 'react-bootstrap';
import '../App.css';
class Home extends Component {
	state = {};

	componentDidMount() {
		this.props.fetchRecipies();
	}
	handleEdit(id) {
		this.props.selectRecipie(id);
		// console.log('recipie id', id);
	}

	render() {
		// console.log('prop in home', this.props);
		// console.log('image in home', this.props);
		return (
			<div className='mainHome '>
				<div className=' container row headingParent  '>
					<span className='display-4 text-white font-weight-normal headingOfPage '>
						Recipies
					</span>
				</div>

				<div className='mainCard'>
					{this.props.recipies &&
						this.props.recipies.map((el) => {
							return (
								<div key={el.recipie_id} className='mt-3'>
									{/* <div className='row'> */}

									<Card className=' border border-primary'>
										<div className=' recipieCard'>
											<div className='recipieCard-child imageCard'>
												<Card style={{ width: '17rem', margin: '2rem' }}>
													<Card.Body>
														<div className='row'>
															<div className='col-3'>
																<li style={{ listStyle: 'none' }}>
																	<Badge className='badge-danger'>
																		{el.recipie_id}
																	</Badge>
																</li>
															</div>
															<div className='col-9'>
																<Card.Title className=' text-primary'>
																	{el.recipie_name}
																</Card.Title>
															</div>
														</div>

														<div className='row'>
															<Card.Img
																variant='top'
																src={el.image}
																style={{ borderRadius: '50%' }}
															/>
														</div>
														<Card.Subtitle className='text-center mt-2'>
															{el.cuisine_name}
														</Card.Subtitle>

														<Link to={`edit/${el.recipie_id}`}>
															<Button
																variant='success'
																onClick={() => this.handleEdit(el.recipie_id)}
																style={{
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																	textDecoration: 'none',
																}}>
																Edit
															</Button>
														</Link>
													</Card.Body>
												</Card>
											</div>
											<div className='recipieCard-child ingredientsCard'>
												<Card style={{ width: '17rem', marginTop: '3rem' }}>
													<Card.Body>
														<Card.Title>{el.recipie_name}</Card.Title>

														<Card.Subtitle>
															<span>
																<h5 className='text-info ml-3'>Ingredients</h5>
															</span>
															{el.ingredients}
														</Card.Subtitle>
													</Card.Body>
												</Card>
											</div>

											<div className='recipieCard-child instructionsCard'>
												<Card style={{ width: '45rem', marginTop: '3rem' }}>
													<Card.Body className='childPadding'>
														<Card.Title>{el.recipie_name}</Card.Title>

														<Card.Subtitle>
															<span>
																<h5 className='text-warning ml-3'>
																	Instrutions
																</h5>
															</span>
															{el.instructions}
														</Card.Subtitle>
													</Card.Body>
												</Card>
											</div>
										</div>
									</Card>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('dtste', state.recipies.recipies[0]);

	// console.log('blob data', blobDa);

	return {
		recipies: state.recipies.recipies,
		recipieId: state.recipies.recipieId,
		image: state.recipies.image,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchRecipies, selectRecipie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
