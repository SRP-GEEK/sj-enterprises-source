import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16 px-12 mt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">
              SJ Enterprises
            </h3>
            <p className="text-white/80 leading-relaxed">
              Electrical Accessories & Project Supply<br />
              Serving since 1975<br />
              50+ Years of Trust & Quality
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-accent-orange transition-colors">Products</Link></li>
              <li><Link to="/industries" className="text-white/80 hover:text-accent-orange transition-colors">Industries We Serve</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-accent-orange transition-colors">How Pricing Works</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-accent-orange transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">
              Contact Information
            </h3>
            <p className="text-white/80 leading-relaxed">
              📞 Phone: <a href="tel:+919823460907" className="hover:text-accent-orange transition-colors">+91 9823460907</a><br />
              📧 Email: <a href="mailto:sjgrppne@gmail.com" className="hover:text-accent-orange transition-colors">sjgrppne@gmail.com</a><br />
              💬 WhatsApp: <a href="https://wa.me/919823460907" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">+91 9823460907</a>
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">
              Business Hours
            </h3>
            <p className="text-white/80 leading-relaxed">
              Monday - Saturday: 9:00 AM - 7:00 PM<br />
              Sunday: Closed<br /><br />
              We respond to WhatsApp messages 24/7
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-[15px]">
            &copy; 2025 SJ Enterprises. All rights reserved. | Est. 1975
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
