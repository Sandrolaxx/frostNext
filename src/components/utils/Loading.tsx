import './styles.css';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from '../assets/animations/panela-loading.json'

function Loading() {
  const [animation, setAnimation] = useState({
    isStopped: false, isPaused: false
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='loading-container'>
      <div>
        <h1>
          Carregando...
      </h1>
      </div>

      <div className='loading-image'>
        <Lottie options={defaultOptions}
          height={600}
          width={600}
          speed={0.8}
          isStopped={animation.isStopped}
          isPaused={animation.isPaused} />
      </div>
    </div>
  );
}

export default Loading;
