import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { APP_PLATFORM__MOBILE } from '../../../../core/constants';

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
		platform: PropTypes.string.isRequired,

		onCloseModalImage: PropTypes.func.isRequired,
	};

	componentDidMount () {
		// TODO add lodash debounce
		window.addEventListener('resize', this._handleWindowResize, false);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this._handleWindowResize, false);
	}

	_handleWindowResize = () => {
		this.forceUpdate();
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
			<div
				className={classnames([
					baseCssClass,
					this.props.platform === APP_PLATFORM__MOBILE && `${baseCssClass}__m-small-screen`,
				])}
			>
				{this._renderModalImage()}
				<Entry />
			</div>
		);
	}
}
