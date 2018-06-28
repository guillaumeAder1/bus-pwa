import React, { Component, Fragment } from 'react'
import json from './busdata.json'
import { Table, Button, Card } from 'antd';
import Notif from '../notification'
import Editor from './editor'
const ButtonGroup = Button.Group;


/**
 * Settings - table to create, edit remove alert 
 */
class Settings extends Component {
    constructor() {
        super();
        this.state = {
            alerts: [],
            editor: false,
            currentRow: null
        };
        this.columns = [{
            title: 'Stop',
            dataIndex: 'busstopid',
            key: 'busstopid',
            width: '20%'
        }, {
            title: 'Label',
            dataIndex: 'stopname',
            key: 'stopname',
            width: '30%'

        }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: '20%'

        }, {
            title: 'Bus lines',
            dataIndex: 'filter',
            key: 'filter',
            width: '30%'

        }];
    }

    componentDidMount() {

        this.setState({
            alerts: json.alerts.map((e, i) => {
                return {
                    key: e.busstopid,
                    busstopid: e.busstopid,
                    time: e.time,
                    stopname: e.stopname,
                    filter: e.filter.join(', ')
                }
            })
        })
    }

    save() {
        Notif({
            level: 'loading',
            message: 'Saving alerts'
        });
        setTimeout(() => {
            localStorage.setItem("alerts", JSON.stringify(this.state.alerts));
            Notif({
                level: 'success',
                message: 'All alerts saved'
            });
        }, 1500)

    }
    setEditor(visible, data) {
        this.setState({ editor: visible, currentRow: data });
    }
    render() {

        return (
            <Card
                bodyStyle={{ padding: '10px' }}
                title="Settings">

                {
                    this.state.alerts &&
                    <Fragment>
                        <ButtonGroup>
                            <Button onClick={() => this.save()} type="primary" icon="check-circle-o" >Save</Button>
                            <Button type="danger" icon="close-circle-o" >Cancel</Button>
                        </ButtonGroup>
                        <Table
                            pagination={false}
                            columns={this.columns}
                            dataSource={this.state.alerts}
                            onRow={record => ({
                                onClick: (e) => this.setEditor(true, record)
                            })}
                        />
                    </Fragment>


                }
                <Editor
                    visible={this.state.editor}
                    data={this.state.currentRow}
                    onUpdate={(bool, data) => this.setEditor(bool, data)} />
            </Card >

        )
    }
}



export default Settings