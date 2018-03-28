import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import './styles/item.css';


const baseCssClass = 'conversations-list-item';
const imageCssClass = `${baseCssClass}__image`;
const contentCssClass = `${baseCssClass}__content`;
const headerCssClass = `${baseCssClass}__header`;
const footerCssClass = `${baseCssClass}__footer`;
const titleCssClass = `${baseCssClass}__title`;
const metaCssClass = `${baseCssClass}__meta`;
const lastUpdateCssClass = `${baseCssClass}__last-update`;
const unreadMessagesCountCssClass = `${baseCssClass}__unread-messages-count`;


export default class ConversationsListItem extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		unreadMessages: PropTypes.number.isRequired,
		lastUpdate: PropTypes.string.isRequired,

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
				{ image && (
					<div className={imageCssClass}><img src={image} alt={''} /></div>
				) }
				<div className={contentCssClass}>
					<div className={headerCssClass}>
						<div className={titleCssClass}>{this.props.title}</div>
						<div className={lastUpdateCssClass}>{this.props.lastUpdate}</div>
					</div>
					<div className={footerCssClass}>
						<div className={metaCssClass} />
						{ (this.props.unreadMessages > 0) && (
							<div className={unreadMessagesCountCssClass}>
								{(this.props.unreadMessages < 100 ? this.props.unreadMessages : '99+')}
							</div>
						)}
					</div>
				</div>


			</div>
		);
	}
}
