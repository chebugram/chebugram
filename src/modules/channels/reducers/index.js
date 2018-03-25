/**
 * @typedef {Object<string,StoreChannel>} StoreChannelsState
 */

/**
 * @typedef {Object} StoreChannel
 *
 * @property {string} id
 * @property {string} name
 */


/**
 * @param {StoreChannelsState} state
 * @param {ReduxAction} action
 *
 * @returns {StoreChannelsState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}
