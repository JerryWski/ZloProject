import React, { useRef, useState } from 'react';
import './FormContact.css';
import FormInputs from './FormInputs';

const FormContact = () => {
  const [values, setValues] = useState({
    username: '',
    surname: '',
    company: '',
    address: '',
    phone: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Imię',
      label: 'username',
    },
    {
      id: 2,
      name: 'surname',
      type: 'text',
      placeholder: 'Nazwisko',
      label: 'surname',
    },
    {
      id: 3,
      name: 'company',
      type: 'text',
      placeholder: 'Nazwa Firmy',
      label: 'company',
    },
    {
      id: 4,
      name: 'address',
      type: 'text',
      placeholder: 'Adres WWW',
      label: 'address',
    },
    {
      id: 5,
      name: 'phone',
      type: 'number',
      placeholder: 'Telefon',
      label: 'phone',
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
console.log(values);
  return (
    <form className='form-container' onSubmit={handleSubmit} method="POST">
      {inputs.map((input) => (
        <FormInputs
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <textarea
        name='textarea'
        id=''
        placeholder='Skrobnij coś do mnie'
      ></textarea>
      <button>Skrobnij do mnie</button>
    </form>
  );
};

export default FormContact;
