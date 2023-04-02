import React from 'react';
import { GeneralProps } from '../../models/models';

const GeneralSection = (props: GeneralProps) => {
  return <Section {...props} />;
};
const Section = (props: GeneralProps) => {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <h3>{props.name}</h3>
        <p className='forTextarea'>{props.subtitle}</p>
      </div>
      <div className='d-flex flex-column'>
        <a href={`mailto:${props.email}`}>{props.email}</a>
        <p>{props.phone}</p>
      </div>
    </div>
  );
};

export default GeneralSection;
