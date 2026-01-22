import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaChartPie,
    FaChartLine,
    FaHandHoldingUsd,
    FaCheckCircle,
    FaShieldAlt,
    FaCoins,
    FaArrowRight,
    FaGem,
    FaUserShield
} from 'react-icons/fa';

const MutualFund = () => {
    const fundTypes = [
        {
            icon: FaChartLine,
            title: "Equity Growth Funds",
            description: "High-alpha strategies for aggressive long-term wealth expansion.",
            risk: "High",
            returns: "12-15% p.a.",
            color: "from-blue-600 to-blue-800"
        },
        {
            icon: FaShieldAlt,
            title: "Debt & Income Funds",
            description: "Fixed-income securities focusing on capital preservation and yield.",
            risk: "Low to Medium",
            returns: "6-8% p.a.",
            color: "from-slate-600 to-slate-800"
        },
        {
            icon: FaCoins,
            title: "Hybrid Alpha Funds",
            description: "Optimized allocation across asset classes for superior risk-adjusted returns.",
            risk: "Medium",
            returns: "9-12% p.a.",
            color: "from-orange-500 to-orange-700"
        }
    ];

    const benefits = [
        "Professional institutional fund management",
        "Deep cross-sector asset diversification",
        "Liquid redemption cycles with high transparency",
        "Tax-advantaged structures (ELSS & Indexation)",
        "Systematic compounding through SIP protocols",
        "Strict regulatory oversight and audit trails"
    ];

    const sipBenefits = [
        {
            title: "Rupee Averaging",
            description: "Automated cost optimization across market cycles."
        },
        {
            title: "Compounding Alpha",
            description: "Exponetial growth on reinvested yields over time."
        },
        {
            title: "Disciplined Flow",
            description: "Automated monthly capital deployment."
        },
        {
            title: "Low Barrier",
            description: "Institutional access starting at ₹500/month."
        }
    ];

    const process = [
        {
            step: "01",
            title: "KYC Onboarding",
            description: "Institutional-grade identity verification and risk assessment."
        },
        {
            step: "02",
            title: "Strategic Selection",
            description: "Curating funds aligned with your specific goal horizon."
        },
        {
            step: "03",
            title: "Protocol Execution",
            description: "Initiating the systematic investment flow."
        },
        {
            step: "04",
            title: "Active Oversight",
            description: "Quarterly rebalancing and portfolio optimization."
        }
    ];

    return (
        <div className="bg-white">
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
                                className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-4 py-2 rounded-full mb-6"
                            >
                                <FaChartPie className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Institutional Wealth Management</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Mutual <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Fund Alpha.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Engineered for growth. We provide access to diversified, professional management strategies that transform capital into sustainable long-term wealth.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">1000+</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Asset Vehicles</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">12-15%</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Target CAGR</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹500</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Entry Protocol</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:block"
                        >
                            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[3rem] shadow-2xl shadow-orange-900/5 text-center">
                                <FaHandHoldingUsd className="text-orange-500 text-6xl mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Capital Compounding</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                    Harness the relentless power of systematic compounding through institutionally curated fund baskets.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Standard</div>
                                        <div className="text-lg font-black text-slate-900">SEBI Reg.</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Liquidity</div>
                                        <div className="text-lg font-black text-slate-900">Direct</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                                Professional <span className="text-orange-600">Wealth Aggregation</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Mutual funds pool institutional capital to access high-grade diversified portfolios. Managed by tenure-tracked fund managers, these vehicles provide retail investors with elite-level asset management.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Our mandates focus on risk mitigation and alpha generation, ensuring your capital is deployed where it has the highest probability of fulfillment.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center">
                                    <FaGem className="text-orange-500 mr-2" /> Strategic Insight
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    A systematic SIP of ₹10,000/month for 15 years can potentially build a corpus of over ₹50 Lakhs, harnessing the relentless power of compounding.
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
                            <h3 className="text-2xl font-black mb-8">The Aria Mandate</h3>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <FaCheckCircle className="text-orange-500 text-xl shrink-0 mt-1" />
                                        <p className="text-slate-300 font-bold text-sm leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                                        <FaUserShield className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Security Standard</p>
                                        <p className="text-sm font-bold">SEBI Regulated Framework</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Asset Categorization */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Product Spectrum</h3>
                        <h2 className="text-4xl font-black text-slate-900">Fund Architecture</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {fundTypes.map((fund, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${fund.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <fund.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{fund.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{fund.description}</p>
                                <div className="pt-8 border-t border-slate-50 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Volatilty Grade</span>
                                        <span className="text-slate-900 font-black">{fund.risk}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Target Return Path</span>
                                        <span className="text-orange-600 font-black">{fund.returns}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIP Protocols */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Efficiency Alpha</h3>
                        <h2 className="text-4xl font-black text-slate-900">Systematic Advantage</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sipBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100"
                            >
                                <h3 className="text-lg font-black text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Onboarding Workflow */}
            <section className="py-24 bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-500 font-extrabold uppercase tracking-widest text-xs mb-4">Activation Path</h3>
                        <h2 className="text-4xl font-black">Onboarding Protocol</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-6xl font-black text-white/5 mb-[-2rem]">{step.step}</div>
                                <h3 className="text-xl font-black text-orange-500 mb-3 relative z-10">{step.title}</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
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
                            <FaChartPie className="text-6xl mx-auto mb-8 text-white/90" />
                            <h2 className="text-4xl sm:text-5xl font-black mb-8">Initiate Capital Compounding</h2>
                            <p className="text-xl mb-12 text-white/90 font-medium max-w-2xl mx-auto">
                                Secure your future wealth with institutional fund strategies. Minimum entry from ₹500/month.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
                            >
                                Contact Portfolio Desk <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MutualFund;
