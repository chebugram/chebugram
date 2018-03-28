import { selectConversation } from '../../../selectors';
import { selectApp } from '../../../../app/selectors';
import { connectAdvanced } from 'react-redux';

import { getEntityProps } from '../../../utils';

import { openImageModal } from '../../../../app/actions';
import { setCurrentConversation } from '../../../../conversations/actions';

import { APP_PLATFORM__MOBILE } from '../../../../../core/constants';

import Header from './header';


export default connectAdvanced((dispatch) => (state, { id }) => {
	const conversation = selectConversation(state, { id });

	return {
		...getEntityProps({ type: conversation.type, entityId: conversation.entityId, state }),
		messages: [],
		displayShowConversationListButton: selectApp(state).platform === APP_PLATFORM__MOBILE,

		onOpenConversationInfo: () => dispatch(openImageModal({
			type: conversation.type,
			entityId: conversation.entityId,
		})),

		onShowConversationList: () => {
			dispatch(setCurrentConversation(null));
		},
	};
})(Header);
