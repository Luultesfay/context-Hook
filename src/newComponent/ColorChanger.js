//import { colorContext } from "./contextfile";
import { useContext } from "react";
import { colorchangerContext } from "./context/contextfile";
const ColorChanger = () => {
  //const [word, setword] = useContext(colorContext);
  const [word, setword, color, setColor, bgcolor, setbgColor] =
    useContext(colorchangerContext);
  //console.log(word);
  return (
    <div>
      <button onClick={() => setword("greeting from luul")}>changeWord</button>
      <button onClick={() => setColor("blue")}>changecolor</button>
      {/* <button onClick={() => setbgColor(true)}>changecolorsss</button>
      <button onClick={() => setbgColor(false)}>changecol</button> */}
      <div
        onClick={(prev) => setbgColor((prev) => !prev)}
        className={bgcolor === false ? "color-green" : "color-blue"}
        // style={
        //   color === "green"
        //   ? { backgroundcolor: "green" }
        //     : { backgroundColor: "blue" }
        // }
      >
        {word}
        {color}
      </div>
      {!color ? <div>"go Green"</div> : "go blue"}
    </div>
  );
};
export default ColorChanger;
