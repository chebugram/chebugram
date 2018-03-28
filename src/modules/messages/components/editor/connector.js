import { connect } from 'react-redux';

import { selectApp } from '../../../app/selectors';

import Editor from './editor';


export default connect((state) => {
	const app = selectApp(state);

	return {
		platform: app.platform,
	};
})(Editor);
