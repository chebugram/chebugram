/**
 * @param {StoreState} state
 *
 * @returns {StoreContactsState}
 */
export const selectContacts = (state) => state.contacts;

/**
 * @param {StoreState} state
 * @param {Object} options
 * @param {string} options.id
 *
 * @returns {StoreContact}
 */
export const selectContact = (state, options) => selectContacts(state)[options.id];
