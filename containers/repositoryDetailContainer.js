import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*import {RepositoryActions} from '../actions/actions';
*/
class RepositoryDetail extends React.Component{

	getRepositoryDetails(){
		
			return (
				<div>
				    <div>
				     	{this.props.repositoryDetail.full_name} - <span>{this.props.repositoryDetail.language}</span>
				    </div> 	

					<div>
						{this.props.repositoryDetail.description}
					</div>
				</div>
			);
		
	}
	render(){
		if(!this.props.repositoryDetail){

			return (
				<h3>Whose details your need?</h3>
			)
		}
		else{
			return (

				<div>
					{this.getRepositoryDetails()}
				</div>	

		)
		}
		
	}
}

function mapStateToProps (state){

	return{
		repositoryDetail:state.RepositoryDetail
	}
}

export default connect(mapStateToProps)(RepositoryDetail);