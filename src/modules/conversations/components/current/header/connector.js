import { selectConversation } from '../../../selectors';
import { connectAdvanced } from 'react-redux';

import { openImageModal} from '../../../../app/actions';

import Header from './header';
import { getEntityProps } from '../../../utils';


export default connectAdvanced((dispatch) => (state, { id }) => {
	const conversation = selectConversation(state, { id });

	return {
		...getEntityProps({ type: conversation.type, entityId: conversation.entityId, state }),
		messages: [],

		onImageClick: () => dispatch(openImageModal({
			type: conversation.type,
			entityId: conversation.entityId,
		})),
	};
})(Header);
