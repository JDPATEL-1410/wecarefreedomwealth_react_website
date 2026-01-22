import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaChartLine,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaShieldAlt,
    FaPiggyBank,
    FaUniversity,
    FaCoins,
    FaGem,
    FaHistory,
    FaLightbulb
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const WealthCreation = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
    const [years, setYears] = useState(20);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [existingCorpus, setExistingCorpus] = useState(1000000);

    const months = years * 12;
    const monthlyRate = expectedReturn / 100 / 12;

    // Future value of SIP
    const sipFutureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    // Future value of existing corpus
    const existingFutureValue = existingCorpus * Math.pow(1 + expectedReturn / 100, years);

    // Total wealth
    const totalWealth = sipFutureValue + existingFutureValue;
    const totalInvested = (monthlyInvestment * months) + existingCorpus;
    const wealthGained = totalWealth - totalInvested;

    const benefits = [
        "Financial independence and freedom",
        "Beat inflation & maintain purchasing power",
        "Create multi-generational legacies",
        "Multiple passive income streams",
        "Accelerated retirement roadmap",
        "Institutional-grade portfolio growth"
    ];

    const steps = [
        {
            step: "01",
            title: "Strategic Auditing",
            description: "Define clinical wealth targets and horizons using advanced risk metrics."
        },
        {
            step: "02",
            title: "Capital Deployment",
            description: "Leverage the unstoppable power of compounding through systematic entry."
        },
        {
            step: "03",
            title: "Asset Allocation",
            description: "Spread capital across high-conviction equity and strategic hedges."
        },
        {
            step: "04",
            title: "Alpha Optimization",
            description: "Maintain consistency through market cycles with annual rebalancing."
        }
    ];

    const investmentOptions = [
        {
            title: "Growth Equity",
            description: "High-octane vehicles for long-term corpus expansion.",
            returns: "12-15% p.a.",
            icon: FaChartLine,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "Alternative Alpha",
            description: "Concentrated portfolios with active oversight and conviction.",
            returns: "15-20% p.a.",
            icon: FaGem,
            color: "from-orange-500 to-red-600"
        },
        {
            title: "Strategic Real Estate",
            description: "Tangible assets with stable yields and inflation protection.",
            returns: "8-12% p.a.",
            icon: FaUniversity,
            color: "from-slate-700 to-slate-900"
        },
        {
            title: "Private Equity",
            description: "Access to high-growth opportunities beyond public markets.",
            returns: "18-22% p.a.",
            icon: FaCoins,
            color: "from-amber-400 to-orange-600"
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
                                <FaLightbulb className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Strategic Accumulation</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Wealth <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Creation.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Architecture for exponential growth. We engineer disciplined investment strategies to transform regular savings into institutional legacies.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-orange-600 text-3xl font-black">{expectedReturn}%</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Expected Alpha</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">{years} Yrs</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Growth Horizon</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-orange-600 text-3xl font-black">₹{(totalWealth / 10000000).toFixed(1)}Cr</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Wealth Target</span>
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
                                    Wealth Component
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-slate-900 rounded-3xl p-6 text-white text-center">
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Portfolio Value</p>
                                        <div className="text-4xl font-black text-orange-500">
                                            ₹{(totalWealth / 10000000).toFixed(2)} Cr
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Wealth Multiplier</div>
                                            <div className="text-lg font-black text-slate-900 text-center">{(totalWealth / totalInvested).toFixed(1)}x</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Yield Gain</div>
                                            <div className="text-lg font-black text-slate-900 text-center">₹{(wealthGained / 10000000).toFixed(1)}Cr</div>
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
                                    Capital Engineering
                                </h2>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-10">
                                        <SliderInput label="Monthly Deployment" value={monthlyInvestment} min={5000} max={500000} step={5000} onChange={setMonthlyInvestment} prefix="₹" />
                                        <SliderInput label="Growth Horizon" value={years} min={5} max={40} onChange={setYears} suffix=" Yrs" />
                                        <SliderInput label="Alpha Expectation" value={expectedReturn} min={8} max={20} onChange={setExpectedReturn} suffix="%" />
                                        <SliderInput label="Initial Capital" value={existingCorpus} min={0} max={10000000} step={100000} onChange={setExistingCorpus} prefix="₹" />
                                    </div>

                                    <div className="lg:hidden">
                                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white text-center">
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Terminal Value</p>
                                            <h3 className="text-4xl font-black text-orange-500">₹{(totalWealth / 10000000).toFixed(2)} Cr</h3>
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                        {/* Sidebar: Premium Protocols */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white h-fit sticky top-24 overflow-hidden group"
                            >
                                <h3 className="text-2xl font-bold mb-8 flex items-center">
                                    <FaHistory className="text-orange-500 mr-3" />
                                    Wealth Protocols
                                </h3>
                                <div className="space-y-8">
                                    <ProtocolItem icon={FaChartLine} title="8th Wonder" desc="Leveraging exponential compounding through early deployment." />
                                    <ProtocolItem icon={FaShieldAlt} title="Risk Barbell" desc="Balancing aggressive alpha with institutional capital protection." />
                                    <ProtocolItem icon={FaPiggyBank} title="Strategic SIP" desc="Systematic deployment to capture market volatility as returns." />
                                    <ProtocolItem icon={FaUniversity} title="Long-term Moat" desc="Building resilient portfolios that withstand market cycles." />
                                </div>
                                <div className="mt-12 p-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] text-center shadow-xl shadow-orange-500/20">
                                    <h4 className="text-slate-900 font-black text-3xl mb-1">Elite Alpha</h4>
                                    <p className="text-orange-950 text-xs font-bold uppercase tracking-widest">Growth Priority Plan</p>
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
                        <h2 className="text-4xl font-extrabold mb-4">The Wealth Protocol</h2>
                        <p className="text-slate-400 text-lg font-medium">Four stages to institutional-grade legacy building.</p>
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
                                Don't Just Save. <br /> Architect Your Legacy.
                            </h2>
                            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Start engineering your wealth creation engine today. Every day of delay is a day of missed compounding opportunities.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-xl group"
                            >
                                Begin Accumulation
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

export default WealthCreation;

