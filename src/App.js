import "./App.css";
import LoginControl from "./components/Login";
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
    <LoginControl isLoggedIn={false} />
    // <Materi5 isLoggedIn={false} />
    // <Materi4 />
    // <Materi3 />
    // <Materi1></Materi1>
    // <Default></Default>
  );
}

export default App;
