import React from 'react';

class SearchComponent extends React.Component{

	render(){

		return(

				<div>
					<form>
						<input type="text" name="searchkey" />
						<button >Search</button>
						
					</form>
				</div>	
		);
	}

}

export default SearchComponent;