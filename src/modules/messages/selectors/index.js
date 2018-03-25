/**
 * @param {StoreState} state
 *
 * @returns {StoreMessagesState}
 */
export const selectMessages = (state) => state.messages;

/**
 *
 * @param {StoreState} state
 * @param {Object} options
 * @param {string} options.conversationId
 *
 * @returns {Array<StoreMessage>}
 */
export const selectMessagesForConversation = (state, options) => selectMessages(state)[options.conversationId];
