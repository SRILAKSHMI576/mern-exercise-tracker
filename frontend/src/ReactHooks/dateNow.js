import React from "react";

class dateNow extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>date: {this.state.date.toLocaleTimeString()}</div>;
  }
}

export default dateNow;
