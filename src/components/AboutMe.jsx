import smallPhoto from '/images/photo_small.jpg'; // Adjust path as necessary

function AboutMe() {
  return (
    <section className="pt-page" data-id="about_me">
      <div className="section-title-block">
        <h2 className="section-title">About Me</h2>
        <h5 className="section-description">Artist, Thinker, Creative Doer</h5>
      </div>
      {/* Content of About Me */}
      <div className="row">
        <div className="col-sm-12 col-md-12 mobile-visible subpage-block">
          <div className="my-photo-small">
            <img src={smallPhoto} alt="Small Profile" />
          </div>
        </div>
        {/* More content here */}
      </div>
    </section>
  );
}

export default AboutMe;
