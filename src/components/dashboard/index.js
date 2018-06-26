import React, { Component, Fragment } from 'react'
import { SplitButton } from 'primereact/components/splitbutton/SplitButton';
import { Growl } from 'primereact/components/growl/Growl';

import Button from 'antd/lib/button';

class Dashborad extends Component {
    constructor() {
        super();
        this.state = { alerts: false, selected: false };
        this.growl = React.createRef();

    }


    componentDidMount() {
        const list = localStorage.getItem("alerts")
        if (list) {
            this.setState({
                alerts: JSON.parse(list).map(e => {
                    return {
                        label: `${e.busstopid} - ${e.time}`,
                        command: () => this.selected(e),
                        items: e
                    }
                })
            })
        }
    }


    handleJson(json, selected) {
        if (json.errorcode === "1") {
            this.growl.current.show({
                severity: 'warn',
                summary: json.errormessage,
                detail: `no results for stopid: ${selected.busstopid}`
            });
        } else {
            this.growl.current.show({ severity: 'success', summary: "results found" });
            this.setState({
                selected: json.results.filter(e => selected.filter.indexOf(e.route) > -1)
            })
        }
    }

    handleErr(error) {
        this.growl.current.show({ severity: 'error', summary: "Fetch Data Issue", detail: error.toString() });
        console.warn('Error:', error)
    }
    selected(e) {
        const busapi = `https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${e.busstopid}&format=json`
        fetch(busapi)
            .then(response => response.json())
            .then(json => this.handleJson(json, e))
            .catch(error => this.handleErr(error));
    }
    render() {
        return (
            <Fragment>
                <Growl ref={this.growl}></Growl>
                <h1 title="Dashborad"> Dashboard 2.0 </h1>
                {this.state.alerts && <SplitButton label="select alert" icon="pi pi-check" model={this.state.alerts}></SplitButton>}
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