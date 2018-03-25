import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/item.css';


const baseCssClass = 'conversations-list-item';
const imageCssClass = `${baseCssClass}__image`;
const titleCssClass = `${baseCssClass}__title`;


export default class ConversationsListItem extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,

		onClick: PropTypes.func,
	};

	_handleClick = () => {
		const {
			onClick,
		} = this.props;

		if ( onClick ) {
			onClick(this.props.id);
		}
	}

	render () {
		const {
			image,
		} = this.props;

		return (
			<div
				className={baseCssClass}
				onClick={this._handleClick}
			>
				{ true /*image*/ && (
					<div className={imageCssClass}><img src={image} alt={''} /></div>
				) }
				<div className={titleCssClass}>{this.props.title}</div>
			</div>
		);
	}
}
