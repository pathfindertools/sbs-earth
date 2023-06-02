import * as React from 'react';
import { Section } from '../section';

const Sponsor = ({ data, index, parentField = "" }) => {
  return (    
    <div className={`w-1/5 sm:w-1/2 px-4 pb-10`} data-tinafield={`${parentField}.${index}`}>
    {data.src && (
        <img
          alt={data.alt}
          src={data.src}
          data-tinafield={`${parentField}.image`}
        />
      )}
    </div>
  );
};

export const Sponsors = ({ data, parentField = "" }) => {
  const style = data.style || {}

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding}`}>
        
        <div className={`w-full`}>
          <h2 className={`${data.style?.headlineStyles} text-center`}>Sponsors</h2>
          <div className={`flex flex-wrap justify-center mb-20`}>
            {data.sponsors &&
              data.sponsors.map(function (sponsor, index) {
                return <Sponsor key={index} index={index} data={sponsor} parentField={`${parentField}.items`} />;
              })}
          </div>

          <h2 className={`${data.style.headlineStyles} text-center`}>Partners</h2>
          <div className={`flex flex-wrap gap-10 justify-center`}>
            {data.partners &&
              data.partners.map(function (partner, index) {
                return <Sponsor key={index} index={index} data={partner} parentField={`${parentField}.items`} />;
              })}
          </div>
        </div>
      </div>
    </Section>
  );
};
