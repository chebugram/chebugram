import { selectMessagesForConversation } from '../../selectors';
import { connect } from 'react-redux';

import {
	CONVERSATION_TYPE__CHANNEL,
} from '../../../conversations/constants';

import {
	selectContacts,
} from '../../../contacts/selectors';

import Messages from './messages';


export default connect((state, { id, type }) => {
	const result = {
		messages: (selectMessagesForConversation(state, { conversationId: id }) || []),
	};

	// TODO: Move to map
	if ( type === CONVERSATION_TYPE__CHANNEL ) {
		result.contacts = selectContacts(state);
	}

	return result;
})(Messages);
