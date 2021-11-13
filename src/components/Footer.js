import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
        <footer className="text-center text-lg-start text-white bg-dark">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Car-Commerce
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Services
                  </h6>
                  <p className="text-white">Web Development</p>
                  <p className="text-white">Mern Stack Development</p>
                  <p className="text-white">Android Development</p>
                  <p className="text-white">Wordpress</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p className="text-white">Your Account</p>
                  <p className="text-white">Become an Affiliate</p>
                  <p className="text-white">Shipping Rates</p>
                  <p className="text-white">Help</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>Uttara, Dhaka, Bangladesh</p>
                  <p>info@gmail.com</p>
                  <p>+880 1755567888</p>
                  <p>+ 01 234 567 89</p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <div className="text-center">
              <div className="p-3">
                © 2021 Copyright:
                <a
                  className="text-white"
                  href="https://github.com/MatrixGlitch-Hridoy"
                >
                  MatrixGlitch-Hridoy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
        </div>
    );
};

export default Footer;