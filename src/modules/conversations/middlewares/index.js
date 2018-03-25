import { makeAction } from '../../../core/store/utils';

import {
	selectConversation,
	selectConversationsCurrent,
} from '../selectors';

import {
	ACTION__CONVERSATIONS__UPDATE_CONVERSATION,
} from '../actions/types';

import {
	ACTION__MESSAGES__ADD_MESSAGE,
} from '../../messages/actions/types';


export default (store) => (next) => (action) => {
	switch (action.type) {
		case ACTION__MESSAGES__ADD_MESSAGE: {
			const state = store.getState();

			const conversationId = action.payload.conversationId;
			const currentConversationId = selectConversationsCurrent(state);
			const conversation = selectConversation(state, { id: conversationId });

			const newData = {
				...conversation,
				// TODO: actually we should store user local time(including timezone)
				lastUpdate: new Date().valueOf(),
			};

			if ( conversationId !== currentConversationId ) {
				newData.unreadMessages = (conversation.unreadMessages + 1);
			}

			store.dispatch(makeAction(ACTION__CONVERSATIONS__UPDATE_CONVERSATION, newData));
			break;
		}

		default:
			break;
	}

	next(action);
}
