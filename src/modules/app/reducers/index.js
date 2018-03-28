/**
 * @typedef {Object} StoreAppState
 *
 * @property {boolean} modalImageOpened
 * @property {StoreConversation.type} modalImageType
 * @property {StoreConversation.entityId} modalImageEntityId
 * @property {boolean} showConversationList
 * @property {string} platform
 */


import {
	APP_PLATFORM__DESKTOP,
} from '../../../core/constants';

import {
	ACTION__APP__OPEN_IMAGE_MODAL,
	ACTION__APP__CLOSE_IMAGE_MODAL,
	ACTION__APP__SHOW_CONVERSATION_LIST,
	ACTION__APP__SET_PLATFORM,
} from '../actions/types';


const defaultState = {
	modalImageOpened: false,
	modalImageType: null,
	modalImageEntityId: null,

	showConversationList: true,
	platform: APP_PLATFORM__DESKTOP,
};


/**
 * @param {StoreContactsState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreContactsState}
 */
export default function (state = defaultState, action) {
	switch (action.type) {
		case ACTION__APP__OPEN_IMAGE_MODAL: {
			return {
				...state,
				modalImageOpened: true,
				modalImageType: action.payload.type,
				modalImageEntityId: action.payload.entityId,
			};
		}

		case ACTION__APP__CLOSE_IMAGE_MODAL: {
			return {
				...state,
				modalImageOpened: false,
				modalImageType: null,
				modalImageEntityId: null,
			};
		}

		case ACTION__APP__SHOW_CONVERSATION_LIST: {
			return {
				...state,
				showConversationList: action.payload,
			};
		}

		case ACTION__APP__SET_PLATFORM: {
			return {
				...state,
				platform: action.payload,
				showConversationList: (action.payload === APP_PLATFORM__DESKTOP),
			};
		}

		default:
			return state;
	}
}
