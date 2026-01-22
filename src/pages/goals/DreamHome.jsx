import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaHome,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaChartLine,
    FaShieldAlt,
    FaGem,
    FaLandmark
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const DreamHome = () => {
    const [homeValue, setHomeValue] = useState(5000000);
    const [downPayment, setDownPayment] = useState(20);
    const [yearsToGoal, setYearsToGoal] = useState(5);
    const [existingSavings, setExistingSavings] = useState(500000);

    const downPaymentAmount = (homeValue * downPayment) / 100;
    const returnRate = 0.12;
    const monthlyRate = returnRate / 12;
    const months = yearsToGoal * 12;

    // Future value of existing savings
    const futureValueExisting = existingSavings * Math.pow(1 + returnRate, yearsToGoal);

    // Additional amount needed
    const additionalAmount = Math.max(0, downPaymentAmount - futureValueExisting);

    // Monthly SIP needed
    const monthlySIP = additionalAmount > 0 && months > 0
        ? (additionalAmount * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
        : 0;

    const benefits = [
        "Strategic capital for prime real estate",
        "Equity building with reduced debt leverage",
        "Optimized tax benefits on interest components",
        "Stability-first wealth diversification",
        "Sustained asset appreciation over decades",
        "Freedom of architectural customization"
    ];

    const steps = [
        {
            step: "01",
            title: "Market Auditing",
            description: "Assess location value and future appreciation"
        },
        {
            step: "02",
            title: "Capital Calibration",
            description: "Aim for a 30% seed to minimize long-term interest"
        },
        {
            step: "03",
            title: "SIP Deployment",
            description: "Aggressive growth for the down payment corpus"
        },
        {
            step: "04",
            title: "Institutional Leverage",
            description: "Secure pre-approved credit for prime negotiation"
        }
    ];

    const investmentOptions = [
        {
            title: "Market Growth Equities",
            description: "High-yield engines for timelines exceeding 5 years",
            returns: "12-15% p.a.",
            icon: FaChartLine,
            color: "from-blue-600 to-blue-800"
        },
        {
            title: "Index Infrastructure",
            description: "Stable, broad-market growth for seed capital",
            returns: "11-13% p.a.",
            icon: FaGem,
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "Dynamic Debt Strips",
            description: "Volatility protection as the goal horizon nears",
            returns: "7-9% p.a.",
            icon: FaShieldAlt,
            color: "from-slate-600 to-slate-800"
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
                                <FaHome className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Asset Class Mastery</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Heritage <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Residency.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Architecture for ownership. We engineer systematic accumulation strategies that transform real estate aspirations into tangible, high-equity assets.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">{yearsToGoal} Yrs</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Savings Horizon</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹{(downPaymentAmount / 100000).toFixed(1)}L</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Down Payment Goal</span>
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
                                    Home Fund Architect
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-slate-900 rounded-3xl p-6 text-white text-center">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly Commitment</p>
                                        <div className="text-4xl font-black text-orange-500">
                                            ₹{monthlySIP.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Seed Gap</div>
                                            <div className="text-lg font-black text-slate-900 text-center">₹{(additionalAmount / 100000).toFixed(1)}L</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Protocol</div>
                                            <div className="text-lg font-black text-slate-900 text-center">Tier-1</div>
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
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Home <span className="text-orange-600">Fund Architecture</span></h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <SliderInput label="Target Property Value" value={homeValue} min={2000000} max={50000000} step={500000} onChange={setHomeValue} prefix="₹" />
                                    <SliderInput label="Down Payment Share" value={downPayment} min={10} max={50} step={5} onChange={setDownPayment} suffix="%" />
                                    <SliderInput label="Years to Acquisition" value={yearsToGoal} min={1} max={15} onChange={setYearsToGoal} suffix=" Yrs" />
                                    <SliderInput label="Current Seed Capital" value={existingSavings} min={0} max={10000000} step={100000} onChange={setExistingSavings} prefix="₹" />
                                </div>

                                <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Required Monthly SIP</p>
                                        <h3 className="text-4xl sm:text-5xl font-black text-orange-500 mb-6">₹{monthlySIP.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h3>

                                        <div className="space-y-4">
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Down Payment Sum</span>
                                                <span className="text-slate-200 font-bold">₹{(downPaymentAmount / 100000).toFixed(1)} Lakhs</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Compounding Yield</span>
                                                <span className="text-orange-400 font-bold">12% Expected p.a.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="mt-8 py-4 bg-orange-600 text-white font-bold rounded-2xl text-center hover:bg-orange-500 transition-all flex items-center justify-center group"
                                    >
                                        Initiate Acquisition <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
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

                    {/* Sidebar: Property Trust */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#0f172a] rounded-[2rem] p-10 text-white text-center flex flex-col items-center shadow-2xl">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                                <FaLandmark className="text-orange-500 text-3xl" />
                            </div>
                            <h4 className="text-lg font-bold mb-4">Capital Leverage</h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                                Strategic savings reduce loan duration and total interest outflow by up to 40%.
                            </p>
                            <div className="w-full h-[2px] bg-white/5 mb-8"></div>
                            <div className="space-y-4 w-full text-left">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Yield Alpha</span>
                                    <span className="text-orange-500 font-black">12-15%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Down Payment</span>
                                    <span className="text-white font-black">20-30%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Growth Engines */}
                <div className="text-center mb-16">
                    <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Capital Vehicles</h3>
                    <h2 className="text-4xl font-extrabold text-slate-900">Residency Growth Pillars</h2>
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
                                <span className="text-slate-400">Target Range</span>
                                <span className="text-orange-600">{option.returns}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Protocols */}
                <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4">The Acquisition Protocol</h2>
                        <p className="text-slate-400 font-medium">Four systematic phases to residential sovereignty</p>
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


export default DreamHome;
