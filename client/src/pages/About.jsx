import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title="About - QuickCart">
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Main About Card */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="row g-0">
                {/* Image Section */}
                <div className="col-md-6">
                  <img
                    src="/images/about_us.jpg"
                    alt="About QuickCart Team"
                    className="img-fluid h-100 rounded-start"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Text Section */}
                <div className="col-md-6 p-4">
                  <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>
                    About <span style={{ color: '#dc3545' }}>Quick</span>Cart
                  </h2>
                  
                  <div className="about-content">
                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded">
                      <div>
                        <h6 className="mb-1 fw-bold">Who We Are</h6>
                        <p className="mb-0 text-muted">
                          Your reliable destination for seamless online shopping, delivering everything from daily essentials to the latest tech.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded">
                      <div>
                        <h6 className="mb-1 fw-bold">Our Promise</h6>
                        <p className="mb-0 text-muted">
                          Fast, safe, and convenient shopping designed for simplicity and speed without compromising quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="text-center mb-4" style={{ color: '#2c3e50' }}>Our Mission</h3>
                <div className="d-flex align-items-start p-3 bg-light rounded">
                  <div>
                    <p className="mb-0 text-muted">
                      At QuickCart, we don't just sell products — we build lasting trust through 
                      convenience and care. Our customer-first approach means user-friendly navigation, 
                      secure payments, and dedicated support to provide an experience that's smooth 
                      and trustworthy.
                    </p>
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

export default About;