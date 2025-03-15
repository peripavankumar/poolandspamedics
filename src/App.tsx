import React, { useState, useEffect } from 'react';
import { School as Pool, Clock, PhoneCall, CheckCircle2, Droplets, Phone, ClipboardCheck, Calendar, Sparkles, Palette, TreePine, FlaskRound as Flask, HeartHandshake, Globe, Award, MessageCircle } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTrustSlide, setCurrentTrustSlide] = useState(0);
  const testimonials = [
    {
      quote: "The Pool and Spa Medics Inc. have always shown themselves to be honest and professional when dealing with equipment failures, requiring repair or replacement. Thanks Guys.",
      author: "Sharon Hammond- Wilson Blanchard Management Inc."
    },
    {
      quote: "Your response to our equipment breakdowns have always been first class. Your turn around time getting our facility back up and running was impressive! Thanks, good work !",
      author: "Cristian Anastasia - Brookfield Residential Services Ltd."
    },
    {
      quote: "The Medics have proven themselves to be a company that shows integrity and respect when dealing with customers, having the ability to resolve their concerns. Thanks Medics",
      author: "Lance Farrel - Aquatech Logistics Inc."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Trust section slides data
  const trustSlides = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2069",
      imageAlt: "Professional with certificate",
      title: "The most experienced",
      description: "The Pools and Spa Medics Inc. was founded in 2006. Our household reputation has been established through the decades."
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2069",
      imageAlt: "Award winning team",
      title: "Certified professionals",
      description: "Our team consists of certified professionals with extensive training in pool and spa maintenance."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2069",
      imageAlt: "Customer service",
      title: "Customer satisfaction",
      description: "We pride ourselves on delivering exceptional service and ensuring complete customer satisfaction."
    }
  ];

  // Auto-rotate trust slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTrustSlide((prev) => (prev + 1) % trustSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white font-bold text-xl flex items-center">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#ffffff"/>
                  <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#ffffff"/>
                  <path d="M2 22h20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 18c1.5-1.5 3-3 6-3s4.5 1.5 6 3 3 3 6 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                The Pool And Spa Medics Inc.
              </div>
            </div>
            
            {/* Main Navigation */}
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a></li>
                <li><a href="#gallery" className="text-white hover:text-blue-200 transition-colors">Photo Gallery</a></li>
                <li><a href="#services" className="text-white hover:text-blue-200 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-white hover:text-blue-200 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white pt-16">
              <h1 className="text-6xl font-bold mb-6">Pool & Spa Medics</h1>
              <p className="text-xl mb-10">Professional pool and spa maintenance services to keep your water pristine and equipment running smoothly.</p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  SCHEDULE A CALL
                </button>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  REQUEST A QUOTE
                </button>
              </div>
            </div>
          </div>
          
          {/* Feature Badges Section */}
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-600 bg-opacity-90 rounded-lg p-6 flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-white font-medium">Certified Pool & Spa Operators with Over 18 Years of Experience</p>
              </div>
              <div className="bg-blue-600 bg-opacity-90 rounded-lg p-6 flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-white font-medium">Locally Owned and Operated</p>
              </div>
              <div className="bg-blue-600 bg-opacity-90 rounded-lg p-6 flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-white font-medium">BBB Accreditation & Member of The Pool and Hot Tub Council of Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Elements */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
            <div className="bg-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Support Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium">Pool & Spa Support</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-blue-200"
              >
                ✕
              </button>
            </div>
            <div className="p-4 h-64 bg-gray-50">
              <div className="bg-blue-100 rounded-lg p-3 mb-3 max-w-[80%]">
                <p className="text-sm text-blue-900">Hi there, have a question? Text us here.</p>
              </div>
              {/* Chat messages would go here */}
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-end space-y-3">
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Text us
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-blue-600"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Support Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Why Trust Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left side - Image (60% width) */}
            <div className="md:col-span-3 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {trustSlides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentTrustSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Content (40% width) */}
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <p className="text-blue-900 font-semibold tracking-wider">WHY TRUST US</p>
                {trustSlides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-1000 ${
                      index === currentTrustSlide ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                  >
                    <h2 className="text-4xl font-serif text-gray-900">{slide.title}</h2>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 pt-8">
                {trustSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTrustSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTrustSlide ? 'bg-blue-600 w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - User Profiles */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join our satisfied pool and spa owners</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* User Profile 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
                      alt="John profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">Lance</h3>
                  <p className="text-blue-600 text-sm">@PoolOwner</p>
                </div>
                
                {/* User Profile 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                      alt="Mike profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">Sharon</h3>
                  <p className="text-blue-600 text-sm">@DesignEnthusiast</p>
                </div>
                
                {/* User Profile 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" 
                      alt="Sarah profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">Lori</h3>
                  <p className="text-blue-600 text-sm">@SpaLover</p>
                </div>
                
                {/* User Profile 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                      alt="Emily profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">Stacey</h3>
                  <p className="text-blue-600 text-sm">@WellnessGuru</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Feature Image and Content */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=2070" 
                  alt="Luxury indoor pool and spa" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-gray-900">More than just services</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide a complete experience, ensuring your pool and spa are always in perfect condition.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join Our Community
                </button>
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
              title="Spa Maintenance"
              description="Expert maintenance of spas and hot tubs with precise attention to detail and functionality"
            />
            <ExpertiseCard
              icon={<Palette className="w-8 h-8 text-blue-600" />}
              title="Repairs"
              description="Expert pool repair and pool equipment repair services for residential and commercial pools"
            />
            <ExpertiseCard
              icon={<Flask className="w-8 h-8 text-blue-600" />}
              title="Water Treatment"
              description="Advanced water chemistry management for crystal clear, safe, and balanced water"
            />
            <ExpertiseCard
              icon={<TreePine className="w-8 h-8 text-blue-600" />}
              title="Inspection"
              description="Ensure your pool is safe and in top condition with our professional inspection service! We check for leaks, equipment issues, and water balance"
            />
            <ExpertiseCard
              icon={<HeartHandshake className="w-8 h-8 text-blue-600" />}
              title="Training"
              description="Dedicated training for pool and spa operators, including legal responsibilities, water chemistry, and facility management"
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

      {/* Footer - AquaRama Style */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
            {/* Left Column - CTA */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif mb-6">Families deserve to enjoy their pools.</h3>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors uppercase">
                Schedule a Call
              </button>
              <br />
              <br />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors uppercase">
                Request a Quote
              </button>
            </div>
            
            {/* Center Column - Logo and Awards */}
            <div className="flex flex-col items-center space-y-6">
              {/* Logo */}
              <div className="flex items-center">
                <div className="mr-3">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18c1.5-1.5 3-3 6-3s4.5 1.5 6 3 3 3 6 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 14c1.5-1.5 3-3 6-3s4.5 1.5 6 3 3 3 6 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10c1.5-1.5 3-3 6-3s4.5 1.5 6 3 3 3 6 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white font-bold">The Pool & Spa Medics Inc.</h3>
                  <p className="text-sm text-gray-300">Professional Pool & Spa Services</p>
                </div>
              </div>
              
              {/* Awards */}
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="w-24 h-24 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-yellow-600 font-bold text-xs">BBB</span>
                  </div>
                </div>
                <div className="w-24 h-24 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full shadow-lg"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-teal-600 font-bold text-xs">SUPPORT</span>
                    <span className="text-gray-800 font-bold text-sm">ARMED</span>
                    <span className="text-gray-800 font-bold text-xs">FORCES</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Info */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-4">9 Habitat Square, Brampton, ON L6S 1X7</p>
              <p className="text-gray-300 mb-4">
                <span className="font-medium">Email:</span> thepoolandspamedics@yahoo.ca
              </p>
              <p className="text-gray-300 mb-6">
                <span className="font-medium">Phone:</span> (416) 821-9043
                <br />
                <span className="font-medium">Phone:</span> (647) 292-3447
                <br />
                <span className="font-medium">Fax:</span> (905) 789-1145
              </p>
              
              {/* Social Media */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase">Dive into Social Media</h4>
                <div className="flex space-x-4 justify-center md:justify-end">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0010-10A10 10 0 0012 2 10 10 0 002 12c0 4.25 2.67 7.9 6.44 9.34-.04-.38-.12-1.05-.03-1.56l.84-3.65s-.2-.43-.2-1.06c0-.98.57-1.71 1.28-1.71.6 0 .9.45.9.99 0 .6-.39 1.5-.58 2.34-.17.74.35 1.33 1.03 1.33 1.23 0 2.08-1.3 2.08-3.17 0-1.66-1.12-2.82-2.73-2.82a2.86 2.86 0 00-2.96 2.9c0 .57.18 1.18.4 1.48.05.06.05.12.03.17l-.14.59c-.04.17-.15.22-.34.13-.94-.44-1.53-1.82-1.53-2.93 0-2.2 1.56-4.22 4.54-4.22 2.38 0 4.23 1.7 4.23 4.07 0 2.42-1.52 4.37-3.64 4.37-.71 0-1.37-.37-1.6-.8l-.43 1.66c-.16.6-.59 1.35-.88 1.81z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© 2025 The Pool & Spa Medics Inc. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a></p>
          </div>
        </div>
        
        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
            <div className="bg-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Support Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium">Pool & Spa Support</span>
              </div>
              <button className="text-white hover:text-blue-200">
                ✕
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="bg-blue-100 rounded-lg p-3 mb-3 max-w-[80%]">
                <p className="text-sm text-blue-900">Hi there, have a question? Text us here.</p>
              </div>
            </div>
            <div className="p-4 border-t flex">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center shadow-lg mr-2">
                <MessageCircle className="w-5 h-5 mr-2" />
                Text us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TestimonialCard({ backgroundImage, profileImage, name, handle }: { 
  backgroundImage: string; 
  profileImage: string; 
  name: string; 
  handle: string; 
}) {
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

function ExpertiseCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
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

function PortfolioCard({ image, title, category }: { 
  image: string; 
  title: string; 
  category: string; 
}) {
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

function ProcessCard({ number, icon, title, description }: { 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
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

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;