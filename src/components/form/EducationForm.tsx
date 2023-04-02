import React from 'react';
import { FormProps } from '../../models/models';

const EducationForm = (props: FormProps) => {
  return (
    <div className='educationFormSection'>
      <h5>Education Details</h5>
      {props.education.articles.map((article, article_i) => (
        <div key={article_i}>
          <div className='mb-3'>
            <label htmlFor={`course-${article_i}`} className='form-label'>
              Course {article_i + 1}
            </label>
            <input
              type='text'
              className='form-control'
              id={`course-${article_i}`}
              onChange={(e) => props.onElementChange(e, 'education')}
              placeholder={article.course}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor={`school-${article_i}`} className='form-label'>
              School/University
            </label>
            <input
              type='text'
              className='form-control'
              id={`school-${article_i}`}
              onChange={(e) => props.onElementChange(e, 'education')}
              placeholder={article.school}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor={`date-${article_i}`} className='form-label'>
              Date/Time Period
            </label>
            <input
              type='text'
              className='form-control'
              id={`date-${article_i}`}
              aria-describedby='dateHelp'
              onChange={(e) => props.onElementChange(e, 'education')}
              placeholder={article.date}
            />
            <small id='dateHelp' className='form-text text-muted'>
              e.g 2020, Oct 2023, 2020 - Present
            </small>
          </div>
          {article.responsibilities.map((responsible, resp_i) => (
            <div className='mb-3' key={resp_i}>
              <label
                htmlFor={`eduResp-${article_i}-${resp_i}`}
                className='form-label'
              >
                Responsibility {resp_i + 1}
              </label>
              <textarea
                className='form-control me-2'
                id={`eduResp-${article_i}-${resp_i}`}
                onChange={(e) => props.onElementChange(e, 'education')}
                placeholder={responsible}
              />
            </div>
          ))}

          <div className='mb-3 d-flex justify-content-between'>
            <div>
              <button
                type='button'
                className='btn btn-primary me-2'
                id={`newEduResp-${article_i}`}
                onClick={(e) => {
                  props.onResponsbilityAdd(e, 'education');
                }}
              >
                Add Responsibility
              </button>
              {article.responsibilities.length > 0 && (
                <button
                  type='button'
                  className='btn btn-danger'
                  id={`newEduResp-${article_i}`}
                  onClick={(e) => {
                    props.onResponsbilityDelete(e, 'education');
                  }}
                >
                  Delete Responsibility
                </button>
              )}
            </div>
            <button
              type='button'
              className='btn btn-danger'
              id={`delete-${article_i}`}
              onClick={(e) => props.onItemDelete(e, 'education')}
            >
              Delete Education
            </button>
          </div>
        </div>
      ))}
      <div className='mb-3'>
        <button
          type='button'
          className='btn btn-success'
          id='new-education'
          onClick={() => props.onItemAdd('education')}
        >
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
