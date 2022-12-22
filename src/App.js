import "./App.css";
import Materi7 from "./components/Materi_7";
// import Blog from "./components/Blog";
// import Materi6 from "./components/Materi_6";
// import Mailbox from "./components/Mailbox";
// import Page from "./components/WarningBanner";
// import LoginControl from "./components/Login";
// import Materi5 from "./components/Materi_5";
// import Default from "./components/Default";
// import Materi1 from "./components/Materi_1";
// import Materi2 from "./components/Materi_2";
// import Materi3 from "./components/Materi_3";
// import Materi4 from "./components/Materi_4";

function App() {
  // const element = <Materi2 name="apip kurniawan"></Materi2>;

  // const comment = {
  //   date: new Date(),
  //   text: "I hope you enjoy learning React!",
  //   author: {
  //     name: "Hello Kitty",
  //     avatarUrl: "http://placekitten.com/g/64/64",
  //   },
  // };

  // const messages = ["React", "Re: React", "Re:Re: React"];
  // const numbers = [1, 2, 3, 4, 5];
  // const posts = [
  //   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  //   {
  //     id: 2,
  //     title: "Installation",
  //     content: "You can install React from npm.",
  //   },
  // ];

  return (
    // Composing Components ........
    // <div>
    //   <Materi2 name="apip kurniawan" />
    //   <Materi2 name="tata alfian" />
    //   <Materi2 name="ridho" />
    // </div>

    // Extracting Components ........
    // <Materi2 date={comment.date} text={comment.text} author={comment.author} />

    // Rendering a Component ........
    // element
    <Materi7 />
    // <Blog posts={posts} />
    // <Materi6 numbers={numbers} />
    // <Page />
    // <LoginControl isLoggedIn={false} />
    // <Mailbox unreadMessages={messages} />
    // <Materi5 isLoggedIn={false} />
    // <Materi4 />
    // <Materi3 />
    // <Materi1></Materi1>
    // <Default></Default>
  );
}

export default App;
