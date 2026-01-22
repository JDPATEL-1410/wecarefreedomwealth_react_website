import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    keyword: "Financial Freedom",
    title: "Starts With Clarity",
    description: "Live life with confidence, not confusion. We help you invest with clear goals, disciplined strategies, and long-term focus.",
    disclaimer: "Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.",
    buttonText: "Get Started",
    buttonLink: "/services"
  },
  {
    id: 2,
    keyword: "Build Wealth",
    title: "the Right Way",
    description: "Create a portfolio that supports your lifestyle and your future. Systematic investing, disciplined planning, and regular monitoring—done for you.",
    disclaimer: "Investments carry risk. Please consult to assess your risk appetite and time horizon.",
    buttonText: "Start Building",
    buttonLink: "/goals/wealth-creation"
  },
  {
    id: 3,
    keyword: "Helping You",
    title: "Stay Financially Prepared",
    description: "Life keeps changing. Your money should keep up. We help you stay prepared through goal-based planning and periodic portfolio check-ups.",
    disclaimer: "Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.",
    buttonText: "Plan Ahead",
    buttonLink: "/contact"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, isPaused]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch swipe handlers for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next slide
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous slide
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
      }}
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Curved bottom edge - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-white" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)',
        transform: 'translateY(50%)'
      }}></div>

      {/* Decorative dot pattern - Hidden on small mobile for performance */}
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* LEFT CONTENT - Mobile First Typography */}
          <div className="relative order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-slate-800"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Main Heading with Orange Keyword - Responsive text */}
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 tracking-wide"
                  style={{ wordSpacing: '0.1em' }}
                >
                  <span className="text-orange-500">{slides[currentSlide].keyword}</span>{' '}
                  {slides[currentSlide].title}
                </h1>

                {/* Description - Better mobile readability */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-3 sm:mb-4 max-w-xl">
                  {slides[currentSlide].description}
                </p>

                {/* Disclaimer - Small regulatory text */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 sm:mb-8 max-w-xl italic">
                  {slides[currentSlide].disclaimer}
                </p>

                {/* CTA Button - Touch-friendly */}
                <Link
                  to={slides[currentSlide].buttonLink}
                  className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-transparent hover:text-orange-500 transition-all duration-300 active:scale-95 touch-manipulation shadow-lg"
                  aria-label={`${slides[currentSlide].buttonText} - Navigate to ${slides[currentSlide].buttonLink}`}
                >
                  {slides[currentSlide].buttonText}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE - Circular with Icons - Mobile Optimized */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Main circular image container - Responsive sizing */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Circular image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-2xl bg-white">
                    {currentSlide === 0 && (
                      <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=500&fit=crop"
                        alt="Asset Allocation Strategy"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {currentSlide === 1 && (
                      <img
                        src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=500&h=500&fit=crop"
                        alt="Financial Freedom Concept"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {currentSlide === 2 && (
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
                        alt="Financial Happiness Program"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Floating decorative badges - Responsive positioning & sizing */}
                  {currentSlide === 0 && (
                    <>
                      {/* MUTUAL FUND badge - Hidden on smallest screens */}
                      <div className="hidden sm:block absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg border-2 border-orange-500" aria-hidden="true">
                        <span className="text-xs sm:text-sm font-bold text-slate-700">MUTUAL FUND</span>
                      </div>
                      {/* GOLD badge - Adjusted position for mobile */}
                      <div className="absolute top-1/4 -left-4 sm:-left-8 bg-white rounded-full p-2 sm:p-4 shadow-lg border-2 border-orange-500" aria-hidden="true">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-700">GOLD</span>
                      </div>
                      {/* BOND badge */}
                      <div className="absolute top-1/4 -right-4 sm:-right-8 bg-white rounded-full p-2 sm:p-4 shadow-lg border-2 border-orange-500" aria-hidden="true">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-700">BOND</span>
                      </div>
                      {/* Rupee symbol - Responsive sizing */}
                      <div className="absolute bottom-1/4 left-4 sm:left-8 bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border-2 border-orange-500" aria-hidden="true">
                        <span className="text-xl sm:text-2xl font-bold text-orange-500">₹</span>
                      </div>
                      {/* Cycle arrows - Hidden on mobile, too complex */}
                      <div className="hidden lg:block absolute bottom-1/4 -right-4 text-slate-700 text-4xl" aria-hidden="true">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="animate-spin-slow">
                          <path d="M30 10 L35 15 L30 20 M30 10 A20 20 0 0 1 50 30" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M50 30 L45 35 L50 40 M50 30 A20 20 0 0 1 30 50" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    </>
                  )}

                  {currentSlide === 1 && (
                    <>
                      {/* Checkmark icon - Responsive sizing */}
                      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-green-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg" aria-hidden="true">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </>
                  )}

                  {currentSlide === 2 && (
                    <>
                      {/* Trophy/Award icon for FHP - Responsive sizing */}
                      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg border-2 border-orange-500" aria-hidden="true">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Dots - Touch-friendly navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12" role="tablist" aria-label="Slide navigation">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 touch-manipulation ${currentSlide === idx
                ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-orange-500 rounded-full'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-400/50 rounded-full hover:bg-slate-400/80 active:scale-95'
                }`}
              aria-label={`Go to slide ${idx + 1}: ${slides[idx].keyword}`}
              aria-current={currentSlide === idx ? "true" : "false"}
              role="tab"
              aria-selected={currentSlide === idx}
            />
          ))}
        </div>
      </div>

      {/* Add spin-slow animation in your CSS/Tailwind config */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
