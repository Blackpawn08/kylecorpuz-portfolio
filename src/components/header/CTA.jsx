import React from "react";
import KyleCorpuzCv from '../../assets/KyleCorpuzCv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={KyleCorpuzCv}download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Reach me!</a>
    </div>
  );
};

export default CTA;
