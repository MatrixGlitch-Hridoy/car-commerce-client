import React from 'react';

const Contact = () => {
    return (
      <div style={{background:'#eee'}} className="py-2">
      <h1 className="text-center mt-5 fw-bolder">Contact Us</h1>
      <div className="container p-5">
        <form className="mb-5">
          <div className="row mx-auto align-items-center">
            <div className="col-md-6">
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Your Name *"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
            <div className="d-grid mt-5 ">
              <input
                type="submit"
                name="btnSubmit"
                className="btn btn-warning fw-bolder"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Contact;