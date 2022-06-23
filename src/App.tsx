import "./styles.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

// https://github.com/alampros/react-confetti

export default function App() {
  const { width, height } = useWindowSize();
  const gravity = 0.1;
  const numberOfPieces = 200;
  const confettiSource = {
    x: width / 3,
    y: height / 2,
    w: width / 2,
    h: height / 2
  };
  const recycle = false;
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
      confettiSource={confettiSource}
      recycle={recycle}
      gravity={gravity}
    />
  );
}
