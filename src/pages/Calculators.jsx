import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCalculator, FaChartLine, FaPiggyBank, FaGraduationCap, FaRing,
  FaUmbrella, FaHome, FaCar, FaPlane, FaExchangeAlt,
  FaFileInvoiceDollar, FaClock, FaSearch, FaStar, FaCheckCircle,
  FaShieldAlt, FaArrowRight, FaToolbox
} from 'react-icons/fa';

const Calculators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const calculators = [
    { name: "SIP Calculator", path: "/calculator/sip", icon: FaChartLine, description: "Calculate your SIP returns and plan systematic investments", color: "from-orange-500 to-yellow-500", category: "Investment", popular: true },
    { name: "Lumpsum Calculator", path: "/calculator/lumpsum", icon: FaPiggyBank, description: "Calculate returns on one-time lump sum investments", color: "from-green-500 to-emerald-500", category: "Investment", popular: true },
    { name: "SWP Calculator", path: "/calculator/swp", icon: FaExchangeAlt, description: "Systematic Withdrawal Plan calculator for regular income", color: "from-blue-500 to-indigo-500", category: "Investment" },
    { name: "STP Calculator", path: "/calculator/stp", icon: FaExchangeAlt, description: "Systematic Transfer Plan calculator for fund transfers", color: "from-purple-500 to-pink-500", category: "Investment" },
    { name: "Retirement Calculator", path: "/calculator/retirement", icon: FaPiggyBank, description: "Plan your retirement corpus and secure your future", color: "from-red-500 to-orange-500", category: "Planning", popular: true },
    { name: "Delay Calculator", path: "/calculator/delay", icon: FaClock, description: "See the impact of delaying your investments", color: "from-gray-600 to-gray-800", category: "Investment" },
    { name: "Insurance Calculator", path: "/calculator/insurance", icon: FaUmbrella, description: "Calculate your ideal life insurance coverage", color: "from-teal-500 to-cyan-500", category: "Planning" },
    { name: "EMI Calculator", path: "/calculator/emi", icon: FaCalculator, description: "Calculate your loan EMI payments", color: "from-indigo-500 to-purple-500", category: "Loan", popular: true },
    { name: "Tax Calculator", path: "/calculator/tax", icon: FaFileInvoiceDollar, description: "Calculate your income tax and plan savings", color: "from-green-600 to-teal-600", category: "Tax" },
    { name: "Marriage Calculator", path: "/calculator/marriage", icon: FaRing, description: "Plan and save for your dream wedding", color: "from-pink-500 to-rose-500", category: "Planning" },
    { name: "Education Calculator", path: "/calculator/education", icon: FaGraduationCap, description: "Plan for your child's education expenses", color: "from-blue-600 to-cyan-600", category: "Planning" },
    { name: "Home Loan Calculator", path: "/calculator/home-loan", icon: FaHome, description: "Calculate home loan EMI and interest", color: "from-orange-600 to-red-600", category: "Loan" },
    { name: "Car Loan Calculator", path: "/calculator/car-loan", icon: FaCar, description: "Calculate car loan EMI and total cost", color: "from-slate-600 to-slate-800", category: "Loan" },
    { name: "Vacation Calculator", path: "/calculator/vacation", icon: FaPlane, description: "Plan and save for your dream vacation", color: "from-sky-400 to-blue-500", category: "Planning" },
  ];

  const categories = ['All', 'Investment', 'Planning', 'Loan', 'Tax'];
  const filteredCalculators = calculators.filter(calc => {
    const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) || calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || calc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
                <FaToolbox className="text-orange-600 text-sm" />
                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Precision Instruments</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Financial <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Calculators.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-12 font-medium">
                Institutional-grade tools engineered to provide absolute clarity. Plan, project, and achieve your financial milestones with clinical precision.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-3xl font-black">100%</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Accuracy Protocol</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-orange-600 text-3xl font-black">14+</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Specialized Tools</span>
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
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[4rem] shadow-2xl relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-900 rounded-[2rem] text-center">
                    <FaChartLine className="text-orange-500 text-3xl mx-auto mb-4" />
                    <p className="text-white font-black">SIP</p>
                  </div>
                  <div className="p-6 bg-white/40 rounded-[2rem] text-center border border-white">
                    <FaPiggyBank className="text-blue-600 text-3xl mx-auto mb-4" />
                    <p className="text-slate-900 font-black">Lumpsum</p>
                  </div>
                  <div className="p-6 bg-white/40 rounded-[2rem] text-center border border-white">
                    <FaShieldAlt className="text-emerald-600 text-3xl mx-auto mb-4" />
                    <p className="text-slate-900 font-black">Retire</p>
                  </div>
                  <div className="p-6 bg-orange-600 rounded-[2rem] text-center shadow-lg shadow-orange-600/20">
                    <FaCalculator className="text-white text-3xl mx-auto mb-4" />
                    <p className="text-white font-black">EMI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-8 sm:p-12 border border-slate-100 mb-20"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Refine Search</h3>
              <p className="text-slate-500 text-sm font-medium">Find your specialized instrument</p>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row gap-6">
              <div className="relative flex-1 group">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-orange-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Identify calculator (SIP, Retirement, Tax...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-5 pl-14 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-bold text-slate-800 outline-none"
                />
              </div>
              <div className="flex bg-slate-50 p-2 rounded-[1.5rem] overflow-x-auto no-scrollbar border border-slate-100">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-black whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-white text-orange-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredCalculators.map((calc, idx) => (
              <motion.div
                layout
                key={calc.path}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={calc.path} className="group block bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all h-full relative overflow-hidden">
                  {calc.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-black px-4 py-2 rounded-bl-3xl shadow-sm flex items-center">
                      <FaStar className="mr-2" /> CORE TOOL
                    </div>
                  )}

                  <div className={`w-14 h-14 bg-gradient-to-br ${calc.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <calc.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{calc.name}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-10">{calc.description}</p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{calc.category}</span>
                    <span className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <FaArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Calculators;

