import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="bg-teal-700 text-white text-xl" id="footer">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          2601 Bell Road
          <br />
          Glendale, Arizona 85308
          <br />
          Email:{" "}
          <a href="mailto:acmerockets@gmail.com">acmerockets@gmail.com</a>
          <br />
          Phone: <a href="tel:+16032815501">(603) 281-5501</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contactus" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">{currentYear}</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
