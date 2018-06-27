import React from 'react'
import { Toolbar } from 'primereact/components/toolbar/Toolbar';
// import { Button } from 'primereact/components/button/Button'
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
// import { Growl } from 'primereact/components/growl/Growl';

import json from './busdata.json'
import { Table, Modal, Button, notification } from 'antd';
import Editor from './editor'

class Settings extends React.Component {
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
        localStorage.setItem("alerts", JSON.stringify(this.state.alerts));
        notification.open({
            message: 'Success',
            description: 'All alerts saved',
        })
    }
    setEditor(visible, data) {
        this.setState({ editor: visible, currentRow: data });
    }
    render() {
        // const handleRowSelection = {
        //     onChange: (selectedRowKeys, selectedRows) => {
        //         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        //     },
        //     onSelect: (record, selected, selectedRows) => {
        //         console.log(record, selected, selectedRows);
        //     },
        //     onSelectAll: (selected, selectedRows, changeRows) => {
        //         console.log(selected, selectedRows, changeRows);
        //     },
        // };

        return (
            <React.Fragment>

                {
                    this.state.alerts &&
                    <Table
                        pagination={false}
                        columns={this.columns}
                        dataSource={this.state.alerts}
                        // rowSelection={handleRowSelection}
                        onRow={record => ({
                            onClick: (e) => this.setEditor(true, record)
                        })}
                    />

                }
                <Editor visible={this.state.editor} data={this.state.currentRow} />
            </React.Fragment >

        )
    }
}



export default Settings