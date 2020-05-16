import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'


function AlertBox(props) {
    return <Alert key="1" show={props.isOpen} className="alert-absolute" onClick={props.OnAlertClick} variant="danger" >
        {props.message}
    </Alert>
}

export default AlertBox;