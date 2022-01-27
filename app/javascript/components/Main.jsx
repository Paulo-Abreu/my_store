import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ComponentLoader from './ComponentLoader';

class Main extends Component {
  render() {
    //const name = this.props.data.user.name;
    const component = this.props.data.component.name
    const user = this.props.data  

    return (
      <div className="dashboard">
        <Sidebar user={user}/>
        <div className="main-panel">
          <div className="content">
            <ComponentLoader tag={component} data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main