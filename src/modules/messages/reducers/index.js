/**
 * @typedef {Object<string,StoreConversation>} StoreMessagesState
 */

/**
 * @typedef {Object} StoreMessage
 *
 * @property {string} id
 * @property {string} message
 * @property {boolean} my
 */


import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from '../actions/types';

// WORKAROUND: Not for real app
let messageId = 100;


/**
 * @param {StoreMessagesState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreMessagesState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		case ACTION__MESSAGES__ADD_MESSAGE: {
			const conversationId = action.payload.conversationId;
			return {
				...state,
				[conversationId]: [
					...(state[conversationId] || []),
					{
						...action.payload,
						id: `${++messageId}`,
					},
				],
			};
		}

		default:
			return state;
	}
}
