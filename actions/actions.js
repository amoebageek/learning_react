export const RepositoryActions = (repository) =>{

	console.log('%c Action is listened','color: blue',repository);

	return {
		type : 'LOOKING_FOR_REPOSITORY_DETAIL',
		payload:repository
	}

}