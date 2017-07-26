import {combineReducers} from 'redux';
import Repositories from './repoReducer';
import RepositoryDetail from './repositoryDetailReducer';

const allReducers = combineReducers({

	Repositories : Repositories,
	RepositoryDetail:RepositoryDetail
});

export default allReducers;