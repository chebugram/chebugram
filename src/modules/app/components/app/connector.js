import { connect } from 'react-redux';

import { closeImageModal } from '../../actions';
import { selectApp } from '../../selectors';

import { getEntityProps } from '../../../conversations/utils';

import App from './app';


export default connect((state) => {
	const app = selectApp(state);

	return {
		modalImage: {
			opened: app.modalImageOpened,
			image: (app.modalImageOpened
				? getEntityProps({ type: app.modalImageType, entityId: app.modalImageEntityId, state }).image
				: ''
			),
		},
	};
}, (dispatch) => ({
	onCloseModalImage: () => dispatch(closeImageModal()),
}))(App);
