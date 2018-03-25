/**
 * @typedef {Object} StoreState
 *
 * @property {StoreChannelsState} channels
 * @property {StoreContactsState} contacts
 * @property {StoreConversationsState} conversations
 * @property {StoreMessagesState} messages
 */

/**
 * @typedef {Object} StoreActionParams
 *
 * @property {Store.dispatch} dispatch
 * @property {Store.getState} getState
 */


import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import reduxThunkMiddleware from 'redux-thunk';

import channelsReducer from '../../modules/channels/reducers';
import contactsReducer from '../../modules/contacts/reducers';
import conversationsReducer from '../../modules/conversations/reducers';
import messagesReducer from '../../modules/messages/reducers';


function getReducer () {
	return combineReducers({
		channels: channelsReducer,
		contacts: contactsReducer,
		conversations: conversationsReducer,
		messages: messagesReducer,
	});
}

/**
 * Returns base enhancers.
 *
 * @returns {Array<Function>}
 */
function getMiddlewares () {
  return [
      reduxThunkMiddleware,
  ];
}

/**
 * Creates a configured store.
 *
 * @returns {Object}
 */
export function configureStore ({
	initialState,
}) {
    const enhancers = [
        applyMiddleware(...getMiddlewares()),
    ];

    return createStore(
        getReducer(),
		initialState,
        compose(...enhancers)
    );
}
