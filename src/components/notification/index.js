import React from 'react';
import { message } from 'antd';

/**
 * 
 * @param {Object} props params
 * @param {String} props.level level of message, success/error/info/warning/warn/loading 
 * @param {String} props.message text to display
 * @param {Number} props.duration delay in seconde
 */
const Notif = (props) => {
    const level = props.level || 'success';
    const text = props.message || 'Operation completed';
    const duration = props.duration || 1;
    const onClose = props.onClose || function () { console.log('Notif Message closes') };
    message[level](text, duration, onClose)

}


export default Notif