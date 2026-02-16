const Products = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-blue text-white py-24 px-8 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Comprehensive electrical solutions for every project need
          </p>
        </div>
      </section>
      
      <main className="max-w-[1400px] mx-auto px-12 py-16">
        <h2 className="section-title">Product Categories Coming Soon</h2>
        <p className="text-lg text-text-gray">Complete product catalog under development.</p>
      </main>
    </div>
  );
};

export default Products;
