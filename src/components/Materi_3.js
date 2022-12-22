// State and Lifecycle .........
import React from "react";

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
// Converting a Function to a Class
class Materi3 extends React.Component {
  // Adding Local State to a Class
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { date: new Date() };
  }

  // Adding Lifecycle Methods to a Class
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick");
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Materi3;
