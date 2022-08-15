import React, { createContext, Fragment, useState } from "react";
export const TextContext = createContext();
export const colorchangerContext = createContext();

export const ColorProvider = (props) => {
  const [word, setword] = useState("hi everyone");
  const [color, setColor] = useState("green");
  const [bgcolor, setbgColor] = useState();
  const [changeGreeting, setChangeGreeting] = useState();
  const [AppBgcolor, setAppBgColor] = useState(false);
  return (
    <Fragment>
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
          AppBgcolor,
          setAppBgColor,
        ]}
      >
        {props.children}
      </colorchangerContext.Provider>
    </Fragment>
  );
};
