import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaChartLine,
    FaPiggyBank,
    FaUniversity,
    FaLock,
    FaUserShield
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const EmergencyFund = () => {
    const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
    const [months, setMonths] = useState(6);
    const [existingSavings, setExistingSavings] = useState(100000);
    const [timeframe, setTimeframe] = useState(12);

    const targetCorpus = monthlyExpenses * months;
    const additionalAmount = Math.max(0, targetCorpus - existingSavings);
    const monthlySavings = additionalAmount / timeframe;

    const benefits = [
        "Uninterrupted lifestyle during income volatility",
        "Sovereign-grade medical contingency reserves",
        "Shielding long-term assets from liquidation",
        "Elimination of predatory high-interest debt",
        "Psychological sovereignty and crisis resilience",
        "Immediate liquidity for rapid response"
    ];

    const steps = [
        {
            step: "01",
            title: "Burn Rate Audit",
            description: "Define the absolute essential monthly outflow"
        },
        {
            step: "02",
            title: "Liquidity Selection",
            description: "Select high-safety, T+1 withdrawal instruments"
        },
        {
            step: "03",
            title: "Phased Accumulation",
            description: "Deploy capital systematically over 12-24 months"
        },
        {
            step: "04",
            title: "Protocol Locking",
            description: "Ensure funds are ring-fenced for true crises only"
        }
    ];

    const investmentOptions = [
        {
            title: "Liquid Institutional Funds",
            description: "Lower volatility than equity with T+1 liquidity",
            returns: "6-7% p.a.",
            icon: FaChartLine,
            color: "from-blue-600 to-blue-800"
        },
        {
            title: "Corporate FD Strips",
            description: "High-grade fixed returns with sweep-in facility",
            returns: "7-8% p.a.",
            icon: FaPiggyBank,
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "Sovereign Savings",
            description: "Absolute safety for base-level survival cash",
            returns: "3-4% p.a.",
            icon: FaUniversity,
            color: "from-slate-600 to-slate-800"
        }
    ];

    const emergencyTypes = [
        {
            title: "Medical Volatility",
            description: "Contingency for non-insured healthcare events",
            icon: FaUserShield
        },
        {
            title: "Income Disruption",
            description: "Sustaining burn rate during career transitions",
            icon: FaLock
        },
        {
            title: "Asset Failure",
            description: "Urgent primary residency or vehicle repairs",
            icon: FaShieldAlt
        },
        {
            title: "Market Shocks",
            description: "Buffer against broad economic instability",
            icon: FaChartLine
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
                                <FaShieldAlt className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Risk Mitigation Protocol</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Fortress <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Liquidity.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Engineering financial resilience. We architect ultra-liquid contingency pools that serve as your first line of defense against life's unpredictable volatilities.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">{months} Mo</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Coverage Target</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹{targetCorpus.toLocaleString('en-IN')}</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Total Reserve Goal</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:block"
                        >
                            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[3rem] shadow-2xl shadow-orange-900/5">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                    <FaCalculator className="text-orange-500 mr-3" />
                                    Fortress Architect
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-slate-900 rounded-3xl p-6 text-white text-center">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly Build-up</p>
                                        <div className="text-4xl font-black text-orange-500">
                                            ₹{monthlySavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Horizon</div>
                                            <div className="text-lg font-black text-slate-900 text-center">{timeframe} Mo</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Liquidity</div>
                                            <div className="text-lg font-black text-slate-900 text-center">T+1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">

                <div className="grid lg:grid-cols-12 gap-12 mb-24">
                    {/* Interactive Projections */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-8 sm:p-14 border border-slate-100"
                        >
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Fortress <span className="text-orange-600">Architect</span></h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <SliderInput label="Monthly Burn Rate" value={monthlyExpenses} min={20000} max={500000} step={5000} onChange={setMonthlyExpenses} prefix="₹" />
                                    <SliderInput label="Months of Solvency" value={months} min={3} max={12} onChange={setMonths} suffix=" Mo" />
                                    <SliderInput label="Existing Liquid Seed" value={existingSavings} min={0} max={2000000} step={10000} onChange={setExistingSavings} prefix="₹" />
                                    <SliderInput label="Build Horizon" value={timeframe} min={6} max={24} onChange={setTimeframe} suffix=" Mo" />
                                </div>

                                <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Required Monthly Build-up</p>
                                        <h3 className="text-4xl sm:text-5xl font-black text-orange-500 mb-6">₹{monthlySavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h3>

                                        <div className="space-y-4">
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Total Corpus Goal</span>
                                                <span className="text-slate-200 font-bold">₹{targetCorpus.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Liquidity Grade</span>
                                                <span className="text-orange-400 font-bold">Ultra-High</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="mt-8 py-4 bg-orange-600 text-white font-bold rounded-2xl text-center hover:bg-orange-500 transition-all flex items-center justify-center group"
                                    >
                                        Seal Your Safety Net <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div key={i} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <FaCheckCircle className="text-orange-500 text-xl shrink-0" />
                                    <span className="text-slate-700 font-bold text-sm leading-tight">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Risk Categories */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 text-white h-full">
                            <h3 className="text-xl font-extrabold mb-8 flex items-center">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                Crisis Matrix
                            </h3>
                            <div className="space-y-6">
                                {emergencyTypes.map((type, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                                        <div className="w-10 h-10 bg-orange-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <type.icon className="text-orange-500" />
                                        </div>
                                        <h4 className="text-sm font-bold text-white mb-2">{type.title}</h4>
                                        <p className="text-slate-500 text-[11px] font-medium leading-relaxed">{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liquidity Engines */}
                <div className="text-center mb-16">
                    <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Capital Vehicles</h3>
                    <h2 className="text-4xl font-extrabold text-slate-900">High-Solvency Instruments</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {investmentOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                <option.icon className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">{option.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{option.description}</p>
                            <div className="pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                <span className="text-slate-400">Yield Range</span>
                                <span className="text-orange-600">{option.returns}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Protocols */}
                <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4">The Safety Protocol</h2>
                        <p className="text-slate-400 font-medium">Four systematic phases to financial solvency</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                        {steps.map((step, i) => (
                            <div key={i}>
                                <div className="text-orange-500 text-6xl font-black mb-4 opacity-10">{step.step}</div>
                                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                <p className="text-slate-500 text-sm font-medium">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EmergencyFund;
