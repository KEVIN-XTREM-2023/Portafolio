import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
        Necesitas Ayuda 
        
      </p>



      <Link to='/contact' className='btn'>
        Contactanos
      </Link>


    <a href='https://www.facebook.com/kevin.saquinga.9/' target='_blank' rel='noopener noreferrer'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png' 
        width='50' alt='Logo de Facebook' />
    </a>

    <a href='https://github.com/KEVIN-XTREM-2023' target='_blank' rel='noopener noreferrer'>
        <img src='https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png' 
        width='50' alt='Logo de GitHun' />
    </a>

    <a href='https://www.linkedin.com/in/kevyn-saquynga-08a737201/' target='_blank' rel='noopener noreferrer'>
        <img src='https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png' 
        width='50' alt='Logo de LinkenInd' />
    </a>

    <div>

  </div>


     
    </section>
  )
}

export default Cta