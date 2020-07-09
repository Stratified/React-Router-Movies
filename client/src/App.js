import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
	// const [savedList, setSavedList] = useState([]);

	// const addToSavedList = (movie) => {
	// 	setSavedList([...savedList, movie]);
	// };

	return (
		<div>
			{/* <SavedList list={savedList} /> */}
			<Switch>
				<Route path='/:id'>
					<Movie />
				</Route>
				<Route exact path='/'>
					<MovieList />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
