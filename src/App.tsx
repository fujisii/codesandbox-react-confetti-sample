import "./styles.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
}
