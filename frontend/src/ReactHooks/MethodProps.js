import React, { Component } from "react";
import ChildCompoent from "./ChildComponent";

export class MethodProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };
  }

  greetParent = childName => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };
  render() {
    return (
      <div>
        <ChildCompoent parentHandler={this.greetParent} />
      </div>
    );
  }
}

export default MethodProps;
