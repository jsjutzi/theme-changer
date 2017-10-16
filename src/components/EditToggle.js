import React, { Component } from 'react';

class EditToggle extends Component {
  render() {
    return (
      <select className="dropDownContainer ml0" onChange={ (e) => this.props.update(e.target.val)}>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    )
  }
}
export default EditToggle;