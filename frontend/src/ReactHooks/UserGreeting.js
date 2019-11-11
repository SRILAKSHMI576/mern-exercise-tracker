import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Hello Srilakshmi</div>;
    } else {
      return <div>Bye Srilakshmi</div>;
    }
  }
}

export default UserGreeting;
