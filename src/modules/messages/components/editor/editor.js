import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/editor.css';


const baseCssClass = 'message-editor';
const textFieldWrapperCssClass = `${baseCssClass}__text-field-wrapper`;
const textFieldCssClass = `${baseCssClass}__text-field`;
const addButtonWrapperCssClass = `${baseCssClass}__add-button-wrapper`;
const addButtonCssClass = `${baseCssClass}__add-button`;


export default class MessagesEditor extends Component {
	static propTypes = {
		message: PropTypes.string.isRequired,

		onMessageChange: PropTypes.func.isRequired,
		onAddMessage: PropTypes.func,
	};

	_handleMessageChange = (event) => {
		this.props.onMessageChange(event.currentTarget.value);
	}

	render () {
		return (
			<div className={baseCssClass}>
				<div className={textFieldWrapperCssClass}>
					<textarea
						className={textFieldCssClass}
						placeholder={'Ваше сообщение'}
						value={this.props.message}

						onChange={this._handleMessageChange}
					></textarea>
				</div>
				<div className={addButtonWrapperCssClass}>
					<button
						className={addButtonCssClass}

						onClick={this.props.onAddMessage}
					>Add</button>
				</div>
			</div>
		);
	}
}
