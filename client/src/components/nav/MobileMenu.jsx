import { Link } from "react-router-dom";


const MobileMenu = (props) => {
  

  return (
    <div className={props.overlayMenuClass} onClick={props.clickOnHamburger}>
       <Link className="link" to="#">
            About
          </Link>
          <Link className="link" to="#">
            Contact
          </Link>
          <Link className="link" to="countries">
            Countries
          </Link>
          <Link className="link" to="treaties">
            Treaties
          </Link>
          <Link className="link" to="topics">
            Topics
          </Link>
          <Link className="link" to="organizations">
            Organizations
          </Link>
    </div>
  )


}


export default MobileMenu;