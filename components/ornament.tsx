import React from 'react';

const anchorPosition = {
  "center": "top-1/2 left-1/2",
  "top": "top-0 left-1/2",
  "top-right": "top-0 right-0",
  "right": "top-1/2 right-0",
  "bottom-right": "bottom-0 right-0",
  "bottom": "bottom-0 left-1/2",
  "bottom-left": "left-0 bottom-0",
  "left": "top-1/2 left-0",
  "top-left": "top-0 left-0",
};

const alignmentTransform = {
  "center": "-50%,-50%",
  "top": "-50%,0",
  "top-right": "-100%,0",
  "right": "-100%,-50%",
  "bottom-right": "-100%,-100%",
  "bottom": "-50%,-100%",
  "bottom-left": "0,-100%",
  "left": "0,-50%",
  "top-left": "0,0"
};

export const Ornament = ({
  src,
  width,
  height,
  alignment,
  xOffset,
  yOffset,
}) => {
  const wrapStyle = {
    transform: `translate(${xOffset || 0}px,${yOffset || 0}px)`,
  };

  const imgStyle = {
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate(${alignmentTransform[alignment]})`,
    maxWidth: "none"
  };

  return (
    <div className={`absolute ${anchorPosition[alignment]}`} style={wrapStyle} >
      <img
        className="absolute"
        src={src}
        style={imgStyle}
        width={width}
        height={height}
      />
    </div>
  );
};
