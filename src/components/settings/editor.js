import React, { Component } from 'react'
import { Modal, Input } from 'antd';


class Editor extends Component {
    constructor(props) {
        super()
        this.state = {
            visible: false
        }
    }

    callback(bool, save) {

    }

    render() {
        return (
            <Modal
                title="Vertically centered modal dialog"
                wrapClassName="vertical-center-modal"
                visible={this.props.visible}
                onOk={() => this.callback(false)}
                onCancel={() => this.callbacl(false)}>

                {
                    this.props.data && Object.keys(this.props.data).map((e, i) => {
                        return (
                            <div key={i}>
                                <b>{e}:</b>
                                <Input defaultValue={this.props.data[e]} />
                            </div>
                        )
                    })
                }

            </Modal >
        )
    }

}

export default Editor;


