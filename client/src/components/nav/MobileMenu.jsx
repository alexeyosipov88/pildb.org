import { Link } from "react-router-dom";


const MobileMenu = (props) => {
  

  return (
    <div className={props.overlayMenuClass} onClick={props.clickOnHamburger}>
       <Link className="link" to="#"  target="_blank" rel="noopener noreferrer">
            About
          </Link>
          <Link className="link" to="#"  target="_blank" rel="noopener noreferrer">
            Contact
          </Link>
          <Link className="link" to="countries">
            Countries
          </Link>
          <Link className="link" to="treaties"  target="_blank" rel="noopener noreferrer">
            Treaties
          </Link>
          <Link className="link" to="topics">
            Topics
          </Link>
          <Link className="link" to="organizations"  target="_blank" rel="noopener noreferrer">
            Organizations
          </Link>
    </div>
  )


}


export default MobileMenu;