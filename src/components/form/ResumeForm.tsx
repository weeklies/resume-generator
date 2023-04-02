import React from 'react';
import { FormProps } from '../../models/models';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';

const ResumeForm = (props: FormProps) => {
  return (
    <form>
      <div className='personalFormSection'>
        <h5>Personal Details</h5>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            onChange={props.onElementChange}
            placeholder={props.general.name}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            onChange={props.onElementChange}
            placeholder={props.general.email}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>
            Phone Number
          </label>
          <input
            type='text'
            className='form-control'
            id='phone'
            onChange={props.onElementChange}
            placeholder={props.general.phone}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='subtitle' className='form-label'>
            Summary
          </label>
          <textarea
            className='form-control'
            id='subtitle'
            rows={3}
            onChange={props.onElementChange}
            placeholder={props.general.subtitle}
          />
        </div>
      </div>

      <EducationForm {...props} />
      <WorkForm {...props} />
    </form>
  );
};

export default ResumeForm;
