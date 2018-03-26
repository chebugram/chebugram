/**
 * @typedef {Object} StoreAppState
 *
 * @property {boolean} modalImageOpened
 * @property {StoreConversation.type} modalImageType
 * @property {StoreConversation.entityId} modalImageEntityId
 */


import {
	ACTION__APP__OPEN_IMAGE_MODAL,
	ACTION__APP__CLOSE_IMAGE_MODAL,
} from '../actions/types';


const defaultState = {
	modalImageOpened: false,
	modalImageType: null,
	modalImageEntityId: null,
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

		default:
			return state;
	}
}
