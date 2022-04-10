import { useEffect, useState } from "react";
import { Container } from './styles';
import Lottie from "react-lottie";
import heart from "../../assets/json/heart.json";

export default function ButtonLottie(props) {
  const { action, anim, width, height } = props;
  const [dataAnimation, setDataAnimation] = useState(null);
  const [animationActive, setAnimationActive] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: dataAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(function () {
    switch (anim) {
      default:
        setDataAnimation(heart);
        break;
    }
  }, []);
  return (
    <Container
      onClick={() => {
        let directionAnimated = animationState.direction * -1;
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: directionAnimated,
        });
        setAnimationActive(!animationActive);
        if (action)
          action();
      }}
    >
      <div className="animation">
        <Lottie
          options={defaultOptions}
          width={width}
          height={height}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </Container>
  );
};