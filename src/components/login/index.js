import React from 'react'
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Button } from 'primereact/components/button/Button';
import { InputText } from 'primereact/components/inputtext/InputText'
import { Password } from 'primereact/components/password/Password';


/**
 * Login page
 * implementation should work as following:
 * - user signin, then save credential on localstorage,
 * - user login, check if cred exists for username in locastorage
 *      - if true then look for a list of alerts[] for this user
 * - user logout...
 */
class Login extends React.Component {
    constructor() {
        super();
        this.state = { visible: false, islogged: false, username: null };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.validate = this.validate.bind(this);
        this.logout = this.logout.bind(this);
    }

    onClick(event) {
        this.setState({ visible: true });
    }

    onHide(event) {
        this.setState({ visible: false });
    }

    validate(event) {
        localStorage.setItem("username", this.state.username);
        this.setState({
            islogged: true
        })
        this.onHide()
    }

    logout() {
        this.setState({
            islogged: false
        })
        localStorage.setItem("username", "");
        this.onHide()
    }

    componentDidMount() {
        const user = localStorage.getItem("username")
        if (user) {
            this.setState({
                islogged: true
            })
        }
    }


    typeIn(evt) {
        this.setState({
            username: evt.target.value
        })
    }
    render() {
        const label = (this.state.islogged) ? "Logout" : "Login";
        return (
            <React.Fragment>
                <li onClick={this.onClick}><a>{label}</a></li>
                <Dialog header={label} visible={this.state.visible} width="350px" modal={true} onHide={this.onHide}>
                    {!this.state.islogged &&
                        <div className="ui-g ui-fluid">
                            <div className="ui-g-12 ui-md-12">
                                <div className="ui-inputgroup">
                                    <span className="ui-inputgroup-addon"><i className="pi pi-user"></i></span>
                                    <InputText placeholder="Username" onChange={e => this.typeIn(e)} />
                                </div>
                                <br />
                                <div className="ui-inputgroup">
                                    <span className="ui-inputgroup-addon"><i className="pi pi-exclamation-triangle"></i></span>
                                    <InputText placeholder="password" type="password" />
                                </div>
                                <br />
                                <Button label="Login" icon="pi pi-info-circle" onClick={this.validate} />
                                <br />
                            </div>
                        </div>
                    }
                    {this.state.islogged &&
                        <div className="ui-g ui-fluid">
                            <div className="ui-g-12 ui-md-12">
                                <Button label="logout" icon="pi pi-exclamation-triangle" onClick={this.logout} />
                                <br />
                            </div>
                        </div>
                    }

                </Dialog>
            </React.Fragment >
        )
    }

}

export default Login