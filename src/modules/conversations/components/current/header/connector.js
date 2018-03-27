import { selectConversation } from '../../../selectors';
import { connectAdvanced } from 'react-redux';

import { isSmallScreen } from '../../../../../core/utils';
import { getEntityProps } from '../../../utils';

import { openImageModal, showContersationList } from '../../../../app/actions';
import { setCurrentConversation } from '../../../../conversations/actions';

import Header from './header';


export default connectAdvanced((dispatch) => (state, { id }) => {
	const conversation = selectConversation(state, { id });

	return {
		...getEntityProps({ type: conversation.type, entityId: conversation.entityId, state }),
		messages: [],
		displayShowConversationListButton: isSmallScreen(),

		onOpenConversationInfo: () => dispatch(openImageModal({
			type: conversation.type,
			entityId: conversation.entityId,
		})),

		onShowConversationList: () => {
			dispatch(showContersationList(true));
			dispatch(setCurrentConversation(null));
		},
	};
})(Header);
