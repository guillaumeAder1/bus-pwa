import React, { Component, Fragment } from 'react'
import { Select, List } from 'antd';
import Notif from '../notification/'

const Option = Select.Option;


/**
 * Dashboard - list all bus comming to the selected stopid.
 * Can select which stopid you want to see
 */
class Dashborad extends Component {
    constructor() {
        super();
        this.state = {
            alerts: false,
            selected: false,
            loading: true,
            current: null
        };
    }


    componentDidMount() {
        const list = JSON.parse(localStorage.getItem("alerts"));
        if (list) {
            this.setState({
                alerts: list.map(e => {
                    return {
                        label: `${e.busstopid} - ${e.time}`,
                        data: e
                    }
                })
            });
            this.selected(list[0].busstopid);
        }
    }


    handleJson(json) {
        if (json.errorcode === "1") {
            this.notification('warning', `No results found for stopid: ${json.stopid}`, 'warn');
        } else {
            const search = this.state.alerts.filter(e => e.data.busstopid == json.stopid)[0];
            const matching = json.results.filter(e => search.data.filter.indexOf(e.route) > -1);
            this.setState({ selected: matching });
        }
    }

    notification(msg, text, level) {
        Notif({
            level: level,
            message: text
        })
    }

    handleErr(error) {
        this.notification('Error', `Issue while fetching data`, 'error');
        console.warn('Error:', error)
    }
    selected(id) {
        this.setState({ current: id })
        const busapi = `https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${id}&format=json`
        fetch(busapi)
            .then(response => response.json())
            .then(json => this.handleJson(json))
            .catch(error => this.handleErr(error));
    }
    render() {
        return (
            <Fragment>
                {this.state.alerts &&
                    <Select
                        onChange={(e) => this.selected(e)}
                        placeholder="select an alert"
                        style={{ width: '100%', padding: '10px' }}>
                        {this.state.alerts.map((e, i) => <Option key={i} value={e.data.busstopid}>{e.label}</Option>)}
                    </Select>
                }

                {this.state.selected &&
                    <List
                        size="large"
                        header={<div>STOP {this.state.current}</div>}
                        bordered
                        dataSource={this.state.selected.map((e, i) => `${e.duetime} min- ${e.route}`)}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                }
            </Fragment>
        )
    }
}


export default Dashborad