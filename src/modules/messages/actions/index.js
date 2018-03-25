import { makeAction } from '../../../core/store/utils';
import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from './types';


/**
 * @param {Object} data
 * @param {StoreConversation.id} data.conversationId
 * @param {StoreMessage.message} data.message
 * @param {StoreMessage.my} [data.my=true]
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function addMessage (data) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__MESSAGES__ADD_MESSAGE,
			{
				...data,
				my: ('my' in data ? data.my : true),
			}
		));
	};
}
