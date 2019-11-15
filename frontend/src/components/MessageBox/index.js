import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {ModalMessageBox} from './ModalMessageBox';

import {resetMessage} from '../../store'

const mapStateToProps = state => ({
	message: state.message
})

export const MessageBox = connect(mapStateToProps, {resetMessage})(props => {
	const {message, resetMessage} = props;
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		if(message){
			setDisplay(true)
		}else{
			setDisplay(false)
		}
	}, [message])

	return ReactDOM.createPortal(
		<ModalMessageBox 
		message={message} 
		display={display}
		resetMessage={resetMessage} 
		/>, document.body)
})