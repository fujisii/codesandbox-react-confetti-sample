import "./styles.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

// https://github.com/alampros/react-confetti

export default function App() {
  // 要素の幅, 高さ
  const { width, height } = useWindowSize();
  // 重力
  const gravity = 0.1;
  // 一度に放出される紙吹雪の数
  const numberOfPieces = 200;
  // 紙吹雪がスポーンする長方形。デフォルトは上部にあります。
  const confettiSource = {
    x: 0,
    y: height,
    w: 0,
    h: height
  };
  const recycle = true;
  // 紙吹雪が水平方向に放出される値の範囲。正の数は右向き、負の数は左向きです。
  const initialVelocityX = { min: 5, max: 5 };
  // 紙吹雪が垂直に放出される値の範囲。正の数は下向き、負の数は上向きです。
  const initialVelocityY = { min: 20, max: -20 };
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
      confettiSource={confettiSource}
      recycle={recycle}
      gravity={gravity}
      initialVelocityX={initialVelocityX}
      initialVelocityY={initialVelocityY}
    />
  );
}
