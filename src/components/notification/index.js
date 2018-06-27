import React from 'react';
import { message } from 'antd';


const Notif = (props) => {

    message[props.level](props.message)

}


export default Notif