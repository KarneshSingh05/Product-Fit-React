//----------------User.js------------

import React from "react";
export class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>name {this.props.name}</h1>
      </>
    );
  }
}
