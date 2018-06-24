import React, { Component, Fragment } from 'react'
import { SplitButton } from 'primereact/components/splitbutton/SplitButton';
import { Growl } from 'primereact/components/growl/Growl';




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
                        command: () => this.selected(e.busstopid),
                        items: e
                    }
                })
            })
        }
    }
    displayTime(data) {

    }
    selected(e) {
        const busapi = `https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${e}&format=json`
        fetch(busapi)
            .then(response => response.json())
            .then(json => {
                if (json.errorcode === "1") {
                    this.growl.current.show({ severity: 'warn', summary: json.errormessage, detail: `no results for stopid: ${e}` });
                } else {
                    this.growl.current.show({ severity: 'success', summary: "results found" });
                    this.displayTime(json.results)
                }
            })
            .catch(error => {
                this.growl.current.show({ severity: 'error', summary: "Fetch Data Issue", detail: error.toString() });
                console.warn('Error:', error)
            });
    }
    render() {
        return (
            <Fragment>
                <Growl ref={this.growl}></Growl>

                <h1 title="Dashborad"> Dashborad </h1>
                {this.state.alerts && <SplitButton label="select alert" icon="pi pi-check" model={this.state.alerts}></SplitButton>}
            </Fragment>
        )
    }
}


export default Dashborad