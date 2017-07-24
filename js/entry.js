import React from 'react';
import ReactDom from 'react-dom';

class FirstApp extends React.Component {
	
	constructor(props){
		super(props);
		this.state ={
			firstname : "Default",
			todos     :[]
		}
	}
	changeFirstname(event){

		this.setState({firstname:event.target.value});
	}
	addTodo(event){

		console.log(this.state.firstname);
		
		this.state.todos.push(this.state.firstname);
		this.setState({firstname:'',todos:this.state.todos});
		console.log(this.state.todos);
	}
	render(){
		
		return(<div>
					<h3> Component 1.</h3>
					<div>
						<input type="text" name="firstname" value={this.state.firstname} 
						 onChange={this.changeFirstname.bind(this)} />
						 <button id='add' onClick={this.addTodo.bind(this)}> Add</button>
					</div>
					<div>
					<br/>
					 <h3>My Todos</h3>
					 <ul>
					 	{
					 		this.state.todos.map((value)=>{
					 			return <li key={value}>{value}</li>;	
					 		})
					 	}
						<ListingComponent  todoLists={this.state.todos} />					 	
					</ul>
					</div>
			   </div>);

	}
}


class ListingComponent extends React.Component{

	constructor(props){
		super(props);
		
		
	}
	componentWillMount (){
		console.log('component will mount after this.');
		console.log(this.props.todoLists);
	}
	componentDidMount(){
		console.log('component get mounted.');
	}
	render(){

	     return (
	     	<div>
	     		<h3>Component 2</h3>
	     		 <ul>
	     		 	{
	     		 		this.props.todoLists.map((value) =>{

	     		   			return <li key={value}>{value}</li>	
	     		 		})
	     		 	}
	     		 </ul>
	     	</div>
	     	);	
	}

}
ReactDom.render(<FirstApp />,document.getElementById('appEntry_component1'));

/*ReactDom.render(<ListingComponent />,document.getElementById("appEntry_component2"));
*/