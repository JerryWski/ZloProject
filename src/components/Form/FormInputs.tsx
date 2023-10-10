import React, { type ChangeEvent, type HTMLInputTypeAttribute} from 'react';
import './FormInputs.css';

type Props = {
  value: any;
  placeholder: string;
  name: HTMLInputTypeAttribute;
  label: string;
  id: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; 
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
