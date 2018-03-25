/**
 * @param {StoreState} state
 *
 * @returns {StoreConversationsState}
 */
export const selectConversations = (state) => state.conversations;

/**
 * @param {StoreState} state
 *
 * @returns {StoreConversationsListState}
 */
export const selectConversationsList = (state) => selectConversations(state).list;

/**
 * @param {StoreState} state
 *
 * @returns {StoreConversationsCurrentState}
 */
export const selectConversationsCurrent = (state) => selectConversations(state).current;

/**
 * @param {StoreState} state
 * @param {Object} options
 * @param {string} options.id
 *
 * @returns {StoreConversation}
 */
export const selectConversation = (state, options) => selectConversationsList(state)[options.id];

/**
 * @param {StoreState} state
 *
 * @returns {Array<StoreConversation>}
 */
export const selectConversationsByLastUpdate = (state) => {
	const conversations = selectConversationsList(state);

	return Object.values(conversations)
		.sort((a, b) => (b.lastUpdate - a.lastUpdate));
};
