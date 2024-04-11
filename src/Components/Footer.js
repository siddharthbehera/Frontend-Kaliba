import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <a href="#" className="text-dark text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-dark text-decoration-none">
                Terms of Use
              </a>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <span className="text-muted">© 2024 EFW Super Admin UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;