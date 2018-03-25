/**
 * @typedef {Object} StoreConversation
 *
 * @property {string} id
 * @property {string} type
 * @property {string} entityId
 * @property {boolean} readOnly
 * @property {number} lastUpdate
 * @property {number} unreadMessages
 */

/**
 * @typedef {Object<string,StoreConversation>} StoreConversationsListState
 */

/**
 * @typedef {string} StoreConversationsCurrentState
 */

/**
 * @typedef {Object} StoreConversationsState
 *
 * @property {StoreConversationsListState} list
 * @property {StoreConversationsCurrentState} current
 */


import { combineReducers } from 'redux';
import {
	ACTION__CONVERSATIONS__ADD_CONVERSATION,
	ACTION__CONVERSATIONS__SET_CONVERSATION,
} from '../actions/types';

import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from '../../messages/actions/types';


/**
 * @param {StoreConversationsListState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreConversationsListState}
 */
function list (state = {}, action) {
	switch (action.type) {
		case ACTION__CONVERSATIONS__ADD_CONVERSATION:
			return {
				...state,
				[action.payload.id]: action.payload,
			};

		case ACTION__MESSAGES__ADD_MESSAGE: {
			const conversationId = action.payload.conversationId;
			return {
				...state,
				[conversationId]: {
					...state[conversationId],
					lastUpdate: new Date().valueOf(),
				},
			};
		}

		// WORKAROUND: reset message count to zero every time when open conversation
		case ACTION__CONVERSATIONS__SET_CONVERSATION: {
			const conversationId = action.payload;
			return {
				...state,
				[conversationId]: {
					...state[conversationId],
					unreadMessages: 0,
				},
			};
		}

		default:
			return state;
	}
}

/**
 * @param {StoreConversationsCurrentState|null} state
 * @param {ReduxAction} action
 *
 * @returns {StoreConversationsCurrentState|null}
 */
function current (state = null, action) {
	switch (action.type) {
		case ACTION__CONVERSATIONS__SET_CONVERSATION:
			return action.payload;

		default:
			return state;
	}
}

/**
 *
 * @param {StoreConversationsState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreConversationsState}
 */
export default function conversationsReducer (state, action) {
	return combineReducers({
		list,
		current,
	})(state, action);
}
