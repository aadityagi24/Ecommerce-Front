import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title="Privacy Policy - QuickCart">
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="row g-0">
                {/* Image Section */}
                <div className="col-md-6">
                  <img
                    src="/images/privacy.jpg"
                    alt="Privacy Protection Illustration"
                    className="img-fluid h-100 rounded-start"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Policy Content Section */}
                <div className="col-md-6 p-4">
                  <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>
                    🔒 Privacy Policy
                  </h2>
                  
                  <div className="policy-content">
                    <p className="mb-3 text-muted">
                      At <strong>QuickCart</strong>, we value your privacy and are committed to protecting your personal data. 
                      Any information we collect is used solely to improve your shopping experience.
                    </p>

                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded">
                      <div>
                        <h6 className="mb-1 fw-bold">Data Collection</h6>
                        <p className="mb-0 text-muted">
                          We only collect necessary information for order processing and account management.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3 p-3 bg-light rounded">
                      <div>
                        <h6 className="mb-1 fw-bold">Data Protection</h6>
                        <p className="mb-0 text-muted">
                          All personal and payment information is encrypted using industry-standard protocols.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start p-3 bg-light rounded">
                      <div>
                        <h6 className="mb-1 fw-bold">Your Rights</h6>
                        <p className="mb-0 text-muted">
                          You can request access, correction, or deletion of your personal data at any time.
                        </p>
                      </div>
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

export default Policy;