import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import './styles/item.css';


const baseCssClass = 'conversations-list-item';
const imageCssClass = `${baseCssClass}__image`;
const titleCssClass = `${baseCssClass}__title`;


export default class ConversationsListItem extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		unreadMessages: PropTypes.number.isRequired,

		selected: PropTypes.bool.isRequired,

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
				className={classnames([
					baseCssClass,
					this.props.selected && `${baseCssClass}__m-selected`,
				])}
				onClick={this._handleClick}
			>
				{ true /*image*/ && (
					<div className={imageCssClass}><img src={image} alt={''} /></div>
				) }
				<div className={titleCssClass}>{this.props.title}</div>
				{ (this.props.unreadMessages > 0) && (
					<div>{this.props.unreadMessages}</div>
				)}
			</div>
		);
	}
}
