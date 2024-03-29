// Programmatically managing focus
import React from "react";

// cara 1 :
// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // Create a ref to store the textInput DOM element
//     this.textInput = React.createRef();
//   }

//   focus() {
//     // Explicitly focus the text input using the raw DOM API
//     // Note: we're accessing "current" to get the DOM node
//     this.textInput.current.focus();
//   }

//   render() {
//     // Use the `ref` callback to store a reference to the text input DOM
//     // element in an instance field (for example, this.textInput).
//     return <input type="text" ref={this.textInput} />;
//   }
// }

// export default CustomTextInput;

// cara 2 :
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  render() {
    return <CustomTextInput inputRef={this.inputElement} />;
  }
}

// Now you can set focus when required.
this.inputElement.current.focus();

// not working
export default Parent;
