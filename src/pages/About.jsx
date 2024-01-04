import React from 'react'
import { extras  } from '../constants';
import {languajeDatabase} from '../constants';
import {dataAnalitic} from '../constants';
import {framework} from '../constants';
import Cta from '../components/Cta';
const About = () => {
  return (
    <section className='max-container'>
       <h1 className='head-text'>
        Hola, Soy {" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Kevin Saquinga
        </span>{" "}
        👋
      </h1>

      <h1 className=' subhead-text  mt-5 flex flex-col gap-3 blue-gradient_text  font-medium' >
      Sobre mí
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Soy Ingeniero en Software en la Universidad Técnica de Ambato. 
        Me gusta resolver problemas y la codificación.
       Mi pasión por la programación 
        me impulsa a explorar constantemente nuevas soluciones y a contribuir de manera significativa al emocionante mundo de la ingeniería de software.
        </p>
      </div>
      <h1 className=' subhead-text  mt-5 flex flex-col gap-3 blue-gradient_text  font-medium' >
      Full Stack Development
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Mi objetivo es desempeñar un papel integral en el desarrollo y 
        despliegue de soluciones tecnológicas innovadoras. Busco aprovechar 
        mis habilidades en el diseño y la implementación de sistemas front-end y
         back-end para contribuir al éxito de proyectos que combinen eficiencia, 
         usabilidad y rendimiento. 
        </p>
      </div>

      <div className='py-10 flex flex-col '>
        <h3 className='footer blue-gradient_text font-bold'>Habilidades</h3>
        <h3 className=' mt-5 subhead-text blue-gradient_text font-medium'>Lenguajes y Base de Datos</h3>
        
        <div className='mt-16 flex flex-wrap gap-12'>
        {languajeDatabase.map((languajeDatabase) => (
            <div className='block-container w-20 h-20' key={languajeDatabase.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={languajeDatabase.imageUrl}
                  alt={languajeDatabase.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        
        <h3 className=' mt-5 subhead-text blue-gradient_text font-medium'>Librerias</h3>

       <div className='mt-16 flex flex-wrap gap-12'>
        {dataAnalitic.map((dataAnalitic) => (
            <div className='block-container w-20 h-20' key={dataAnalitic.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={dataAnalitic.imageUrl}
                  alt={dataAnalitic.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div> 

        <h3 className=' mt-5 subhead-text blue-gradient_text font-medium'>Frameworks</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
        {framework.map((framework) => (
            <div className='block-container w-20 h-20' key={framework.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={framework.imageUrl}
                  alt={framework.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div> 


        <h3 className=' mt-5 subhead-text blue-gradient_text font-medium'>Extras</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
        {extras.map((extras) => (
            <div className='block-container w-20 h-20' key={extras.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={extras.imageUrl}
                  alt={extras.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div> 
    

      </div>
      
      <hr className="border-slate-20"  />
      <Cta />
    </section>
  )
}

export default About