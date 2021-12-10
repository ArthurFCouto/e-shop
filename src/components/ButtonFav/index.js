import Image from "next/image";
import { useState } from "react";
import fav from "../../iconsSvg/favorite.svg";
import { Fav } from "./styles";
import Lottie from 'react-lottie';
import heart from '../../assets/heart.json';

export default function ButtonFav(props) {

    const [isLiked, setLikeState] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: true,
        isPaused: false,
        direction: -1,
    });
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: heart,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Fav
            {...props}
            onClick={() => {
                const reverseAnimation = -1;
                const normalAnimation = 1;

                setAnimationState({
                    ...animationState,
                    isStopped: false,
                    direction: animationState.direction === normalAnimation
                        ? reverseAnimation
                        : normalAnimation,
                })
                setLikeState(!isLiked);
            }}>
            {/*<Image
            src={fav}
            height={30}
            width={30}
            alt="Favorite"
            />*/}
            <div className="animation">
                <Lottie
                    options={defaultOptions}
                    width={30}
                    height={30}
                    direction={animationState.direction}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
            </div>
        </Fav>
    )
}