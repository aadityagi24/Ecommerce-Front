import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title="Contact Us - QuickCart">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm overflow-hidden">
              <div className="row g-0">
                {/* Image Section */}
               <div className="col-md-6">
  <img
    src="/images/contact_us.jpg"
    alt="Customer support team available to help"
    className="img-fluid h-100 object-fit-cover"
    style={{ minHeight: '400px' }}
  />
</div>

                {/* Contact Details Section */}
                <div className="col-md-6 p-4 p-lg-5">
                  <h1 className="h2 text-center mb-4 text-dark">
                    Contact Us
                  </h1>
                  
                  <p className="mb-4 text-muted text-center">
                    Have questions or need help? Our team is available 24/7 to assist you.
                  </p>

                  <div className="contact-details">
                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded hover-shadow">
                      <BiMailSend className="mt-1 me-3 fs-4 text-primary" />
                      <div>
                        <h2 className="h6 mb-1 fw-bold">Email Support</h2>
                        <a href="mailto:help@quickcart.com" className="text-decoration-none">
                          help@quickcart.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded hover-shadow">
                      <BiPhoneCall className="mt-1 me-3 fs-4 text-primary" />
                      <div>
                        <h2 className="h6 mb-1 fw-bold">Phone Support</h2>
                        <a href="tel:+910123456789" className="text-decoration-none">
                          +91 012-3456789
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start p-3 bg-light rounded hover-shadow">
                      <BiSupport className="mt-1 me-3 fs-4 text-primary" />
                      <div>
                        <h2 className="h6 mb-1 fw-bold">Toll Free</h2>
                        <a href="tel:18000000000" className="text-decoration-none">
                          1800-0000-0000
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 text-center">
                    <p className="small text-muted mb-2">
                      Average response time: under 2 hours
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        Live Chat
                      </a>
                      <a href="#" className="btn btn-outline-secondary btn-sm">
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;