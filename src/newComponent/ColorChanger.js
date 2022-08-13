import { useContext } from "react";
import { colorchangerContext } from "./context/contextfile";
const ColorChanger = () => {
  const [word, setword, color, setColor, bgcolor, setbgColor] =
    useContext(colorchangerContext);
  return (
    <div>
      <button onClick={() => setword("greeting from luul")}>changeWord</button>
      <button onClick={() => setColor("blue")}>changecolor</button>

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
