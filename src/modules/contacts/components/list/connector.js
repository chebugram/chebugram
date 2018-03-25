import { selectContacts } from '../../selectors';
import { connect } from 'react-redux';

import List from './list';


export default connect((state) => {
 return {
 	contacts: selectContacts(state),
 };
}, (dispatch) => ({
	onOpenConversation: (data) => console.dir(`open conversation contactId: ${data.contactId}`),
}))(List);
