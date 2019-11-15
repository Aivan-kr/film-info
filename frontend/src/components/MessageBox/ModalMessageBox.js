import React from 'react';

export const ModalMessageBox = props => {
	const {display, message, resetMessage} = props;
	return (
		<div className="modal" style={display ? {display: "block"} : {}}>
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-body">
		        <p>{message}</p>
		      </div>
		      <div className="modal-footer">
		        <button className="btn btn-secondary" onClick={() => resetMessage()}>Close</button>
		      </div>
		    </div>
		  </div>
		</div>
	)
}