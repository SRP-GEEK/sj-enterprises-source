import { Link } from 'react-router-dom';

const Home = () => {
  const trustItems = [
    { icon: '50+', title: 'Years Legacy', description: 'Established in 1975, trusted across four generations of electrical expertise' },
    { icon: '✓', title: 'Quality Products', description: 'Sourcing from leading manufacturers to ensure reliability and performance' },
    { icon: 'BOQ', title: 'BOQ-Based Quotes', description: 'Customized quotations tailored to your exact project requirements' },
    { icon: '24/7', title: 'Long-term Partnerships', description: 'Building relationships that last through superior service and support' },
  ];

  const products = [
    { icon: 'SW', title: 'Industrial Switchgear', description: 'High-quality switchgear and control equipment for industrial applications' },
    { icon: 'WC', title: 'Wires & Cables', description: 'Comprehensive range of electrical wires and cables for all installations' },
    { icon: 'PB', title: 'Panels & Boards', description: 'Distribution panels and boards engineered for safety and efficiency' },
    { icon: 'LS', title: 'Lighting Solutions', description: 'Modern lighting systems for commercial and industrial spaces' },
    { icon: 'AC', title: 'Automation Components', description: 'Smart automation solutions for modern electrical systems' },
    { icon: 'EA', title: 'Electrical Accessories', description: 'Complete range of electrical fittings and accessories' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-blue text-white py-24 px-8 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Reliable Electrical Solutions Backed by 50+ Years of Trust
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            From industrial switchgear to complete project materials, SJ Enterprises delivers 
            quality electrical solutions across four generations. Partner with a legacy built on 
            reliability, expertise, and unwavering commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/919823460907" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Quote on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Request BOQ
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <h2 className="section-title">Who We Are</h2>
          <p className="text-lg text-text-gray leading-relaxed mb-6 max-w-4xl">
            Since 1975, SJ Enterprises has been a trusted name in electrical accessories and project 
            material supply. With over 50 years of industry experience spanning four generations, we 
            serve residential, commercial, and industrial clients with customized solutions backed by 
            quality products and personalized service.
          </p>
          <p className="text-lg text-text-gray leading-relaxed max-w-4xl">
            Our expertise lies in understanding project requirements and delivering BOQ-based quotations 
            that meet your exact specifications. Whether you're a contractor, builder, or industry 
            professional, we're your reliable partner for electrical excellence.
          </p>
        </section>

        {/* Trust Section */}
        <section className="bg-white rounded-3xl shadow-md p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {trustItems.map((item, index) => (
              <div key={index} className="text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-extrabold text-gradient mb-6 font-heading tracking-tight">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-20">
          <h2 className="section-title mb-8">What We Offer</h2>
          <p className="text-lg text-text-gray mb-10">
            Comprehensive electrical solutions for every project need
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-accent-orange before:to-accent-gold before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-400">
                <div className="w-[70px] h-[70px] mx-auto mb-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-accent-orange font-heading tracking-tight group-hover:bg-gradient-to-r group-hover:from-accent-orange group-hover:to-accent-gold group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 font-heading">
                  {product.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-3xl shadow-md p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need a quote for a large project or have questions about our products, 
            we're here to help. Reach out today for personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/919823460907" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn bg-transparent text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
