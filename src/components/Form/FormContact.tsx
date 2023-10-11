import React, { useState } from 'react';
import './FormContact.css';
import FormInputs from './FormInputs';

interface FormValues {
  username: string;
  surname: string;
  company: string;
  address: string;
  phone: string;
  textareaValue: string;
  [key: string]: string;
}

const FormContact = () => {
  const [values, setValues] = useState<FormValues>({
    username: '',
    surname: '',
    company: '',
    address: '',
    phone: '',
    textareaValue: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Imię',
      errorMessage: 'Wpisz swoje imię',
      label: '',
      pattern: '^[A-Za-z0-9]{1,20}$',
      required: true,
    },
    {
      id: 2,
      name: 'surname',
      type: 'text',
      placeholder: 'Nazwisko',
      errorMessage: 'Wpisz swoje nazwisko',
      label: '',
      pattern: '^[A-Za-z0-9]{1,20}$',
      required: true,
    },
    {
      id: 3,
      name: 'company',
      type: 'text',
      placeholder: 'Nazwa Firmy',
      errorMessage: 'Podaj nazwę swojej firmy',
      label: '',
      required: true,
    },
    {
      id: 4,
      name: 'address',
      type: 'text',
      placeholder: 'Adres WWW',
      errorMessage: 'Podaj adres swoje strony WWW',
      label: '',
    },
    {
      id: 5,
      name: 'phone',
      type: 'number',
      placeholder: 'Telefon',
      errorMessage: 'Podaj swój telefon',
      label: '',
      pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$',
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(values);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);
  return (
    <form className='form-container' onSubmit={handleSubmit} method='post'>
      {inputs.map((input) => (
        <FormInputs
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <textarea
        className='text-area'
        name='textareaValue'
        id=''
        placeholder='Skrobnij coś do mnie'
        value={values.textareaValue}
        onChange={handleTextAreaChange}
      ></textarea>
      <button className='form-button' type='submit'>
        Skrobnij do mnie
      </button>
    </form>
  );
};

export default FormContact;
