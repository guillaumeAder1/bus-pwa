import React from 'react';
import { message } from 'antd';

/**
 * 
 * @param {Object} props params
 * @param {String} props.level level of message, success/error/info/warning/warn/loading 
 * @param {String} props.message text to display
 * @param {Number} props.duration delay 
 */
const Notif = (props) => {
    const level = props.level || 'success';
    const text = props.message || 'Operation completed';
    const duration = props.duration || 1;
    message[level](text, duration)

}


export default Notif