import React, { Component } from 'react'
import { Modal, Input } from 'antd';


class Editor extends Component {
    constructor(props) {
        super()
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.setState({
            visible: this.props.visible
        })
    }

    callback(bool, save) {
        this.setState({
            visible: bool
        })
        this.props.onUpdate(bool, save)

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
        return true
    }
    render() {
        return (
            <Modal
                title="Vertically centered modal dialog"
                wrapClassName="vertical-center-modal"
                visible={this.state.visible}
                onOk={() => this.callback(false)}
                onCancel={() => this.callback(false)}>

                {
                    this.props.data && Object.keys(this.props.data).map((e, i) => {
                        return (
                            <div key={i}>
                                <b>{e}:</b>
                                <Input size="large" defaultValue={this.props.data[e]} />
                            </div>
                        )
                    })
                }

            </Modal >
        )
    }

}

export default Editor;


