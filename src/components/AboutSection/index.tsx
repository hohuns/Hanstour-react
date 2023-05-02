import "../../sass/main.scss";
import img1 from "../../assets/img/nat-1.jpg";
import img1Large from "../../assets/img/nat-1-large.jpg";
import img2 from "../../assets/img/nat-2.jpg";
import img2Large from "../../assets/img/nat-2-large.jpg";
import img3 from "../../assets/img/nat-3.jpg";
import img3Large from "../../assets/img/nat-3-large.jpg";

const AboutSection = () => {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>

            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                srcSet={`${img1} 300w, ${img1Large} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="P1"
                className="composition__photo composition__photo--p1"
                src={img1Large}
              />

              <img
                srcSet={`${img2} 300w, ${img2Large} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="P2"
                className="composition__photo composition__photo--p2"
                src={img2Large}
              />

              <img
                srcSet={`${img3} 300w, ${img3Large} 1000w`}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="P3"
                className="composition__photo composition__photo--p3"
                src={img2Large}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
