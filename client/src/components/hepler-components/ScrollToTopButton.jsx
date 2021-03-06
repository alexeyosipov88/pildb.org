import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  
  let [buttonStyle, setButtonStyle] = useState({ display: "none" });
  let rootElement = document.documentElement;

  useEffect(() => {
    const handleScroll = () => {
      if(rootElement.scrollTop > rootElement.clientHeight) {
        setButtonStyle({display: "block"})
      } else {
        setButtonStyle({display: "none"})
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rootElement])

  
  const handleOnClick = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleOnClick}>
      <i id='firstScrollArrow' className="scrollToTopArrow" style={buttonStyle}>
      </i>
      <i id='secondScrollArrow' className="scrollToTopArrow" style={buttonStyle}>
      </i>
      <i id='thirdScrollArrow' className="scrollToTopArrow" style={buttonStyle}>
      </i>
    </div>
  );
};

export default ScrollToTopButton;
