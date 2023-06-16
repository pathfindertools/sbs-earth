import * as React from 'react';
import { hasWord } from '../../helpers/utilities';
import { Section } from '../section';
import { Content } from '../content';

const wrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
}

const wrapClasses = (style) => {
  const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
  const widthClasses = wrapWidthClasses(isVertical, false)
  const mobileWidthClasses = wrapWidthClasses(isVerticalMobile, true)
  return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
}

const Speaker = ({ data, cardstyle, index, parentField = "" }) => {
  return (    
    <div className={`relative w-full flex py-7 ${cardstyle?.alignment}`} data-tinafield={`${parentField}.${index}`}>
      <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
      {data.image?.src && (
        <div className="w-full px-4">
          <div className="relative mx-auto w-full" style={{maxWidth: "160px"}}>
            <div className="rounded-full bg-accent2" style={{paddingBottom: "100%"}}></div>
            <img
              className={`absolute top-0 left-0 w-full h-full rounded-full p-1 object-cover`}
              alt={data.image.alt || data.headline}
              src={data.image.src}
              data-tinafield={`${parentField}.image`}
            />
          </div>
        </div>
      )}
      <div className="flex-1 h-full flex flex-col mt-6 px-4" >
        <Content
          data = {data}
          alignment = {``}
          buttonsLayout = {cardstyle.buttonsLayout}
          styles = {cardstyle}
          width = "w-full"
          parentField = {parentField}
          className = "h-full justify-between"
        />
      </div>
    </div>
  );
};

export const Speakers = ({ data, parentField = "" }) => {
  const style = data.style || {}

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`${wrapClasses(style)}`}>
          <div className={`grid ${data.cardStyle.grid}`}>
            {data.items &&
              data.items.map(function (block, index) {
                return <Speaker key={index} index={index} data={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />;
              })}
          </div>
        </div>
        <div className={`flex-none justify-center`}>
          <Content
            data = {data}
            styles = {style}
            alignment = {`text-center`}
            buttonsLayout = {style.buttonsLayout}
            width = "w-full"
            parentField = {parentField}
            className = ""
          />
        </div>
      </div>
    </Section>
  );
};
