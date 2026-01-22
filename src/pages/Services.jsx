import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChartPie, FaChartLine, FaUmbrella, FaCheckCircle, FaBullseye,
  FaHeartbeat, FaGem, FaUniversity, FaGlobe, FaCoins,
  FaFileInvoiceDollar, FaLandmark, FaChevronRight, FaUsers,
  FaAward, FaBars, FaTimes, FaShieldAlt, FaArrowRight, FaCogs
} from 'react-icons/fa';

import goalBasedImg from '../assets/images/services/goal-based-investing.png';
import mutualFundsImg from '../assets/images/services/mutual-funds.png';
import stocksImg from '../assets/images/services/stocks.png';
import fixedDepositsImg from '../assets/images/services/fixed-deposits.png';
import taxPlanningImg from '../assets/images/services/tax-planning.png';
import lifeInsuranceImg from '../assets/images/services/life-insurance.png';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Goal Based Investing",
      icon: FaBullseye,
      image: goalBasedImg,
      description: "Transform your dreams into achievable milestones. We design portfolios that align perfectly with your life events.",
      howWeHelp: "Our scientific approach maps every rupee you invest to a specific life goal. We plan your daughter's education, your dream retirement, and your legacy, ensuring you have the right amount at precisely the right time.",
      gradient: "from-orange-500 to-red-600",
      link: "/services/goal-base-investing"
    },
    {
      title: "Mutual Funds",
      icon: FaChartLine,
      image: mutualFundsImg,
      description: "Wealth creation for the long term through disciplined systematic investment. Elite fund curation.",
      howWeHelp: "With over 35 years of experience, we select funds based on consistent performance and institutional grade metrics. We ensure you stay disciplined during market volatility - the ultimate key to success.",
      gradient: "from-blue-500 to-indigo-600",
      link: "/services/mutual-fund"
    },
    {
      title: "Direct Equities",
      icon: FaChartPie,
      image: stocksImg,
      description: "Direct participation with research-backed guidance. Navigate the markets with confidence.",
      howWeHelp: "We provide advisor-guided equity portfolios. Our focus is on fundamentally strong companies and emerging sectors, helping you build a direct ownership stake in the Indian growth story.",
      gradient: "from-green-500 to-emerald-600",
      link: "/services/stocks"
    },
    {
      title: "Life Insurance",
      icon: FaUmbrella,
      image: lifeInsuranceImg,
      description: "Protecting what matters most. Comprehensive risk coverage solutions for family security.",
      howWeHelp: "Insurance is a foundation, not just an investment. We perform a Human Life Value (HLV) analysis to determine exact coverage, ensuring you're protected without over-paying for unnecessary features.",
      gradient: "from-red-500 to-rose-600",
      link: "/services/life-insurance"
    },
    {
      title: "Fixed Income",
      icon: FaLandmark,
      image: fixedDepositsImg,
      description: "Stable and secured returns for capital preservation. High-yield institutional deposits.",
      howWeHelp: "We select AAA-rated deposits that offer higher returns than traditional bank savings while maintaining capital safety. Ideal for short-term targets or creating a robust emergency corpus.",
      gradient: "from-yellow-400 to-orange-500",
      link: "/services/fixed-deposit"
    },
    {
      title: "Tax Strategizing",
      icon: FaFileInvoiceDollar,
      image: taxPlanningImg,
      description: "Efficient strategies to maximize take-home income. Utilizing all legal available tools.",
      howWeHelp: "Tax saving is integral to wealth creation. We identify ELSS, insurance, and other 80C/80D opportunities that not only save taxes but contribute meaningfully to your long-term wealth goals.",
      gradient: "from-purple-500 to-violet-600",
      link: "/services/tax-planning"
    }
  ];

  const handleServiceSelect = (index) => {
    setActiveService(index);
    window.scrollTo({ top: 400, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Cinematic Light Header */}
      <section
        className="relative h-[65vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
          <motion.img
            key={services[activeService].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            src={services[activeService].image}
            className="absolute top-0 right-0 w-1/2 h-full object-cover grayscale mix-blend-multiply"
            alt="Service"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-4 py-2 rounded-full mb-8"
              >
                <FaCogs className="text-orange-600 text-sm" />
                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Wealth Ecosystem</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Elite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Solutions.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-12 font-medium">
                Institutional-grade advisory for individual families. We handle the technical complexity so you can enjoy the pure clarity of wealth.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-3xl font-black">6+</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Verticals</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-orange-600 text-3xl font-black">35y</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Expertise Pulse</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[4rem] shadow-2xl relative z-10 overflow-hidden">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-orange-500 shadow-xl">
                    <FaGem className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl leading-tight">Advisor-Led <br /> Excellence</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Institutional Standard</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Navigation Column */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                <div className="hidden lg:block mb-8 pl-4">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Capabilities</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest text-[10px]">Active Protocol Selection</p>
                </div>

                <div className="flex lg:flex-col gap-4 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceSelect(index)}
                      className={`flex items-center space-x-5 p-6 rounded-[2rem] w-full text-left transition-all group shrink-0 lg:shrink ${activeService === index
                        ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeService === index ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-orange-500'
                        }`}>
                        <service.icon size={22} />
                      </div>
                      <span className="font-black text-sm uppercase tracking-tight whitespace-nowrap lg:whitespace-normal">{service.title}</span>
                      <FaChevronRight className={`ml-auto hidden sm:block ${activeService === index ? 'text-orange-400' : 'text-slate-200'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Content Column */}
            <main className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  {/* Detailed Card */}
                  <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">
                    <div className="h-64 sm:h-80 relative overflow-hidden">
                      <img
                        src={services[activeService].image}
                        className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                        alt={services[activeService].title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
                    </div>

                    <div className="p-10 sm:p-20 -mt-24 relative z-10 bg-white rounded-t-[4rem]">
                      <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        Optimizing <br />
                        <span className="text-orange-600">{services[activeService].title}</span>
                      </h2>
                      <p className="text-xl text-slate-600 mb-12 leading-relaxed italic border-l-4 border-orange-500 pl-8">
                        {services[activeService].description}
                      </p>

                      <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 mb-12">
                        <h4 className="text-orange-600 font-extrabold uppercase tracking-[0.2em] text-[10px] mb-4">The WCFW Advantage</h4>
                        <p className="text-slate-700 font-bold leading-relaxed text-lg">
                          {services[activeService].howWeHelp}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6">
                        <Link to={services[activeService].link} className="flex-1 py-6 bg-slate-900 text-white rounded-2xl font-black text-center hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center group uppercase tracking-widest text-xs">
                          Plan This Goal <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <button className="flex-1 py-6 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-black text-center hover:bg-slate-50 transition-all flex items-center justify-center uppercase tracking-widest text-xs">
                          Download Literature
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* High Level Trust */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="bg-orange-600 rounded-[3rem] p-12 text-white shadow-xl shadow-orange-600/20">
                      <FaShieldAlt className="text-white opacity-40 text-4xl mb-8" />
                      <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Risk Managed</h4>
                      <p className="text-orange-50 font-medium leading-relaxed">Every strategy is stress-tested against historical market cycles to protect your capital. Resilience is mandatory.</p>
                    </div>
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
                      <FaAward className="text-orange-500 text-4xl mb-8" />
                      <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Expert Curated</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">Our investment committee screens over 2,500 schemes to find the top 5% that meet our elite criteria.</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

