import { connect } from 'react-redux';

import { getEntityProps } from '../../../utils/index';

import Item from './item';


export default connect((state, props) => {
	return {
		...props,
		...getEntityProps({ type: props.type, entityId: props.entityId, state }),
	};
})(Item);

