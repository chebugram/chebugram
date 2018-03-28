import { makeAction } from '../../../core/store/utils';

import {
	selectApp,
} from '../selectors';

import {
	APP_PLATFORM__MOBILE,
} from '../../../core/constants';

import {
	ACTION__CONVERSATIONS__SET_CONVERSATION,
} from '../../conversations/actions/types';

import {
	ACTION__APP__SHOW_CONVERSATION_LIST,
} from '../actions/types';


export default (store) => (next) => (action) => {
	switch (action.type) {
		case ACTION__CONVERSATIONS__SET_CONVERSATION: {
			const state = store.getState();

			const conversationId = action.payload;
			const platform = selectApp(state).platform;

			if ( platform === APP_PLATFORM__MOBILE ) {
				store.dispatch(
					makeAction(ACTION__APP__SHOW_CONVERSATION_LIST, (conversationId === null))
				);
			}

			break;
		}

		default:
			break;
	}

	next(action);
}
