import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navmenu from './components/nav/header'
import Section from './components/nav/section'

import './headercss.css'
import { Layout, Icon } from 'antd';
const { Header, Sider } = Layout;



class App extends Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <React.Fragment>


        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            breakpoint="sm"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); this.toggle() }}
          >
            <div className="logo"></div>
            <Navmenu onSelected={() => this.toggle()} />
          </Sider>
          <Layout>
            <Header style={{ position: 'fixed', width: '100%', zIndex: 1, background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => this.toggle()}
              />
            </Header>
            <Section />
          </Layout>
        </Layout>

      </React.Fragment>
    );
  }
}

export default App;