import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaChartLine,
    FaArrowUp,
    FaLightbulb,
    FaCheckCircle,
    FaShieldAlt,
    FaArrowRight,
    FaGem,
    FaExclamationTriangle
} from 'react-icons/fa';

const Stocks = () => {
    const stockTypes = [
        {
            title: "Large Cap Bluechips",
            description: "Industry titans with market cap exceeding ₹20,000 Cr. Peak stability and dividend yield.",
            risk: "Low to Medium",
            returns: "10-12% p.a.",
            color: "from-blue-600 to-blue-800"
        },
        {
            title: "Mid Cap Growth",
            description: "High-potential companies with market cap ₹5,000-20,000 Cr. The engines of wealth creation.",
            risk: "Medium to High",
            returns: "12-15% p.a.",
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "Small Cap Alpha",
            description: "Emerging niche leaders with market cap < ₹5,000 Cr. Maximum growth potential for aggressive portfolios.",
            risk: "High",
            returns: "15-20% p.a.",
            color: "from-slate-600 to-slate-800"
        }
    ];

    const benefits = [
        "Superior long-term capital appreciation",
        "Direct ownership in high-growth enterprises",
        "Consistent dividend-based passive income",
        "T+2 liquidity with deep market depth",
        "Strategic hedge against systemic inflation",
        "Agile portfolio diversification opportunities"
    ];

    const risks = [
        "Inherent market volatility and cyclicality",
        "Company-specific operational and fiscal risks",
        "Macro-economic and geopolitical shifts",
        "Requirement for active monitoring and research",
        "Potential for short-term capital drawdown"
    ];

    const investmentApproach = [
        {
            step: "01",
            title: "Fundamental Audit",
            description: "Bottom-up analysis of financial health, Moat, and management tenure."
        },
        {
            step: "02",
            title: "Technical Sizing",
            description: "Optimizing entry and exit windows using price-action and trend analytics."
        },
        {
            step: "03",
            title: "Sector Rotation",
            description: "Strategic allocation across high-alpha sectors and market caps."
        },
        {
            step: "04",
            title: "Patience Protocol",
            description: "Long-term compounding focus to override transitory market noise."
        }
    ];

    return (
        <div className="bg-white">
            {/* Light Cinematic Header with Requested Gradient */}
            <section
                className="relative h-[60vh] flex items-center overflow-hidden pt-16"
                style={{
                    backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
                }}
            >
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="h-px w-10 bg-orange-500"></span>
                            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Equity Supremacy</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Strategic <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">Equities.</span>
                        </h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                            Own the future. We provide research-backed, high-conviction stock strategies designed to outperform benchmarks and build generational wealth.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">5000+</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Active Listings</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-3xl font-black">20%+</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Target Alpha</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">Expert</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Portfolio Desk</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Value Proposition */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                                Harnessing <span className="text-orange-600">Business Growth</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Direct equity investing is the most powerful engine for long-term wealth creation. By owning shares in high-performing companies, you participate directly in their profit and growth trajectories.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Our institutional-grade research identifies value before the market, ensuring your portfolio is positioned in the tomorrow's leaders today.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center">
                                    <FaLightbulb className="text-orange-600 mr-2" /> Strategic Insight
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    "Time in the market beats timing the market." Our philosophy prioritizes fundamental strength over transitory volatility.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-[#0f172a] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px]"></div>
                            <h3 className="text-2xl font-black mb-8">The Equity Advantage</h3>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <FaCheckCircle className="text-orange-500 text-xl shrink-0 mt-1" />
                                        <p className="text-slate-300 font-bold text-sm leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Market Segmentation */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Capital Allocation</h3>
                        <h2 className="text-4xl font-black text-slate-900">Market Infrastructure</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stockTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <FaChartLine className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{type.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{type.description}</p>
                                <div className="pt-8 border-t border-slate-50 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Risk Profile</span>
                                        <span className="text-slate-900 font-black">{type.risk}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Performance Target</span>
                                        <span className="text-orange-600 font-black">{type.returns}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach and Risk Matrix */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Approach */}
                        <div>
                            <div className="mb-12">
                                <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Selection Methodology</h3>
                                <h2 className="text-4xl font-black text-slate-900">Portfolio Execution</h2>
                            </div>

                            <div className="space-y-8">
                                {investmentApproach.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.8 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-6"
                                    >
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 text-orange-500 font-black shadow-lg">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Risk Matrix */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-red-50 rounded-[3rem] p-12 border border-red-100 shadow-xl"
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg text-white">
                                    <FaExclamationTriangle className="text-xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">Risk Mandate</h3>
                            </div>
                            <div className="space-y-6 mb-10">
                                {risks.map((risk, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0"></span>
                                        <p className="text-slate-700 font-bold text-sm leading-tight">{risk}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-red-100 italic">
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    <strong>Regulatory Standard:</strong> Stock market investments are subject to market risks. Past performance is not indicative of future returns.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[3rem] p-12 sm:p-20 text-white text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <FaChartLine className="text-6xl mx-auto mb-8 text-white/90" />
                            <h2 className="text-4xl sm:text-5xl font-black mb-8">Access Quant Research</h2>
                            <p className="text-xl mb-12 text-white/90 font-medium max-w-2xl mx-auto">
                                Schedule a technical audit of your existing portfolio or initiate a research-backed mandate.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
                            >
                                Contact Equity Desk <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stocks;
