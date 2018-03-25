import { connect } from 'react-redux';

import { selectConversation } from '../../selectors';
import { addMessage } from '../../../messages/actions';

import Current from './current';


export default connect((state, { id }) => {
	return {
		...selectConversation(state, { id }),
	};
}, (dispatch) => ({
	onAddMessage: (data) => dispatch(addMessage(data)),
}))(Current);
