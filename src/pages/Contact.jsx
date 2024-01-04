import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
const Contact = () => {
  const formRef= useRef(null);

  const [form, setForm] = useState({name:'', email:'', message:''})
  const [isLoadin, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const handleChange =(e) =>{
    setForm({...form, [e.target.name]:e.target.value})
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    setIsLoading(true); 

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);


    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Kevin",
        from_email:form.email,
        to_email :'ksaquynga@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() =>{
      setIsLoading(false);
        showAlert({show:true, text:'Mensaje Enviado',type:'Correcto'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:'',email:'',message:''});

      }, [3000]);

      
    }).catch((error) =>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show:true, text:'Mensaje No enviado',type:'danger'})

    })
  };


  const handleFocus=() =>{};
  const handleBlur =() =>{};



  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      {alert.show && <Alert {...alert} />}
{/*       <Alert text = "test" />
 */}      
      <div className="flex-1  min-w-[50%] flex flex-col">
        <h1 className="head-text">Contactanos</h1>
        <form
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
        <label className="text-black-500 font-semibold">
          Nombre
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Kevin'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        
        </label>

        <label className="text-black-500 font-semibold">
          Email
          <input
            type='email'
            name='email'
            className='input'
            placeholder='Kevin@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        
        </label>


        <label className="text-black-500 font-semibold">
          Mensaje
          <textarea
            name='message'
            rows={5}
            className='textarea'
           
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        
        </label>

        <button 
        type='submit' 
        className='btn' 
        disabled={isLoadin}
        onFocus={handleFocus}
        onBlur={handleBlur}

        >
          {isLoadin ? 'Enviando .... ':'Enviar Mensaje'}
        </button>

        </form>
      </div>
    </section>
    )
}

export default Contact