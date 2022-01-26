import { Link } from "react-router-dom";
const About = () => {
  
  return (
    <header>
      Welcome to Private International Law Database. The database contains information about the status of multilateral treaties related to this area of law (city of signature, dates of signature and entry into force, contracting parties etc.). You can browse the treaties by <Link className='link' to="/countries">participating countries</Link> ,<Link className="link" to='/topics'> topics</Link> and <Link className="link" to='/organizations'> administrating organizatins</Link>. 
    </header>
  );

}

export default About;