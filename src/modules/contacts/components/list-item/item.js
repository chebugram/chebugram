import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const baseCssClass = 'contacts-list-item';
const avatarCssClass = `${baseCssClass}__avatar`;
const infoCssClass = `${baseCssClass}-info`;
const infoNameCssClass = `${infoCssClass}__name`;


// TODO: add handling of avatar loading error
export default class ContactsListItem extends PureComponent {
	static propTypes = {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,

		onClick: PropTypes.func,
	};

	_handleClick = () => {
		const {
			onClick,
		} = this.props;

		if ( onClick ) {
			onClick(this.props.id);
		}
	};

	render () {
		return (
			<div
				className={baseCssClass}
				onClick={this._handleClick}
			>
				<div className={avatarCssClass}>
					<img src={this.props.avatar} alt={''} />
				</div>
				<div className={infoCssClass}>
					<div className={infoNameCssClass}>{this.props.name}</div>
				</div>
			</div>
		);
	}
}
