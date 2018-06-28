import React, { Fragment } from 'react'
import { Modal, Input, TimePicker, Select } from 'antd';
import moment from 'moment';
const Option = Select.Option;

/**
 * Modal displaying input fields to be edited...
 * @param {props} props params
 * 
 */
const Editor = (props) => {

    /**
     * callback passed to parent component index.js
     * @param {*} bool    
     * 
     * */
    const callback = (bool) => {
        props.onUpdate(false)
    }

    /** 
     * @param {String} field fields name e.g. busstopid/stopname/filter/time
     * @param {String} value field value...
     */
    const createInputType = (field, value) => {
        const format = 'HH:mm';
        switch (field) {
            case 'busstopid':
                return (<Fragment><b>{field}</b> <Input size="large" defaultValue={value} /></Fragment>)

                break;
            case 'stopname':
                return (<Fragment><b>{field}</b> <Input size="large" defaultValue={value} /></Fragment>)

                break;
            case 'filter':
                const elements = Object.keys(props.buslist).map(e => <Option key={e}>{e.toString()}</Option>)
                const select = (<Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                >
                    {elements}
                </Select>)
                return (<Fragment><b>{field}</b> {select}</Fragment>)

                break;
            case 'time':
                return (<Fragment><b>{field}</b> <TimePicker defaultValue={moment(value, format)} format={format} /></Fragment>)
                break;
            default:
                return (<Fragment><b>{field}</b> <Input size="large" defaultValue={value} /></Fragment>)
                break;
        }
    }

    return (
        <Modal
            title="Vertically centered modal dialog"
            wrapClassName="vertical-center-modal"
            visible={props.visible}
            onOk={() => callback(false)}
            onCancel={() => callback(false)}>

            {
                props.data && Object.keys(props.data).map((key, i) => {
                    return (
                        <div key={i}>
                            {createInputType(key, props.data[key])}

                            {/* <b>{key}</b>
                            <Input size="large" defaultValue={props.data[key]} /> */}
                        </div>
                    )
                })
            }

        </Modal >
    )

}

export default Editor;


