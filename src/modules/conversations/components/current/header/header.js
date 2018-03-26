import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/header.css';


const baseCssClass = 'conversations-current-header';
const imageCssClass = `${baseCssClass}__image`;
const titleCssClass = `${baseCssClass}__title`;


export default class ConversationsCurrentHeader extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,

		onImageClick: PropTypes.func,
	};

	render () {
		const {
			image,
			onImageClick,
		} = this.props;

		return (
			<div className={baseCssClass}>
				{ image && (
					<div
						className={imageCssClass}
						onClick={onImageClick}
					><img src={image} alt={''} /></div>
				) }
				<div className={titleCssClass}>{this.props.title}</div>
			</div>
		);
	}
}
