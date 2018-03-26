import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Entry from '../entry';

import './styles/app.css';


const baseCssClass = 'app';
const modalImageCssClass = `${baseCssClass}-modal-image`;


export default class AppEntry extends Component {
	static propTypes = {
		modalImage: PropTypes.shape({
			opened: PropTypes.bool.isRequired,
			image: PropTypes.string,
		}).isRequired,

		onCloseModalImage: PropTypes.func.isRequired,
	};

	_renderModalImage () {
		if ( !this.props.modalImage.opened ) {
			return null;
		}

		return (
			<div
				className={modalImageCssClass}
				onClick={this.props.onCloseModalImage}
			><img src={this.props.modalImage.image} alt={''} /></div>
		);
	}

	render () {
		return (
			<div className={baseCssClass}>
				{this._renderModalImage()}
				<Entry />
			</div>
		);
	}
}
