import {
	selectConversationsByLastUpdate,
	selectConversationsCurrent,
} from '../../selectors';
import { connect } from 'react-redux';

import { setCurrentConversation } from '../../actions';

import List from './list';


export default connect((state) => {
 return {
 	currentConversationId: selectConversationsCurrent(state),
 	conversations: selectConversationsByLastUpdate(state),
 };
}, (dispatch) => ({
	onOpenConversation: (id) => dispatch(setCurrentConversation(id)),
}))(List);
