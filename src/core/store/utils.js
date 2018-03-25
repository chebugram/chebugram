/**
 * @typedef {Object} ReduxAction
 *
 * @property {string|Symbol} type
 * @property {*} [payload=undefined]
 * @property {*} [meta=undefined]
 */

/**
 * Makes a redux action.
 *
 * @param {string|Symbol} type
 * @param {*} [payload=undefined]
 * @param {*} [meta=undefined]
 *
 * @returns {ReduxAction}
 */
export function makeAction (type, payload = undefined, meta = undefined) {
	if ( !type || !( typeof type === 'string' || type instanceof Symbol ) ) {
		throw new Error('Argument "type" should be a non-empty string or Symbol');
	}

	return {
		type,
		payload,
		meta,
	};
}
