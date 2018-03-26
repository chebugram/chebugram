import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Messages from '../../../messages/components/list';
import Editor from '../../../messages/components/editor';

import './styles/current.css';


const baseCssClass = 'conversations-current';
const headerCssClass = `${baseCssClass}__header`;
const messagesCssClass = `${baseCssClass}__messages`;
const footerCssClass = `${baseCssClass}__footer`;


export default class ConversationsCurrent extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		entityId: PropTypes.string.isRequired,
		readOnly: PropTypes.bool.isRequired,

		onAddMessage: PropTypes.func,
	};

	constructor (props, context) {
		super(props, context);

		this._messagesEl = null;

		this._scrollToBottom = true;

		this.state = {
			message: '',
		};
	}

	componentWillUnmount () {
		this._messagesEl = null;
	}

	componentDidUpdate () {
		if ( !this._scrollToBottom ) {
			return;
		}

		setTimeout(() => {
			if ( this._messagesEl ) {
				this._messagesEl.scrollTop = this._messagesEl.scrollTop + this._messagesEl.offsetHeight;
			}
		}, 0);
	}

	_handleMessagesRef = (el) => {
		this._messagesEl = el;
	}

	_handleMessageChange = (message) => {
		this.setState({
			message: message,
		});
	};

	_handleAddMessage = () => {
		const {
			id,
			onAddMessage,
		} = this.props;

		if ( this.state.message.trim().length === 0 ) {
			return;
		}

		if ( onAddMessage ) {
			onAddMessage({
				message: this.state.message,
				conversationId: id,
			});

			this.setState({
				message: '',
			});
		}
	};

	_handleMessageScroll = () => {
		this._scrollToBottom = (this._messagesEl.scrollTop + this._messagesEl.offsetHeight) === this._messagesEl.scrollHeight;
	};

	render () {
		return (
			<div className={baseCssClass}>
				<div className={headerCssClass}>
					<Header
						id={this.props.id}
						title={this.props.title}
						image={this.props.image}
					/>
				</div>
				<div
					className={messagesCssClass}
					ref={this._handleMessagesRef}

					onScroll={this._handleMessageScroll}
				>
					<Messages
						id={this.props.id}
						type={this.props.type}
					/>
				</div>

				{ !this.props.readOnly && (
					<div className={footerCssClass}>
						<Editor
							key={this.props.id}
							message={this.state.message}

							onMessageChange={this._handleMessageChange}
							onAddMessage={this._handleAddMessage}
						/>
					</div>
				) }
			</div>
		);
	}
}
