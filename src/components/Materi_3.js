// State and Lifecycle .........
import React from "react";

// Converting a Function to a Class
class Materi3 extends React.Component {
  // Adding Local State to a Class
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}

export default Materi3;
