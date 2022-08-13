import { useContext } from "react";
import { colorchangerContext } from "./context/contextfile";
const Greeting = () => {
  const [changeGreeting, setChangeGreeting] = useContext(colorchangerContext);
  return (
    <>
      <button
        onClick={() => {
          setChangeGreeting("howdy , its stunning seen you her great friendss");
        }}
      >
        Change Greeting
      </button>
      <div>{changeGreeting}</div>
    </>
  );
};
export default Greeting;
