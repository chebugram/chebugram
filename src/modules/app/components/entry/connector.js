import { connect } from 'react-redux';

import { selectConversationsCurrent } from '../../../conversations/selectors';

import Entry from './entry';


export default connect((state) => {
	return {
		currentConversationId: selectConversationsCurrent(state),
	};
})(Entry);
