import React from 'react'
import { Toolbar } from 'primereact/components/toolbar/Toolbar';
import { Button } from 'primereact/components/button/Button'
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';

import json from './busdata.json'

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            alerts: []
        };
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        //this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
        // const url = "https://www.primefaces.org/primereact/showcase/resources/demo/data/cars-small.json"
        // fetch(url).then(function (response) {
        //     return response.json();
        // }).then(function (data) {
        //     console.log(data);
        //     data => this.setState({ cars: data })
        // });
        console.log(json)

        const alerts = json.alerts.map(e => {
            return {
                busstopid: e.busstopid,
                time: e.time,
                stopname: e.stopname,
                filter: e.filter.join(', ')
            }
        })
        this.setState({
            alerts: alerts
        })
    }

    rowExpansionTemplate(data) {

        return <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-md-3" style={{ textAlign: 'center', borderRight: '1px solid #cccccc' }}>
                {/* <img src={} alt={data.brand} /> */}
            </div>
            <div className="ui-g-12 ui-md-9">
                <div className="ui-g">


                    <div className="ui-md-2">Stop Id </div>
                    <div className="ui-md-10" style={{ fontWeight: 'bold' }}>{data.busstopid}</div>

                    <div className="ui-md-2">Name: </div>
                    <div className="ui-md-10" style={{ fontWeight: 'bold' }}>{data.stopname}</div>

                    <div className="ui-md-2">time: </div>
                    <div className="ui-md-10" style={{ fontWeight: 'bold' }}>{data.time}</div>

                    <div className="ui-md-2">Bus lines: </div>
                    <div className="ui-md-10" style={{ fontWeight: 'bold' }}>{data.filter}</div>
                </div>
            </div>
        </div>;
    }

    render() {
        return (
            <React.Fragment>

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Settings</h1>
                        <p>Create or edits your alerts</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <Toolbar>
                        <div className="ui-toolbar-group-left">
                            <Button label="create new alert" icon="pi pi-plus" />
                            <Button label="save all changes" icon="pi pi-check" className="ui-button-warning" />
                        </div>
                    </Toolbar>

                    <div className="content-section implementation">
                        <DataTable value={this.state.alerts} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                            rowExpansionTemplate={this.rowExpansionTemplate}>
                            <Column expander={true} style={{ width: '2em' }} />
                            <Column field="busstopid" header="stop id" />
                            <Column field="stopname" header="name" />
                            <Column field="time" header="time" />
                            <Column field="filter" header="bus lines" />
                        </DataTable>
                    </div>

                </div>
            </React.Fragment >

        )
    }
}



export default Settings