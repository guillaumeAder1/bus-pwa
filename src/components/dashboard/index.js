import React, { Component, Fragment } from 'react'
import Button from 'antd/lib/button';
import { Select, notification } from 'antd';

const Option = Select.Option;

class Dashborad extends Component {
    constructor() {
        super();
        this.state = { alerts: false, selected: false };
    }


    componentDidMount() {
        const list = localStorage.getItem("alerts")
        if (list) {
            this.setState({
                alerts: JSON.parse(list).map(e => {
                    return {
                        label: `${e.busstopid} - ${e.time}`,
                        data: e
                    }
                })
            })
        }
    }


    handleJson(json) {
        if (json.errorcode === "1") {
            this.notification('warning', `no results for stopid: ${json.stopid}`, 'warn');
        } else {
            this.notification('sucess', 'results found', 'open');

            const search = this.state.alerts.filter(e => e.data.busstopid == json.stopid)[0]
            const matching = json.results.filter(e => search.data.filter.indexOf(e.route) > -1)
            this.setState({
                selected: matching
            })
        }
    }

    notification(msg, text, level) {
        notification[level]({
            message: msg,
            description: text
        })
    }

    handleErr(error) {
        this.notification('error', `issuewhile fetching data`, 'error');
        console.warn('Error:', error)
    }
    selected(id) {
        const busapi = `https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${id}&format=json`
        fetch(busapi)
            .then(response => response.json())
            .then(json => this.handleJson(json))
            .catch(error => this.handleErr(error));
    }
    render() {
        return (
            <Fragment>
                <h1 title="Dashborad"> Dashboard 2.0 </h1>
                {this.state.alerts &&
                    <Select
                        onChange={(e) => this.selected(e)}
                        placeholder="select an alert"
                        style={{ width: '100%', padding: '10px' }}>
                        {this.state.alerts.map((e, i) => <Option key={i} value={e.data.busstopid}>{e.label}</Option>)}
                    </Select>
                }

                {/* {this.state.alerts && <SplitButton label="select alert" icon="pi pi-check" model={this.state.alerts}></SplitButton>} */}
                <div className="bus-results" >
                    {this.state.selected &&
                        this.state.selected.map((e, i) => {
                            return (
                                <div key={i}>{`${e.duetime} min - ${e.route}`}</div>
                            )
                        })
                    }
                </div>
                <Button type="primary">Button</Button>
            </Fragment>
        )
    }
}


export default Dashborad