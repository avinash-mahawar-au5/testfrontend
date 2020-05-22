import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Home from './components/home';
import Recipies from './components/addRecipies';
import Edit from './components/editRecipie';
// import Footer from './components/footer';

class App extends React.Component {
	state = {};
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className='navbar navbar-dark bg-dark navItemFont'>
						<div className=' container col text-center  '>
							<Link to='/home' className='text-white   '>
								Home
							</Link>
						</div>
						<div className=' container col'>
							<Link to='/add' className='text-white '>
								Add Recipies
							</Link>
						</div>
						<div className=' container col text-white'>Edit Recipies</div>
					</nav>
				</div>
				<Route path='/'>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/add'>
					<Recipies />
				</Route>
				<Route path='/edit'>
					<Edit />
				</Route>
			</BrowserRouter>
		);
	}
}

export default App;
