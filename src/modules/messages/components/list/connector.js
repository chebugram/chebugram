import { selectMessagesForConversation } from '../../selectors';
import { connect } from 'react-redux';

import Messages from './messages';


export default connect((state, { id }) => {
	return {
		messages: (selectMessagesForConversation(state, { conversationId: id }) || []),
	};
})(Messages);
