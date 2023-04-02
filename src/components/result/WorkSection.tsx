import React from 'react';
import { WorkProps } from '../../models/models';

const WorkSection = (props: WorkProps) => {
  return <Section {...props} />;
};

const Section = (props: WorkProps) => {
  return (
    <div>
      <h5>{props.title}</h5>
      {props.articles.map((a, i) => {
        return (
          <div key={i} className='mb-1'>
            <div className='d-flex justify-content-between'>
              <strong>{a.role}</strong>
              <em>{a.company}</em>
              <strong>{a.date}</strong>
            </div>
            <ul>
              {a.responsibilities.map((r, j) => {
                return <li key={j}>{r}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WorkSection;
