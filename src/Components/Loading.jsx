import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/wave.json') 
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className='w-40 mx-auto flex min-h-[calc(100vh-80px-307px)]'>
      {animationData && (
        <Lottie animationData={animationData} loop={true} />
      )}
    </div>
  );
};

export default Loading;
