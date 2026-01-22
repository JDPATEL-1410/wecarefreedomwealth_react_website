import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaPiggyBank,
    FaCheckCircle,
    FaArrowRight,
    FaShieldAlt,
    FaUniversity,
    FaPercent,
    FaCalendarAlt,
    FaGem,
    FaLock
} from 'react-icons/fa';

const FixedDeposit = () => {
    const fdTypes = [
        {
            title: "Tier-1 Bank Deposits",
            description: "Traditional FDs with highest safety ratings and guaranteed capital protection.",
            tenure: "7 days to 10 years",
            returns: "5-8% p.a.",
            color: "from-blue-600 to-blue-800"
        },
        {
            title: "Corporate FD Strips",
            description: "High-yield deposits from top-rated corporates offering superior alpha.",
            tenure: "1 to 5 years",
            returns: "7-9% p.a.",
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "Tax-Shielded Deposits",
            description: "5-year lock-in instruments eligible for Section 80C fiscal benefits.",
            tenure: "5 years",
            returns: "6-8% p.a.",
            color: "from-slate-600 to-slate-800"
        }
    ];

    const benefits = [
        "Sovereign-grade capital protection protocols",
        "Deterministic yield with zero market volatility",
        "Granular tenure flexibility for cash-flow matching",
        "Structured liquidity through interest payout options",
        "Collateralized loan facility availability",
        "Enhanced yield modifiers for senior citizens"
    ];

    const features = [
        {
            title: "Asset Security",
            description: "Bank deposits insured up to ₹5 Lakh via DICGC frameworks.",
            icon: FaShieldAlt
        },
        {
            title: "On-Demand Liquidity",
            description: "Premature withdrawal options for emergency capital needs.",
            icon: FaLock
        },
        {
            title: "Strategic Compounding",
            description: "Choose between cumulative growth or regular income.",
            icon: FaUniversity
        }
    ];

    const considerations = [
        "Interest accruals are subject to marginal tax slab rates",
        "Yield profiles may trail active inflation benchmarks",
        "Premature liquidation typically incurs a minimal penalty",
        "Concentration risk in corporate instruments requires audit",
        "TDS thresholds apply beyond specific interest milestones"
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
                            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Capital Preservation</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Fixed <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">Deposits.</span>
                        </h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                            Fortress safety. We curate the highest-yielding fixed-income instruments to provide guaranteed returns with absolute capital security.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">7-9%</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Yield Range</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-3xl font-black">100%</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Capital Shield</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">T+0</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Access Grade</span>
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
                                Sovereign Grade <span className="text-orange-600">Asset Shield</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Fixed Deposits remain the bedrock of a conservative wealth strategy. By locking in predetermined yields, you eliminate market volatility from your core capital reserves.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                We aggregate multiple institutional offerings to ensure your cash-flow laddering is optimized for both liquidity and maximum compounded growth.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center">
                                    <FaGem className="text-orange-600 mr-2" /> Strategic Insight
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Senior citizens typically qualify for a 50bps yield modifier, significantly enhancing the real rate of return on long-tenure instruments.
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
                            <h3 className="text-2xl font-black mb-8">Asset Protocols</h3>
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

            {/* Product Segmentation */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Instrument Matrix</h3>
                        <h2 className="text-4xl font-black text-slate-900">Deposit Architecture</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {fdTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <FaPiggyBank className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{type.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{type.description}</p>
                                <div className="pt-8 border-t border-slate-50 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Horizon</span>
                                        <span className="text-slate-900 font-black">{type.tenure}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-slate-400">Target Yield</span>
                                        <span className="text-orange-600 font-black">{type.returns}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2rem] p-8 text-center shadow-md border border-slate-100"
                            >
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="text-orange-600 text-xl" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audit Considerations */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[3rem] p-12 text-white border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px]"></div>
                        <h3 className="text-2xl font-black mb-8 flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            Risk Matrix Audit
                        </h3>
                        <div className="space-y-6">
                            {considerations.map((point, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <FaPercent className="text-orange-500 text-xs mt-1.5 shrink-0" />
                                    <p className="text-slate-400 font-bold text-sm leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
                            <FaShieldAlt className="text-6xl mx-auto mb-8 text-white/90" />
                            <h2 className="text-4xl sm:text-5xl font-black mb-8">Compare Yield Spreads</h2>
                            <p className="text-xl mb-12 text-white/90 font-medium max-w-2xl mx-auto">
                                Optimize your cash reserves. Compare real-time FD rates across leading institutional partners.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
                            >
                                Initiate FD Audit <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FixedDeposit;
