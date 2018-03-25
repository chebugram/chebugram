import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	getConversationTime,
} from '../../utils';

import ConversationsListItem from './item';


const baseCssClass = 'conversations-list';


export default class ConversationsList extends Component {
	static propTypes = {
		currentConversationId: PropTypes.string,
		conversations: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				type: PropTypes.string.isRequired,
				readOnly: PropTypes.bool.isRequired,
				entityId: PropTypes.string.isRequired,
				lastUpdate: PropTypes.number.isRequired,
				unreadMessages: PropTypes.number.isRequired,
			})
		).isRequired,

		onOpenConversation: PropTypes.func,
	};

	_handleItemClick = (id) => {
		const {
			onOpenConversation,
		} = this.props;

		if ( onOpenConversation ) {
			onOpenConversation(id);
		}
	};

	render () {
		return (
			<div className={baseCssClass}>
				{this.props.conversations.map((conversation) => (
					<ConversationsListItem
						key={conversation.id}
						id={conversation.id}
						type={conversation.type}
						entityId={conversation.entityId}
						unreadMessages={conversation.unreadMessages}
						lastUpdate={getConversationTime(conversation.lastUpdate)}

						selected={this.props.currentConversationId === conversation.id}

						onClick={this._handleItemClick}
					/>
				))}
			</div>
		);
	}
}
