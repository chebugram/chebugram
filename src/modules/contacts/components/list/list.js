import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getLocalizedName } from '../../../../core/locale/utils';

import ContactsListItem from '../list-item/item';


const baseCssClass = 'contacts-list';


export default class ContactsList extends Component {
	static propTypes = {
		contacts: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				firstName: PropTypes.string.isRequired,
				lastName: PropTypes.string.isRequired,
				avatar: PropTypes.string.isRequired,
			})
		).isRequired,

		onOpenConversation: PropTypes.func,
	};

	_handleItemClick = (contactId) => {
		const {
			onOpenConversation,
		} = this.props;

		if ( onOpenConversation ) {
			onOpenConversation({ contactId });
		}
	};

	render () {
		return (
			<div className={baseCssClass}>
				{this.props.contacts.map((contact) => (
					<ContactsListItem
						key={contact.id}
						id={contact.id}
						name={getLocalizedName(contact)}
						avatar={contact.avatarUrl}

						onClick={this._handleItemClick}
					/>
				))}
			</div>
		);
	}
}
