import React, { Component } from 'react'
import { Modal, Input } from 'antd';


const Editor = (props) => {

    let visible = props.visible

    const callback = (bool) => {
        console.log(bool)
        visible = false
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


