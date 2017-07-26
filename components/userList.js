import React from 'react';
import RepositoryList from '../containers/repositoryListContainer';
import RepositoryDetails from '../containers/repositoryDetailContainer';

class UserList extends React.Component{

	render(){

		return(

				<div>
					<h3>Loading List...</h3>
					<RepositoryList />
					<hr/>
					<RepositoryDetails />
				</div>	
		);
	}

}

export default UserList;