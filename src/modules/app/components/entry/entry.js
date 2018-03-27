import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ConversationsList from '../../../conversations/components/list';
import ConversationsCurrent from '../../../conversations/components/current';

import './styles/entry.css';


const baseCssClass = 'app-entry';
const contentCssClass = `${baseCssClass}__content`;
const conversationsCssClass = `${baseCssClass}__conversations`;
const currentConversationCssClass = `${baseCssClass}__current-conversation`;


export default class AppEntry extends Component {
	static propTypes = {
		showConversationList: PropTypes.bool.isRequired,
		currentConversationId: PropTypes.string,
	};

	render () {
		return (
			<div className={baseCssClass}>
				<div className={contentCssClass}>
					<div
						className={classnames([
							conversationsCssClass,
							!this.props.showConversationList && `${conversationsCssClass}__m-hidden`,
						])}
					>
						<ConversationsList />
					</div>
					{ this.props.currentConversationId && (
						<div className={currentConversationCssClass}>
							<ConversationsCurrent
								key={this.props.currentConversationId}
								id={this.props.currentConversationId}
							/>
						</div>
					) }
				</div>
			</div>
		);
	}
}
