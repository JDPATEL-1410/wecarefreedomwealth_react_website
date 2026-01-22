import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaUmbrella,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaChartLine,
    FaShieldAlt,
    FaPiggyBank,
    FaGem,
    FaUserShield,
    FaHistory,
    FaHandHoldingHeart
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const Retirement = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyExpenses, setMonthlyExpenses] = useState(100000);
    const [existingSavings, setExistingSavings] = useState(2500000);

    const yearsToRetirement = retirementAge - currentAge;
    const inflationRate = 0.06;
    const returnRate = 0.12;
    const retirementYears = 25;

    // Calculate future monthly expenses
    const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
    const annualExpenses = futureMonthlyExpenses * 12;

    // Calculate corpus needed
    const corpusNeeded = annualExpenses * retirementYears;

    // Calculate future value of existing savings
    const futureValueExisting = existingSavings * Math.pow(1 + returnRate, yearsToRetirement);

    // Calculate additional corpus needed
    const additionalCorpus = Math.max(0, corpusNeeded - futureValueExisting);

    // Calculate monthly SIP needed
    const monthlyRate = returnRate / 12;
    const months = yearsToRetirement * 12;
    const monthlySIP = additionalCorpus > 0 && months > 0
        ? (additionalCorpus * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
        : 0;

    const benefits = [
        "Sustained lifestyle independence",
        "Inflation-adjusted monthly cashflow",
        "Institutional medical contingency funds",
        "Legacy preservation for successors",
        "Dignity-first wealth management",
        "Freedom from active labor obligations"
    ];

    const steps = [
        {
            step: "01",
            title: "Lifestyle Audit",
            description: "Assess current burn rates and mathematically project future needs."
        },
        {
            step: "02",
            title: "Horizon Mapping",
            description: "Define the exact transition window and lifestyle expectations."
        },
        {
            step: "03",
            title: "Corpus Engineering",
            description: "Derive the terminal sum required to sustain 25+ years of yield."
        },
        {
            step: "04",
            title: "Active Accumulation",
            description: "Deploy capital into high-alpha growth assets for maximum compounding."
        }
    ];

    const investmentOptions = [
        {
            title: "High-Conviction Equity",
            description: "Aggressive growth engine for long-term corpus expansion.",
            returns: "12-15% p.a.",
            icon: FaChartLine,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "NPS & Tax Pillars",
            description: "Tax-efficient stable yield vehicles with sovereign oversight.",
            returns: "9-12% p.a.",
            icon: FaShieldAlt,
            color: "from-orange-500 to-amber-600"
        },
        {
            title: "Strategic Debt",
            description: "Preserving base security and providing liquidity buffers.",
            returns: "7-9% p.a.",
            icon: FaPiggyBank,
            color: "from-slate-700 to-slate-900"
        }
    ];

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
                                className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-4 py-2 rounded-full mb-6"
                            >
                                <FaUmbrella className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Retirement Masterplan</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Legacy <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Freedom.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Engineering a future where work is optional. We build robust, inflation-proof portfolios that ensure your golden years are lived with absolute sovereignty.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">{yearsToRetirement} Yrs</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Accumulation</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹{(corpusNeeded / 10000000).toFixed(1)}Cr</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Target Corpus</span>
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
                                    Wealth Architecture
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
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Future Cost</div>
                                            <div className="text-lg font-black text-slate-900 text-center">₹{(futureMonthlyExpenses / 100000).toFixed(1)}L/mo</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Horizon</div>
                                            <div className="text-lg font-black text-slate-900 text-center">{yearsToRetirement} Yrs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-24 relative z-20 -mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Interactive Projections */}
                        <div className="lg:col-span-8 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-8 sm:p-14 border border-slate-100"
                            >
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center">
                                    <span className="w-2 h-10 bg-orange-500 rounded-full mr-4"></span>
                                    Sustainability Calibration
                                </h2>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-10">
                                        <SliderInput label="Current Age" value={currentAge} min={20} max={retirementAge - 1} onChange={setCurrentAge} suffix=" Yrs" />
                                        <SliderInput label="Target Retirement" value={retirementAge} min={retirementAge} max={70} onChange={setRetirementAge} suffix=" Yrs" />
                                        <SliderInput label="Monthly Expenses" value={monthlyExpenses} min={20000} max={1000000} step={5000} onChange={setMonthlyExpenses} prefix="₹" />
                                        <SliderInput label="Current Corpus" value={existingSavings} min={0} max={25000000} step={100000} onChange={setExistingSavings} prefix="₹" />
                                    </div>

                                    <div className="lg:hidden">
                                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white text-center">
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Required SIP</p>
                                            <h3 className="text-4xl font-black text-orange-500">₹{monthlySIP.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-lg font-bold text-slate-900 mb-4">Strategic Insights</h4>
                                        {benefits.slice(0, 4).map((benefit, i) => (
                                            <div key={i} className="flex items-start space-x-3">
                                                <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />
                                                <span className="text-slate-600 font-medium text-sm">{benefit}</span>
                                            </div>
                                        ))}
                                        <Link
                                            to="/contact"
                                            className="mt-8 w-full py-5 bg-slate-900 text-white font-bold rounded-2xl text-center hover:bg-slate-800 transition-all flex items-center justify-center group"
                                        >
                                            Consult an Architect <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {investmentOptions.map((option, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
                                    >
                                        <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <option.icon className="text-white text-2xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h3>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">{option.returns}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed">{option.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar: Premium Trust */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white h-fit sticky top-24 overflow-hidden group"
                            >
                                <h3 className="text-2xl font-bold mb-8 flex items-center">
                                    <FaHistory className="text-orange-500 mr-3" />
                                    Security Protocols
                                </h3>
                                <div className="space-y-8">
                                    <ProtocolItem icon={FaUserShield} title="Survival Reserve" desc="Shielding terminal corpus from market volatility." />
                                    <ProtocolItem icon={FaChartLine} title="Alpha Growth" desc="Ensuring yields consistently outperform 6% inflation." />
                                    <ProtocolItem icon={FaHandHoldingHeart} title="Legacy Transfer" desc="Structured succession for uncompromised wealth transfer." />
                                </div>
                                <div className="mt-12 p-8 bg-orange-500 rounded-[2.5rem] text-center shadow-lg shadow-orange-500/20">
                                    <h4 className="text-slate-900 font-black text-3xl mb-2">Alpha Plan</h4>
                                    <p className="text-orange-950 text-xs font-bold uppercase tracking-widest">Institutional Yield Strategy</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocol Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold mb-4">The Transition Protocol</h2>
                        <p className="text-slate-400 text-lg font-medium">Systematic phases towards absolute financial sovereignty.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
                            >
                                <div className="text-orange-500 text-5xl font-black mb-6 opacity-20">{step.step}</div>
                                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-orange-500 to-orange-600 p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10 capitalize">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Make Labor Optional <br /> for the Rest of Your Life.
                            </h2>
                            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Start engineering your retirement masterplan today. The cost of delay is the erosion of your future independence.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-xl group"
                            >
                                Secure Your Sovereignty
                                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


const ProtocolItem = ({ icon: Icon, title, desc }) => (
    <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
            <Icon className="text-orange-500 text-xl" />
        </div>
        <div>
            <h4 className="text-base font-bold text-white mb-1">{title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
        </div>
    </div>
);

export default Retirement;

