import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Hello Srilakshmi</div>;
    //this.state.isLoggedIn || <div>Hello Srilakshmi</div>;

    //1........
    // return this.state.isLoggedIn ? (
    //   <div>Hello Srilakshmi</div>
    // ) : (
    //   <div>Bye Srilakshmi</div>
    // );
    //2..........
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Srilakshmi</div>;
    // } else {
    //   message = <div>Bye Srilakshmi</div>;
    // }

    //3..........
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Srilakshmi</div>;
    // } else {
    //   return <div>Bye Srilakshmi</div>;
    // }
    //return <div>{message}</div>;
  }
}

export default UserGreeting;
