import { selectConversationsByLastUpdate } from '../../selectors';
import { connect } from 'react-redux';

import { setCurrentConversation } from '../../actions';

import List from './list';


export default connect((state) => {
 return {
 	conversations: selectConversationsByLastUpdate(state),
 };
}, (dispatch) => ({
	onOpenConversation: (id) => dispatch(setCurrentConversation(id)),
}))(List);
