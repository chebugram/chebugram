import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	CONVERSATION_TYPE__CONTACT,
	CONVERSATION_TYPE__CHANNEL,
} from '../../../conversations/constants';

import {
	getLocalizedName,
} from '../../../../core/locale/utils';

import {
	getMessageTime,
} from '../../utils';

import MessagesListItem from './item';

import './styles/messages.css';


const baseCssClass = 'messages-list';


export default class ConversationsCurrentMessages extends Component {
	static propTypes = {
		messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
		type: PropTypes.string.isRequired,
		contacts: PropTypes.object,
	};

	_renderMessages () {
		switch (this.props.type) {
			case CONVERSATION_TYPE__CONTACT:
				return this._renderContactMessages();

			case CONVERSATION_TYPE__CHANNEL:
				return this._renderChannelMessages();

			default:
				return null;
		}
	}

	_renderContactMessages () {
		return this.props.messages.map((message) => (
			<MessagesListItem
				key={message.id}
				id={message.id}
				message={message.message}
				my={message.my}
				time={getMessageTime(message.time)}
			/>
		));
	}

	_renderChannelMessages () {
		return this.props.messages.map((message) => {
			const props = {
				key: message.id,
				id:message.id,
				message: message.message,
				my: (message.my === true),
				time: getMessageTime(message.time),
			};

			if ( !props.my ) {
				const contact = this.props.contacts[message.contactId];

				props.contactId = contact.id;
				props.contactName = getLocalizedName(contact);
				props.contactAvatarUrl = contact.avatarUrl;
			}

			return (
				<MessagesListItem {...props} />
			);
		});
	}

	render () {
		return (
			<div className={baseCssClass}>
				{this._renderMessages()}
			</div>
		);
	}
}
