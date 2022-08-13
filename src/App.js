// import React from "react";
// import MovieList from "./MovieList";
// import Nav from "./Nav";
// import { MovieProvider } from "./MovieContext";
// import "./App.css";
// import AddMovie from "./AddMovie";

// function App() {
//   return (
//     <MovieProvider>
//       <div className="App">
//         <Nav />
//         <AddMovie />
//         <MovieList />
//       </div>
//     </MovieProvider>
//   );
// }

//export default App;

import ColorChanger from "./newComponent/ColorChanger";
import { ColorProvider } from "./newComponent/context/contextfile";
import Greeting from "./newComponent/Greeting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [AppBgcolor, setAppBgColor] = useState(false);
  const [Box1, setBox1] = useState(false);
  const [Box2, setBox2] = useState(false);
  const [Box3, setBox3] = useState(false);

  // const colorHandler1 = () => {
  //   setBox1((prev) => !prev);
  // };
  // const colorHandler2 = () => {
  //   setBox2((prev) => !prev);
  // };
  // const colorHandler3 = () => {
  //   setBox3((prev) => !prev);
  // };

  return (
    <Fragment>
      <ColorProvider>
        <div className={AppBgcolor === false ? "App" : "App-new-light"}>
          {AppBgcolor ? (
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              onClick={() => setAppBgColor((prev) => !prev)}
              icon={faToggleOff}
            />
          ) : (
            <FontAwesomeIcon
              icon={faToggleOn}
              onClick={() => setAppBgColor((prev) => !prev)}
              style={{ fontSize: "30px", backgroundColor: "#797070" }}
            />
          )}

          <ColorChanger />
          <Greeting />
        </div>
      </ColorProvider>
      <div className="container">
        <div
          onClick={() => setBox1((prev) => !prev)}
          className={Box1 ? "box" : "colorchangedBox"}
        ></div>
        <div
          onClick={() => setBox2((prev) => !prev)}
          className={Box2 ? "colorchangedBox" : "box"}
        ></div>
        <div
          onClick={() => setBox3((prev) => !prev)}
          className={Box3 ? "box" : "colorchangedBox"}
        ></div>
      </div>
    </Fragment>
  );
}

export default App;
