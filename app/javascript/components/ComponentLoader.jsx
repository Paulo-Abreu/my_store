import React, { Component } from 'react';
import Home from './Home';

class ComponentLoader extends Component {
  components = {
    home: Home
  };

  render() {
    const TagName = this.components[this.props.tag || 'eventList'];
    return <TagName data={this.props.data} />
  }
}
export default ComponentLoader;
