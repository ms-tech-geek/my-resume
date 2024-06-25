import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="pt-page pt-page-5" data-id="contact">
      <div className="section-title-block">
        <h2 className="section-title">Contact</h2>
        <h5 className="section-description">Get in Touch</h5>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-6 subpage-block">
          <div className="block-title">
            <h3>Get in Touch</h3>
          </div>
          <p>
            Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae
            tristique ante. Cras pretium rutrum egestas. Integer ultrices libero
            sed justo vehicula, eget tincidunt tortor tempus.
          </p>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="pe-7s-icon pe-7s-map-marker"></i>
            </div>
            <div className="ci-text">
              <h5>Los Angeles, USA</h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="pe-7s-icon pe-7s-mail"></i>
            </div>
            <div className="ci-text">
              <h5>
                <a href="mailto:email@example.com">email@example.com</a>
              </h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="pe-7s-icon pe-7s-call"></i>
            </div>
            <div className="ci-text">
              <h5>+123 654 78900</h5>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="ci-icon">
              <i className="pe-7s-icon pe-7s-check"></i>
            </div>
            <div className="ci-text">
              <h5>Freelance Available</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 subpage-block">
          <div className="block-title">
            <h3>Contact Form</h3>
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required="required"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="form-control-border"></div>
                <i className="form-control-icon fa fa-user"></i>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required="required"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="form-control-border"></div>
                <i className="form-control-icon fa fa-envelope"></i>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Message for me"
                  rows="4"
                  required="required"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="form-control-border"></div>
                <i className="form-control-icon fa fa-comment"></i>
                <div className="help-block with-errors"></div>
              </div>

              <input
                type="submit"
                className="button btn-send"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
