import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { icon: '✓', title: 'Trust & Integrity', description: 'We build relationships on honesty, transparency, and delivering on our promises. Our reputation is our most valuable asset.' },
    { icon: '★', title: 'Quality First', description: 'We source only from reputable manufacturers and never compromise on product quality, ensuring your projects meet the highest standards.' },
    { icon: '24/7', title: 'Partnership Mindset', description: 'Your success is our success. We work closely with clients to understand their needs and provide solutions that drive results.' },
    { icon: '↑', title: 'Continuous Growth', description: 'We stay ahead of industry trends, continuously expanding our product range and capabilities to serve you better.' },
  ];

  const differentiators = [
    { icon: '4G', title: 'Four Generations of Expertise', description: 'Family values meet professional excellence. Our generational knowledge ensures you receive insights and service refined over decades.' },
    { icon: 'BOQ', title: 'BOQ-Based Customization', description: 'We don\'t believe in one-size-fits-all. Every quotation is tailored to your specific Bill of Quantities and project requirements.' },
    { icon: 'PRJ', title: 'Project Understanding', description: 'From residential to large industrial projects, we understand the unique challenges and requirements of each sector.' },
    { icon: '⏰', title: 'Timely Delivery', description: 'We know project timelines are critical. Our efficient supply chain ensures your materials arrive when you need them.' },
    { icon: '$', title: 'Competitive Pricing', description: 'Our industry relationships and volume purchasing power mean better prices for you without compromising quality.' },
    { icon: '☎', title: 'Responsive Service', description: 'Questions? Concerns? We\'re always available to provide guidance and support throughout your project lifecycle.' },
  ];

  const approach = [
    { number: '1', title: 'Understanding Your Needs', description: 'We begin by listening to your project requirements. Working closely with architects, electrical engineers, and contractors, we understand the technical specifications and project constraints to recommend the right materials.' },
    { number: '2', title: 'Technical Support & Recommendations', description: 'Drawing on our 50+ years of experience, we provide technical guidance and product recommendations that meet your specifications. We work collaboratively with consultants to ensure material selection aligns with project design and compliance requirements.' },
    { number: '3', title: 'Transparent BOQ-Based Quotations', description: 'We provide detailed, itemized quotations based on your Bill of Quantities with complete transparency on pricing, brands, and specifications. No hidden costs, just clear pricing that helps you budget accurately.' },
    { number: '4', title: 'Reliable Supply & Ongoing Support', description: 'Our commitment doesn\'t end at delivery. We ensure timely material supply to keep your projects on schedule, and remain available for technical support throughout installation and beyond.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-blue text-white py-24 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Legacy of Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Four generations, 50+ years of trust, and countless successful projects. 
            Discover the SJ Enterprises story.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-16">
        {/* Company History */}
        <section className="mb-20">
          <h2 className="section-title">Since 1975</h2>
          <p className="text-lg text-text-gray leading-relaxed mb-6 max-w-4xl">
            SJ Enterprises was established in 1975 with a clear mission: to provide quality electrical 
            accessories and project materials backed by integrity, technical expertise, and exceptional 
            service. What began as a modest venture has grown into a trusted supplier for contractors, 
            builders, architects, and electrical engineers across the region.
          </p>
          <p className="text-lg text-text-gray leading-relaxed max-w-4xl">
            Today, we carry forward a legacy that spans over 50 years and four generations. We've built 
            strong relationships with leading manufacturers and consultants, working collaboratively with 
            architects and electrical engineers to provide technical support and quality materials that 
            bring their vision to life. Our commitment to reliability and customer satisfaction remains 
            as strong as it was on day one.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="section-title mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center hover:-translate-y-2 transition-transform duration-300 p-6">
                <div className="text-5xl font-extrabold text-gradient mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="bg-neutral-light rounded-3xl p-12 mb-20">
          <h2 className="section-title mb-10">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="card">
                <div className="w-[70px] h-[70px] mx-auto mb-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-accent-orange font-heading">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 font-heading">
                  {item.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <h2 className="section-title mb-6">Our Approach</h2>
          <p className="text-lg text-text-gray mb-10 max-w-4xl">
            At SJ Enterprises, we believe in building long-term partnerships with contractors, consultants, 
            and builders. Here's how we support your projects:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 relative shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-gold text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 mt-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-light rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4 font-heading">
            Experience the SJ Enterprises Difference
          </h2>
          <p className="text-lg text-text-gray mb-8 max-w-3xl mx-auto">
            Partner with a company that values your trust as much as you do. Let's discuss how we 
            can support your next project with quality products and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/919823460907" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn bg-transparent text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
