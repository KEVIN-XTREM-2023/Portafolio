import { Link } from "react-router-dom";
import Cta from '../components/Cta';
import { arrow } from "../assets/icons";
import { projects } from "../constants";
import { projectPerson } from "../constants";
import { project1 } from "../constants";
import { project2 } from "../constants";
const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Mis{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Proyectos
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
       
       He completado varios proyectos a lo largo del tiempo, 
       algunos de los cuales emprendí de manera individual y
       otros en colaboración con equipos. A continuación, se
       presentan algunos de los trabajos realizados durante
       este periodo. La mayoría de ellos corresponden a proyectos 
       finales de semestre. Si encuentras algo de interés y deseas 
       conocer más sobre cómo se llevó a cabo, no dudes en explorar el código base. 
       Además, tu colaboración es muy valiosa; cualquier ayuda para contribuir con 
       ideas destinadas a futuras mejoras será bienvenida. ¡Apreciamos mucho tu participación!
     </p>
    
     <div className='flex flex-wrap my-20 gap-16'>
        {projectPerson.map((projectPerson) => (
          <div className='lg:w-[400px] w-full' key={projectPerson.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${projectPerson.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={projectPerson.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {projectPerson.name}
              </h4>
              <p className='mt-2 text-slate-500'>{projectPerson.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={projectPerson.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Ver
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className='flex flex-wrap my-20 gap-16'>
        {project2.map((project2) => (
          <div className='lg:w-[400px] w-full' key={project2.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project2.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project2.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project2.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project2.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project2.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Ver
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>



     <h3 className=' mt-5 subhead-text blue-gradient_text font-medium'>Proyectos en grupo</h3>

     <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Ver
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='flex flex-wrap my-20 gap-16'>
        {project1.map((project1) => (
          <div className='lg:w-[400px] w-full' key={project1.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project1.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project1.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project1.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project1.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project1.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Ver
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <Cta />
    </section>

  );



};

export default Projects;