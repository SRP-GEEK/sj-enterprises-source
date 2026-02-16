const Contact = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-blue text-white py-24 px-8 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Have questions? Need a quote? We're here to help.
          </p>
        </div>
      </section>
      
      <main className="max-w-[1400px] mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary-dark mb-6 font-heading">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">Phone</h3>
                <a href="tel:+919823460907" className="text-text-gray hover:text-accent-orange">+91 9823460907</a>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">Email</h3>
                <a href="mailto:sjgrppne@gmail.com" className="text-text-gray hover:text-accent-orange">sjgrppne@gmail.com</a>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">WhatsApp</h3>
                <a href="https://wa.me/919823460907" target="_blank" rel="noopener noreferrer" className="text-text-gray hover:text-accent-orange">+91 9823460907</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary-dark mb-6 font-heading">Business Hours</h2>
            <p className="text-text-gray leading-relaxed">
              Monday - Saturday: 9:00 AM - 7:00 PM<br/>
              Sunday: Closed<br/><br/>
              We respond to WhatsApp messages 24/7
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
