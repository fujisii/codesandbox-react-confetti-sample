import "./styles.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
  const { width, height } = useWindowSize();
  return (
    <Confetti width={width} height={height} />
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
