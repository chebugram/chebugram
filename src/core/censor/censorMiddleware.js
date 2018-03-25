import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from '../../modules/messages/actions/types';


import {
	getPhrase,
} from './library';

export default (store) => (next) => (action) => {
	if ( action.type === ACTION__MESSAGES__ADD_MESSAGE ) {
		action.payload.message = getPhrase();
	}

	next(action);
}
