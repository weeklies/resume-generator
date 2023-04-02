import React from 'react';
import { EducationProps } from '../../models/models';

const EducationSection = (props: EducationProps) => {
  return <Section {...props} />;
};

const Section = (props: EducationProps) => {
  return (
    <div>
      <h5>{props.title}</h5>
      {props.articles.map((a, i) => {
        return (
          <div key={i}>
            <div className='d-flex justify-content-between educationList'>
              <strong>{a.course}</strong>
              <em>{a.school}</em>
              <strong>{a.date}</strong>
            </div>
            {a.responsibilities.length > 0 && (
              <ul className='mb-0'>
                {a.responsibilities.map((r, j) => {
                  return <li key={j}>{r}</li>;
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EducationSection;
