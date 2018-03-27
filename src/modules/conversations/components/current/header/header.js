import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/header.css';


const baseCssClass = 'conversations-current-header';
const imageCssClass = `${baseCssClass}__image`;
const titleCssClass = `${baseCssClass}__title`;
const showConversationListButtonCssClass = `${baseCssClass}__show-conversation-list-button`;


export default class ConversationsCurrentHeader extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		displayShowConversationListButton: PropTypes.bool,

		onOpenConversationInfo: PropTypes.func,
		onShowConversationList: PropTypes.func,
	};

	render () {
		const {
			image,
			onOpenConversationInfo,
		} = this.props;

		return (
			<div className={baseCssClass}>
				{ this.props.displayShowConversationListButton && (
					<div
						className={showConversationListButtonCssClass}
						onClick={this.props.onShowConversationList}
					/>
				) }
				{ image && (
					<div
						className={imageCssClass}
						onClick={onOpenConversationInfo}
					><img src={image} alt={''} /></div>
				) }
				<div
					className={titleCssClass}
					onClick={onOpenConversationInfo}
				>{this.props.title}</div>
			</div>
		);
	}
}
