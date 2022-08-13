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
import { useState } from "react";

function App() {
  const [AppBgcolor, setAppBgColor] = useState(false);

  return (
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
  );
}

export default App;
