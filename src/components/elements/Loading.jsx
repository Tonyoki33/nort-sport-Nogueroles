import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/loading.json'


const Loading = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rederSettings: {
            preservAscpectRadio: 'xmidymid slice'
        }
    };

  return (
    <div>
        <Lottie options={options}
                    height={250}
                    width={250}
                    isStopped={false}
                    isPaused={false}/>
    </div>
  )
  ;
};

export default Loading;
