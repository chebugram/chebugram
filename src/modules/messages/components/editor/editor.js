import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isSmallScreen } from '../../../../core/utils';

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

	constructor (props, context) {
		super(props, context);

		this._textFieldEl = null;
	}

	componentDidMount () {
		if ( this._textFieldEl && !isSmallScreen() ) {
			this._textFieldEl.focus();
		}
	}

	componentWillReceiveProps (nextProps) {
		if (
			nextProps.message.length === 0 &&
			this.props.message.length > 0 &&
			!isSmallScreen()
		) {
			if ( this._textFieldEl ) {
				this._textFieldEl.focus();
			}
		}
	}

	_handleMessageChange = (event) => {
		this.props.onMessageChange(event.currentTarget.value);
	};

	_handleTextFieldRef = (el) => {
		this._textFieldEl = el;
	};

	_handleTextFieldKeyDown = (event) => {
		if ( event.ctrlKey && event.key === 'Enter' ) {
			this.props.onAddMessage();
		}
	};

	render () {
		return (
			<div className={baseCssClass}>
				<div className={textFieldWrapperCssClass}>
					<textarea
						className={textFieldCssClass}
						placeholder={'Ваше сообщение'}
						value={this.props.message}

						ref={this._handleTextFieldRef}
						onChange={this._handleMessageChange}
						onKeyDown={this._handleTextFieldKeyDown}
					></textarea>
				</div>
				<div className={addButtonWrapperCssClass}>
					<div
						className={addButtonCssClass}

						onClick={this.props.onAddMessage}
					/>
				</div>
			</div>
		);
	}
}
