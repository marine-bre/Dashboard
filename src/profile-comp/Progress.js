import React, { useState, useEffect } from 'react';

function Progress({ percentageDone, viewbox, progressLabelX, height }) {

  const [progressBar, setProgressBar] = useState(0);

  const circleConfig = {
    x: '19',
    y: '19',
    radio: '15.91549430918954'
  };

  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, 5);
  };

  const updatePercentageNeg = () => {
    setTimeout(() => {
      setProgressBar(progressBar - 1);
    }, 5);
  };

  useEffect(() => {
    if (percentageDone > 0) updatePercentage();
  }, [percentageDone]);

  useEffect(() => {
    if (progressBar < percentageDone) updatePercentage();
  }, [progressBar]);

  useEffect(() => {
    if (progressBar > percentageDone) updatePercentageNeg();
  }, [progressBar]);

  return (
    <div className='tasks--progress'>
      <svg viewBox='0 0 40 40' height={height}>
        <circle
          className="ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke="gray"
        />
        <circle
          className="path"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke="#C64A4A"
          strokeDasharray={`${progressBar} ${100 - progressBar}`}
          strokeDashoffset="25"
        />
        <g className="circle-label">
          <text x="19" y="25" fill="gray" className="circle--percentage">
            {Math.round(percentageDone)}%
                            </text>
        </g>
      </svg>
    </div>
  );
}

export default Progress;