import { Link } from "react-router-dom";
const About = () => {
  
  return (
    <header>
      Welcome to Private International Law Database. The database contains information about the status of these conventions (contracting parties, dates of signature and ratification (accession) etc.). You can browse these treaties by <Link className='link' to="/countries">participating countries</Link> ,<Link className="link" to='/topics'> topics</Link> and <Link className="link" to='/organizations'> administrating organizatins</Link>. 
    </header>
  );

}

export default About;