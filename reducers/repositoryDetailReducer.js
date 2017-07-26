export default function (state=null,action){

	console.log('%c state updated to! ', 'background: #222; color: #bada55',state);
	console.log('%c you requested for action','background:yellow;color:darkgrey',action);

	switch(action.type){

		case 'LOOKING_FOR_REPOSITORY_DETAIL':
			
			return action.payload
			
		break;

	}
	return state;


}