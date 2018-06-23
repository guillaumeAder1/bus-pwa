import React from 'react'
import { Toolbar } from 'primereact/components/toolbar/Toolbar';
import { Button } from 'primereact/components/button/Button'

const Settings = (props) => {
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
                        <Button label="Create New Alert" icon="pi pi-plus" />
                        <Button label="See Alerts" icon="pi pi-home" className="ui-button-success" />
                        <Button label="Save" icon="pi pi-check" className="ui-button-warning" />
                    </div>
                </Toolbar>
            </div>
        </React.Fragment>

    )
}



export default Settings