import React, { type HTMLInputTypeAttribute, type MutableRefObject } from 'react';
import './FormInputs.css';

type Props = {
  placeholder: string;
  name: HTMLInputTypeAttribute
};

const FormInputs: React.FC<Props> = (props) => {
  return (
    <div className='form-inputs'>
      {/* <label htmlFor="username">Username</label> */}
      <input name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInputs;
