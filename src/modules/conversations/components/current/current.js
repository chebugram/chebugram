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

		this.state = {
			message: '',
		};
	}

	_handleMessageChange = (message) => {
		this.setState({
			message: message,
		});
	}

	_handleAddMessage = () => {
		const {
			id,
			onAddMessage,
		} = this.props;

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
				<div className={messagesCssClass}>
					<Messages
						id={this.props.id}
					/>
				</div>

				{ !this.props.readOnly && (
					<div className={footerCssClass}>
						<Editor
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
