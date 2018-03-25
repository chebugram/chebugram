import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConversationsList from '../../../conversations/components/list';
import ConversationsCurrent from '../../../conversations/components/current';

import './styles/entry.css';


const baseCssClass = 'app-entry';
const conversationsCssClass = `${baseCssClass}__conversations`;
const currentConversationCssClass = `${baseCssClass}__current-conversation`;


export default class AppEntry extends Component {
	static propTypes = {
		currentConversationId: PropTypes.string,
	};

	render () {
		return (
			<div className={baseCssClass}>
				<div className={conversationsCssClass}>
					<ConversationsList />
				</div>
				{ this.props.currentConversationId && (
					<div className={currentConversationCssClass}>
						<ConversationsCurrent
							id={this.props.currentConversationId}
						/>
					</div>
				) }
			</div>
		);
	}
}
