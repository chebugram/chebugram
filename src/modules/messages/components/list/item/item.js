import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import './styles/item.css';


const baseCssClass = 'messages-list-item';
const contentCssClass = `${baseCssClass}__content`;
const messageCssClass = `${baseCssClass}__message`;
const timeCssClass = `${baseCssClass}__time`;


export default class MessagesListItem extends PureComponent {
	static propTypes = {
		id: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired,
		my: PropTypes.bool.isRequired,
	}

	render () {
		return (
			<div
				className={classnames([
					baseCssClass,
					this.props.my && `${baseCssClass}__m-my`,
				])}
			>
				<div className={contentCssClass}>
					<div className={messageCssClass}>{this.props.message}</div>
					<div className={timeCssClass}>{this.props.time}</div>
				</div>
			</div>
		);
	}
}
