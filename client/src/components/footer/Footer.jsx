import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="header__links hide-for-mobile flex flex-jc-sa flex-ai-c">
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

      <div>
        Icons made by{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/creatype"
          title="Creatype"
        >
          Creatype
        </a>
        ,{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>
        ,{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/geotatah"
          title="geotatah"
        >
          geotatah
        </a>
        ,{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/eucalyp"
          title="Eucalyp"
        >
          Eucalyp
        </a>
        ,{" "}
        <a
          className="link"
          href="https://www.flaticon.com/authors/justicon"
          title="justicon"
        >
          justicon
        </a>
        , from{" "}
        <a className="link" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
