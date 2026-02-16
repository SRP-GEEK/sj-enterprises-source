import { Link } from 'react-router-dom';

const Gallery = () => {
  const projects = [
    { code: 'IMS', title: 'IMS School - Solapur', description: 'Complete electrical materials supply including wiring cables, distribution boards, MCBs, switches, sockets, lighting fixtures, and electrical accessories for educational facility. Technical support provided in coordination with project consultants.' },
    { code: 'IMS', title: 'IMS International School - Solapur', description: 'Electrical materials supply for modern school campus including power cables, circuit breakers, electrical panels, lighting systems, switches, outlets, and safety equipment. Technical support throughout installation.' },
    { code: 'MPS', title: 'Model Public School - Solapur', description: 'Electrical supplies including house wiring cables, conduits, MCBs, RCCBs, distribution boards, LED lights, fans, switches, sockets, and electrical fittings for complete school campus infrastructure.' },
    { code: 'VSP', title: 'Vespa Showroom - Solapur', description: 'Commercial electrical supplies including decorative lighting, track lights, LED panels, power distribution equipment, modular switches, sockets, cable management systems, and showroom electrical accessories.' },
    { code: 'DEH', title: 'Deshpande Eye Hospital - Solapur', description: 'Medical-grade electrical supplies including hospital wiring systems, specialized surgical lighting, emergency backup circuits, UPS systems, isolation transformers, medical panels, and healthcare-compliant electrical accessories.' },
    { code: 'PPP', title: 'PP Patel & Company - Copper Foundry, Solapur', description: 'Heavy industrial electrical supplies including HT/LT switchgear, industrial cables, motor control panels, contactors, relays, VFDs, industrial lighting, earthing materials, and heavy-duty electrical components. Ongoing technical support.' },
    { code: 'COM', title: 'Commercial Projects', description: 'Electrical materials for offices, retail spaces, and commercial establishments - including commercial wiring, lighting systems, power distribution boards, modular switches, energy meters, and electrical accessories.' },
    { code: 'RES', title: 'Residential Projects', description: 'Electrical supplies for homes and housing complexes - house wiring cables, MCBs, distribution boards, switches, sockets, fans, lights, geysers, doorbells, and complete residential electrical accessories.' },
    { code: 'IND', title: 'Industrial Clients', description: 'Heavy-duty electrical supplies for manufacturing and industrial units - industrial cables, switchgear, motor starters, contactors, relays, automation components, control panels, and industrial electrical equipment.' },
  ];

  const stats = [
    { icon: '50+', title: 'Years in Business', description: 'Over five decades of consistent service and growth across four generations since 1975' },
    { icon: '4G', title: 'Four Generations', description: 'Family-owned business with values and expertise passed down through generations' },
    { icon: '100%', title: 'Quality Commitment', description: 'We never compromise on product quality, sourcing only from trusted manufacturers' },
    { icon: '24/7', title: 'Support Available', description: 'Round-the-clock availability via WhatsApp for urgent project requirements and queries' },
  ];

  const testimonials = [
    { rating: '★★★★★', title: 'Reliable Material Supplier', quote: 'SJ Enterprises has been our go-to supplier for electrical materials for years. Their BOQ-based quotations are transparent, delivery is always on time, and the technical support they provide is invaluable for our projects.', author: 'Electrical Contractor, Pune' },
    { rating: '★★★★★', title: 'Quality Products & Support', quote: 'Working with SJ Enterprises on industrial projects has been seamless. They understand our requirements, supply quality materials from reputed brands, and their technical guidance helps us make the right choices.', author: 'Industrial Engineer, Solapur' },
    { rating: '★★★★★', title: 'Trusted Partnership', quote: 'As architects, we recommend SJ Enterprises to our clients with confidence. Their four-generation legacy speaks volumes, and they work collaboratively with consultants to ensure project success.', author: 'Consulting Architect, Pune' },
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
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Project Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Powering success across residential, commercial, and industrial sectors for over 50 years.
          </p>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-12 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <h2 className="section-title">Projects We've Supported</h2>
          <p className="text-lg text-text-gray leading-relaxed max-w-4xl">
            As a trusted electrical materials supplier with over 50 years of experience, SJ Enterprises 
            has partnered with leading contractors, architects, and electrical engineers to supply quality 
            materials for diverse projects. We work closely with consultants and provide technical support 
            to ensure project success. Here are some of the notable projects we've contributed to through 
            our material supply and technical expertise.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <h2 className="section-title mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-400">
                <div className="h-[280px] bg-gradient-to-br from-primary-dark to-primary-blue flex items-center justify-center text-6xl font-extrabold text-white/90 font-heading tracking-tight relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-48 h-48 bg-accent-orange rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-teal rounded-full blur-3xl"></div>
                  </div>
                  <span className="relative z-10">{project.code}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary-dark mb-3 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-text-gray leading-relaxed text-[15px]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-white rounded-3xl shadow-md p-12 mb-20">
          <h2 className="section-title mb-10">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-extrabold text-gradient mb-6 font-heading">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3 font-heading">
                  {stat.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="section-title mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="text-3xl text-gradient mb-4 font-heading">
                  {testimonial.rating}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 font-heading">
                  {testimonial.title}
                </h3>
                <p className="text-text-gray italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-primary-dark font-semibold">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-3xl shadow-md p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4 font-heading">
            Partner With a Trusted Supplier
          </h2>
          <p className="text-lg text-text-gray mb-8 max-w-3xl mx-auto">
            Whether you're a contractor, architect, electrical engineer, or builder planning a residential, 
            commercial, or industrial project, SJ Enterprises provides quality electrical materials with 
            complete technical support to ensure your project's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/919823460907" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Discuss Your Requirements
            </a>
            <Link to="/contact" className="btn bg-transparent text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300">
              Request BOQ Quote
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
