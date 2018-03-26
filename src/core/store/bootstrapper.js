/**
 * @typedef {Object} StoreState
 *
 * @property {StoreAppState} app
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

import appReducer from '../../modules/app/reducers';
import channelsReducer from '../../modules/channels/reducers';
import contactsReducer from '../../modules/contacts/reducers';
import conversationsReducer from '../../modules/conversations/reducers';
import messagesReducer from '../../modules/messages/reducers';

import conversationsMiddleware from '../../modules/conversations/middlewares';

import censorMiddleware from '../censor/censorMiddleware';


function getReducer () {
	return combineReducers({
		app: appReducer,
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
	  censorMiddleware,
	  conversationsMiddleware,
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
