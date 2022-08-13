import React, { createContext, Fragment, useState } from "react";
export const TextContext = createContext();
export const colorchangerContext = createContext();

export const ColorProvider = (props) => {
  const [word, setword] = useState("green");
  const [color, setColor] = useState("green");
  const [bgcolor, setbgColor] = useState();
  const [changeGreeting, setChangeGreeting] = useState();
  return (
    <Fragment>
      {/* <colorContext.Provider value={[word, setword]}>
        {props.children}
      </colorContext.Provider> */}
      <colorchangerContext.Provider
        value={[
          word,
          setword,
          color,
          setColor,
          bgcolor,
          setbgColor,
          changeGreeting,
          setChangeGreeting,
        ]}
      >
        {props.children}
      </colorchangerContext.Provider>
      {/* <colorContext.Provider value={[AppBgcolor, setAppBgColor]}>
        {props.children}
      </colorContext.Provider> */}
    </Fragment>
  );
};
