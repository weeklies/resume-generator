import React from 'react';
import { FormProps } from '../../models/models';

const WorkForm = (props: FormProps) => {
  return (
    <div className='workFormSection'>
      <h5>Work Details</h5>
      {props.work.articles.map((article, article_i) => (
        <div key={article_i}>
          <div className='mb-3'>
            <label htmlFor={`role-${article_i}`} className='form-label'>
              Role
            </label>
            <input
              type='text'
              className='form-control'
              id={`role-${article_i}`}
              onChange={(e) => props.onElementChange(e, 'work')}
              placeholder={article.role}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor={`company-${article_i}`} className='form-label'>
              Company
            </label>
            <input
              type='text'
              className='form-control'
              id={`company-${article_i}`}
              onChange={(e) => props.onElementChange(e, 'work')}
              placeholder={article.company}
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
              onChange={(e) => props.onElementChange(e, 'work')}
              placeholder={article.date}
            />
          </div>

          {article.responsibilities.map((responsible, resp_i) => (
            <div className='mb-3' key={resp_i}>
              <label
                htmlFor={`workResp-${article_i}-${resp_i}`}
                className='form-label'
              >
                Responsibility {resp_i + 1}
              </label>
              <textarea
                className='form-control me-2'
                id={`workResp-${article_i}-${resp_i}`}
                onChange={(e) => props.onElementChange(e, 'work')}
                placeholder={responsible}
              />
            </div>
          ))}

          <div className='mb-3 d-flex justify-content-between'>
            <div>
              <button
                type='button'
                className='btn btn-primary me-3'
                id={`newWorkResp-${article_i}`}
                onClick={(e) => {
                  props.onResponsbilityAdd(e, 'work');
                }}
              >
                Add Responsibility
              </button>
              {article.responsibilities.length > 0 && (
                <button
                  type='button'
                  className='btn btn-danger'
                  id={`newWorkResp-${article_i}`}
                  onClick={(e) => {
                    props.onResponsbilityDelete(e, 'work');
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
              onClick={(e) => props.onItemDelete(e, 'work')}
            >
              Delete Job
            </button>
          </div>
        </div>
      ))}
      <div className='mb-3'>
        <button
          type='button'
          className='btn btn-success'
          onClick={() => props.onItemAdd('work')}
        >
          Add Job
        </button>
      </div>
    </div>
  );
};

export default WorkForm;
