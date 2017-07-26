import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Heading from './components/heading';
import SearchComponent from './components/searchComponent';
import UserList from './components/userList';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);
class Application extends React.Component{

	render(){

		return(
			<Provider store={store} >
				<div>
					<Heading />
					<SearchComponent />
					<UserList />
				</div>
			</Provider>		
		);
	}

}

ReactDom.render(<Application />,document.getElementById('app'));