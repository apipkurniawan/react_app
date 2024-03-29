// Handling Events .........
import React from "react";

class Materi4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  //   handleClick = (e) => {
  //     console.log("this is:", this);
  //     console.log("e:", e);
  //   };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
      //   <button onClick={(e) => this.handleClick(e)}>Click me</button>
    );
  }
}

export default Materi4;
