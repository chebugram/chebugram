import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import './styles/item.css';


const baseCssClass = 'messages-list-item';
const contentCssClass = `${baseCssClass}__content`;
const messageCssClass = `${baseCssClass}__message`;
const timeCssClass = `${baseCssClass}__time`;
const contactAvatarCssClass = `${baseCssClass}__contact-avatar`;
const contactNameCssClass = `${baseCssClass}__contact-name`;


export default class MessagesListItem extends PureComponent {
	static propTypes = {
		id: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired,
		my: PropTypes.bool,

		contactId: PropTypes.string,
		contactName: PropTypes.string,
		contactAvatarUrl: PropTypes.string,
	}

	render () {
		return (
			<div
				className={classnames([
					baseCssClass,
					this.props.my && `${baseCssClass}__m-my`,
				])}
			>
				{ this.props.contactAvatarUrl && (
					<div className={contactAvatarCssClass}><img src={this.props.contactAvatarUrl} alt={''} /></div>
				) }
				<div className={contentCssClass}>
					{ this.props.contactName && (
						<div className={contactNameCssClass}>{this.props.contactName}</div>
					) }
					<div
						className={messageCssClass}

						dangerouslySetInnerHTML={{
							__html: this.props.message
						}}
					/>
					<div className={timeCssClass}>{this.props.time}</div>
				</div>
			</div>
		);
	}
}
