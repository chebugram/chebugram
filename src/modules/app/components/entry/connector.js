import { connect } from 'react-redux';

import { selectConversationsCurrent } from '../../../conversations/selectors';
import { selectApp } from '../../selectors';

import Entry from './entry';


export default connect((state) => {
	return {
		showConversationList: selectApp(state).showConversationList,
		currentConversationId: selectConversationsCurrent(state),
	};
})(Entry);
