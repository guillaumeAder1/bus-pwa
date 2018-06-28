import React, { Component } from 'react'
import { Modal, Input } from 'antd';

/**
 * Modal displaying input fields to be edited...
 * @param {props} props params
 * 
 */
const Editor = (props) => {


    const callback = (bool) => {
        props.onUpdate(false)
    }

    return (
        <Modal
            title="Vertically centered modal dialog"
            wrapClassName="vertical-center-modal"
            visible={props.visible}
            onOk={() => callback(false)}
            onCancel={() => callback(false)}>

            {
                props.data && Object.keys(props.data).map((e, i) => {
                    return (
                        <div key={i}>
                            <b>{e}:</b>
                            <Input size="large" defaultValue={props.data[e]} />
                        </div>
                    )
                })
            }

        </Modal >
    )

}

export default Editor;


