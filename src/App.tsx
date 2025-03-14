import React, { useState, useEffect } from 'react';
import { School as Pool, Clock, PhoneCall, CheckCircle2, Droplets, Phone, ClipboardCheck, Calendar, Sparkles, Palette, TreePine, FlaskRound as Flask, HeartHandshake } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Pool & Spa Medics has given me complete peace of mind. Their attention to detail and commitment to excellence is unmatched in the industry.",
      author: "LENNA CASTAGNA"
    },
    {
      quote: "The most professional pool service I've ever worked with. Their expertise and customer service are truly exceptional.",
      author: "BRIAN A."
    },
    {
      quote: "Without a doubt, the best pool company I've ever hired. Their team is knowledgeable, reliable, and always goes above and beyond.",
      author: "BILL P."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Pool & Spa Medics</h1>
              <p className="text-xl mb-8">Professional pool and spa maintenance services to keep your water pristine and equipment running smoothly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Trust Us Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left side - Image */}
            <div className="md:col-span-3 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-blue-900/10 pattern-grid-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2069"
                  alt="Award winning team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="md:col-span-2 text-center space-y-8">
              <div className="space-y-6">
                <p className="text-blue-900 font-semibold tracking-wider">WHY TRUST US</p>
                <h2 className="text-4xl font-serif italic text-gray-900">A priority on education</h2>
                <p className="text-gray-600 leading-relaxed">
                  With over two decades of experience and continuous education in the latest pool and spa technologies, 
                  our certified professionals bring unmatched expertise to every service call. We're proud members of 
                  the Pool & Hot Tub Alliance, committed to maintaining the highest industry standards.
                </p>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 pt-8">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">
              With decades of experience in pool and spa services, our team brings professional excellence to every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ExpertiseCard
              icon={<Pool className="w-8 h-8 text-blue-600" />}
              title="Pool Maintenance"
              description="Comprehensive pool care services including cleaning, chemical balancing, and equipment checks"
            />
            <ExpertiseCard
              icon={<Sparkles className="w-8 h-8 text-blue-600" />}
              title="Spa Installation"
              description="Expert installation of spas and hot tubs with precise attention to detail and functionality"
            />
            <ExpertiseCard
              icon={<Palette className="w-8 h-8 text-blue-600" />}
              title="Custom Designs"
              description="Tailored pool and spa designs that perfectly match your vision and space requirements"
            />
            <ExpertiseCard
              icon={<Flask className="w-8 h-8 text-blue-600" />}
              title="Water Treatment"
              description="Advanced water chemistry management for crystal clear, safe, and balanced water"
            />
            <ExpertiseCard
              icon={<TreePine className="w-8 h-8 text-blue-600" />}
              title="Landscape Integration"
              description="Seamless integration of pool and spa features with your existing landscape design"
            />
            <ExpertiseCard
              icon={<HeartHandshake className="w-8 h-8 text-blue-600" />}
              title="Customer Service"
              description="Dedicated support and maintenance plans tailored to your specific needs"
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">
              Explore our stunning pool and spa services and training, showcasing our creativity and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=2070"
              title="Modern Pool"
              category="Pool Services"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2070"
              title="Luxury Spa"
              category="Spa Services"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2070"
              title="Backyard Oasis"
              category="Pool Maintenance"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2070"
              title="Wellness Retreat"
              category="Spa Maintenance"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=2070"
              title="Landscape Integration"
              category="Pool Repairs"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&q=80&w=2070"
              title="Relaxation Haven"
              category="Spa Staff Training"
            />
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)'
      }}>
        {/* Water ripple effect overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}></div>

        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              number="1"
              icon={<Phone className="w-8 h-8 text-orange-500" />}
              title="Get in Touch"
              description="Reach out to us with your questions and requirements. Our team is ready to provide expert guidance tailored to your needs."
            />
            <ProcessCard
              number="2"
              icon={<ClipboardCheck className="w-8 h-8 text-orange-500" />}
              title="Choose a Plan"
              description="During our consultation, we'll help you select the perfect maintenance plan that fits your pool or spa requirements."
            />
            <ProcessCard
              number="3"
              icon={<Calendar className="w-8 h-8 text-orange-500" />}
              title="Sign Up & Get Scheduled!"
              description="Complete a simple registration process and we'll schedule your first service visit at your convenience."
            />
          </div>
        </div>
      </div>

      {/* Mission and Testimonials Section */}
      <div className="flex flex-col md:flex-row">
        {/* Mission Statement - Left Side */}
        <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-16" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA6B1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
          <h2 className="text-5xl font-serif text-gray-800 leading-tight text-center max-w-md">
            We exist to serve our community
          </h2>
        </div>

        {/* Testimonials - Right Side */}
        <div className="md:w-3/5 bg-blue-50 p-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <p className="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-blue-600 font-sans text-sm tracking-wider">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-4' : 'bg-blue-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Call Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
              Email Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Pool & Spa Medics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function TestimonialCard({ backgroundImage, profileImage, name, handle }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      {/* Background Image */}
      <div className="aspect-square">
        <img 
          src={backgroundImage}
          alt="Pool setting"
          className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Profile Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <img 
            src={profileImage}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="text-white">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-300">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center items-center mb-6 h-16 w-16 mx-auto bg-blue-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
}

function PortfolioCard({ image, title, category }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <div className="aspect-[4/3]">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-blue-200">{category}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ number, icon, title, description }) {
  return (
    <div className="relative bg-white rounded-full aspect-square p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
      {/* Background Number */}
      <div className="absolute inset-0 flex items-center justify-center text-[120px] font-bold text-gray-100 select-none">
        {number}
      </div>
      
      {/* Content */}
      <div className="relative text-center space-y-4">
        <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;