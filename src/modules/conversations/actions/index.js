import { makeAction } from '../../../core/store/utils';
import {
	ACTION__CONVERSATIONS__ADD_CONVERSATION,
	ACTION__CONVERSATIONS__SET_CONVERSATION,
} from './types';


/**
 * @param {StoreConversation} data
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function addConversation (data) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__CONVERSATIONS__ADD_CONVERSATION,
			data
		));
	};
}

/**
 * @param {StoreConversationsCurrentState} id
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function setCurrentConversation (id) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__CONVERSATIONS__SET_CONVERSATION,
			id
		));
	};
}
