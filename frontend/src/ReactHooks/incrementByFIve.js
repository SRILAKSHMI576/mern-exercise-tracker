import React, { Component } from "react";

class IncrementByFive extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  incrementValue = e => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.incrementValue}>Click</button>
      </div>
    );
  }
}

export default IncrementByFive;
