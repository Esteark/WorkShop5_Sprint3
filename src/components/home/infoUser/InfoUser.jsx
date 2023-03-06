import React from "react";
import "./stylesUser.scss";

const InfoUser = () => {
  return (
    <section className="SecUser">
      <article className="SecUser__article">
        <h2>Home</h2>
        <p>¡Que bueno verte {"user"}!</p>
      </article>
      <figure className="SecUser__figure">
        <img
          src="https://fotografias.antena3.com/clipping/cmsimages01/2021/05/02/26E03450-C5FB-4D16-BC9B-B282AE784352/57.jpg"
          alt=""
        />
      </figure>
    </section>
  );
};

export default InfoUser;
