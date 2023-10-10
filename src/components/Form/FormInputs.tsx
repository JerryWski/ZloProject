import React, { type HTMLInputTypeAttribute, type MutableRefObject } from 'react';
import './FormInputs.css';

type Props = {
  placeholder: string;
  name: HTMLInputTypeAttribute
};

const FormInputs: React.FC<Props> = (props) => {
  const {label, onChange, id, ...inputProps } = props
  return (
    <div className='form-inputs'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  );
};

export default FormInputs;
