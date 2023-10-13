// import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState, useRef } from 'react';
import './FormContact.css';
import FormInputs from './FormInputs';
import emailjs from '@emailjs/browser';

interface FormValues {
  username: string;
  email: string;
  company: string;
  address: string;
  phone: string;
  textareaValue: string;
  [key: string]: string;
}

const FormContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    company: '',
    address: '',
    phone: '',
    textareaValue: '',
  });

  const clearForm = () => {
    setValues({
      username: '',
      email: '',
      company: '',
      address: '',
      phone: '',
      textareaValue: '',
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_q1yd8kj',
          'template_esmkt58',
          form.current,
          '-s7vlTiTNjFo6Rcnk',
        )
        .then(
          (result) => {
            console.log(result.text);
            clearForm();
            setIsMessageSent(true);
            setTimeout(() => {
              setIsMessageSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

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
      name: 'email',
      type: 'email',
      placeholder: 'Adres e-mail',
      errorMessage: 'Wpisz swój adres e-mail',
      label: '',
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
      pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
      required: true,
    },
  ];

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isMessageSent ? (
        <p className='sent-mail'>Wiadomość została wysłana. Odezwę się!</p>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className='form-container'
          action=''
          method='POST'
        >
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
          {/* <div className='recaptch'>
            <ReCAPTCHA sitekey='6LdBUpwoAAAAAMHGweBQD3q41tdgTXVrACjWXLcx'size='compact'  />
          </div> */}
          <button className='form-button' type='submit'>
            Skrobnij do mnie
          </button>
        </form>
      )}
    </>
  );
};

export default FormContact;
