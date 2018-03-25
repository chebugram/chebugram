import React, { Component } from 'react';
import PropTypes from 'prop-types';


import MessagesListItem from './item';

const baseCssClass = 'messages-list';


export default class ConversationsCurrentMessages extends Component {
	static propTypes = {
		messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	}

	render () {
		return (
			<div className={baseCssClass}>
				{this.props.messages.map((message) => (
					<MessagesListItem
						key={message.id}
						id={message.id}
						message={message.message}
						my={message.my}
						time={'12:23'}
					/>
				))}
			</div>
		);
	}
}
