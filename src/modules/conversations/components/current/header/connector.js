import { selectConversation } from '../../../selectors';
import { connect } from 'react-redux';

import Header from './header';
import { getEntityProps } from '../../../utils';


export default connect((state, { id }) => {
	const conversation = selectConversation(state, { id });

	return {
		...getEntityProps({ type: conversation.type, entityId: conversation.entityId, state }),
		messages: [],
	};
})(Header);
