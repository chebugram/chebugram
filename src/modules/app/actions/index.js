import { makeAction } from '../../../core/store/utils';
import {
	ACTION__APP__OPEN_IMAGE_MODAL,
	ACTION__APP__CLOSE_IMAGE_MODAL,
	ACTION__APP__SHOW_CONVERSATION_LIST,
	ACTION__APP__SET_PLATFORM,
} from './types';


/**
 * @param {Object} data
 * @param {StoreAppState.modalImageType} data.type
 * @param {StoreAppState.modalImageEntityId} data.entityId
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function openImageModal (data) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__APP__OPEN_IMAGE_MODAL,
			data
		));
	};
}

/**
 * @returns {function(StoreActionParams):undefined}
 */
export function closeImageModal () {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__APP__CLOSE_IMAGE_MODAL
		));
	};
}

/**
 * @param {boolean} value
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function showConversationList (value) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__APP__SHOW_CONVERSATION_LIST,
			value
		));
	};
}

/**
 * @param {string} value
 *
 * @returns {function(StoreActionParams):undefined}
 */
export function setPlatform (value) {
	return (dispatch) => {
		dispatch(makeAction(
			ACTION__APP__SET_PLATFORM,
			value
		));
	};
}
