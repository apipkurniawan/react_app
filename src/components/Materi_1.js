// introducing JSX ..........

import React from "react";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

function Materi1() {
  // Embedding Expressions in JSX ..........
  // const user = {
  //   firstName: "Harper",
  //   lastName: "Perez",
  //   avatarUrl:
  //     "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  // };
  // const element1 = <h1>Hello, {formatName(user)}!</h1>; // calling function in jsx

  // const name = "Josh Perez";
  // const element2 = <h1>Hello, {name}</h1>; // calling variable in jsx

  // JSX is an Expression Too ..........
  // const element3 = <h1>Hello, {getGreeting(user)}!</h1>;

  // Specifying Attributes with JSX ..........
  // const element4 = <a href="https://www.reactjs.org"> link </a>;
  // const element5 = <img src={user.avatarUrl}></img>;

  // Specifying Children with JSX ..........
  // const element6 = <img src={user.avatarUrl} />;
  // const element7 = (
  //   <div>
  //     <h1>Hello!</h1>
  //     <h2>Good to see you here.</h2>
  //   </div>
  // );

  // JSX Prevents Injection Attacks ..........
  // const title = response.potentiallyMaliciousInput;
  // This is safe:
  // const element8 = <h1>{title}</h1>;

  // JSX Represents Objects ..........
  // const element9 = (
  //   <h2 className="greeting">
  //     Hello, world!
  //   </h2>
  // );
  const element9 = React.createElement(
    "h2",
    { className: "greeting" },
    "Hello, world!"
  );
  return element9;
}

export default Materi1;
