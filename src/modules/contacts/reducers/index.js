/**
 * @typedef {Object<string,StoreContact>} StoreContactsState
 */

/**
 * @typedef {Object} StoreContact
 *
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} avatarUrl
 */


import {
	ACTION__CONTACTS__ADD_CONTACT,
} from '../actions/types';


/**
 * @param {StoreContactsState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreContactsState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		case ACTION__CONTACTS__ADD_CONTACT: {
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		}
		default:
			return state;
	}
}
