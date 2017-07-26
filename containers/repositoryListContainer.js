import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RepositoryActions} from '../actions/actions';

class RepositoryList extends React.Component {


	listAllRepositories (){

		console.log('%c Wohh i got the props','color:darkgreen',this.props);
		
		return this.props.repositories.map((repositories) =>{
		
			return (

				<li key={repositories.id}
					onClick={()=>this.props.repoDetail(repositories)}>
					{repositories.name}
				</li>
			)
		})

	}

	render(){

		return (

			<ul>
				{this.listAllRepositories()}
			</ul>
		)
	}
}
function mapStateToProps(state){
	console.log('%c Mapping State To Props',"color:green",state)
	return ({
	
			repositories : state.Repositories
	});
}
function mapDispatchToProps(dispatch){

	return bindActionCreators({repoDetail:RepositoryActions},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RepositoryList);