import React from 'react'
import { Modal } from 'antd';


const Editor = (props) => {

    const save = () => {
        console.log('save')
    }
    return (
        <Modal
            title="Vertically centered modal dialog"
            wrapClassName="vertical-center-modal"
            visible={props.visible}
            onOk={() => save(false)}
            onCancel={() => !props.visible}
        >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
        </Modal>
    )
}

export default Editor;