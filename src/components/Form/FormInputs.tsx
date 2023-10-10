import React, { type ChangeEvent, type HTMLInputTypeAttribute} from 'react';
import './FormInputs.css';

type Props = {
  placeholder: string;
  name: HTMLInputTypeAttribute | unknown;
  label: string;
  id: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; 
};

const FormInputs: React.FC<Props> = (props) => {
  const {label, onChange, id, ...inputProps } = props
  return (
    <div className='form-inputs'>
      <label className='form-label'>{label}</label>
      <input className='form-input' {...inputProps} onChange={onChange}/>
    </div>
  );
};

export default FormInputs;
