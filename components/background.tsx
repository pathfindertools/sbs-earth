import React from 'react';
import { Ornament } from './ornament';

export const Background = ({
  background = {
    style: "",
    fillStyles: "",
    wrapFillStyles: "",
    src: "",
    position: "",
    ornaments: []
  },
}) => {
  return (
    <>
      <div className={`background absolute inset-0 -z-2 ${background?.fillStyles}`}></div>
      {background?.wrapFillStyles !== "" && (
        <div className={`background absolute left-1/2 transform -translate-x-1/2 max-w-desktop-full w-full h-full -z-2 ${background?.wrapFillStyles}`}></div>
      )}
      {background?.src && !background.src.includes(".mp4") && (
        <div className={`absolute inset-0 -z-2 w-full h-full ${background.style} ${background.position}`} style={{ backgroundImage: `url(${background.src.replace(' ', '%20')})` }}></div>
      )}
      {background?.src && background.src.includes(".mp4") && (
        <div className="absolute inset-0 -z-2">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={background.src} type="video/mp4" />
          </video>
        </div>
      )}
      {background?.ornaments?.length > 0 &&
        <div className="ornaments absolute inset-0 -z-1">
          {background.ornaments.map(function (ornament, index) {
            return (
              <Ornament
                key={index}
                src={ornament.src || ""}
                width={ornament.width || ""}
                height={ornament.height || ""}
                alignment={ornament.alignment || "center"}
                xOffset={ornament.xOffset || 0}
                yOffset={ornament.yOffset || 0}
              />
            )
          })}
        </div>
      }
    </>
  )
}
