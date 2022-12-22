// Components and Props .........

import React from "react";

// function
// function Materi2(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class
// class Materi2 extends React.Component {
//   render() {
//     return <h1>Hellooo, {this.props.name}</h1>;
//   }
// }

// Extracting Components
function formatDate(date) {
  return date.toLocaleDateString();
}

function Materi2(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Materi2;
