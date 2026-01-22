import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaChartLine,
    FaShieldAlt,
    FaGem,
    FaGlassCheers,
    FaHistory,
    FaHeart
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const ChildWedding = () => {
    const [childAge, setChildAge] = useState(10);
    const [weddingAge, setWeddingAge] = useState(28);
    const [currentCost, setCurrentCost] = useState(5000000);
    const [existingSavings, setExistingSavings] = useState(1000000);

    const yearsToGoal = weddingAge - childAge;
    const inflationRate = 0.08;
    const returnRate = 0.12;
    const monthlyRate = returnRate / 12;
    const months = yearsToGoal * 12;

    const futureWeddingCost = currentCost * Math.pow(1 + inflationRate, yearsToGoal);
    const futureValueExisting = existingSavings * Math.pow(1 + returnRate, yearsToGoal);
    const additionalAmount = Math.max(0, futureWeddingCost - futureValueExisting);
    const monthlySIP = additionalAmount > 0 && months > 0
        ? (additionalAmount * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
        : 0;

    const benefits = [
        "Uncompromised grand celebrations",
        "Inflation-proof capital reserves",
        "Reduction in debt-based lifestyle choices",
        "Strategic asset allocation for stability",
        "Peace of mind for the family unit",
        "Creation of memorable life events"
    ];

    const steps = [
        {
            step: "01",
            title: "Celebration Audit",
            description: "Define the exact scale and scope of the target multi-day event."
        },
        {
            step: "02",
            title: "Inflation Mapping",
            description: "Calculate future venue and catering costs with an 8% multiplier."
        },
        {
            step: "03",
            title: "SIP Execution",
            description: "Deploy capital into aggressive growth engines for maximum compounding."
        },
        {
            step: "04",
            title: "Capital Transition",
            description: "Strategically migrate to liquidity reserves 2 years prior to the event."
        }
    ];

    const investmentOptions = [
        {
            title: "Alpha Equity",
            description: "Maximizing corpus expansion for timelines exceeding 10 years.",
            returns: "14-16% p.a.",
            icon: FaChartLine,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "Precious Metals",
            description: "Strategic gold allocation for long-term value preservation.",
            returns: "9-11% p.a.",
            icon: FaGem,
            color: "from-amber-400 to-orange-600"
        },
        {
            title: "Secured Hybrid",
            description: "Balanced structures to safeguard gains during the final window.",
            returns: "8-10% p.a.",
            icon: FaShieldAlt,
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
                                <FaHeart className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Legacy Celebrations</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Heritage <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Weddings.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Securing joyful milestones. We architect dedicated investment architectures that ensure your child's special day is defined by joy, not constraints.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">{yearsToGoal} Yrs</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Plan Horizon</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹{(futureWeddingCost / 10000000).toFixed(1)}Cr</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Projected Cost</span>
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
                                    Wedding Fund Architect
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
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Inflation</div>
                                            <div className="text-lg font-black text-slate-900 text-center">8% p.a.</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Terminal Gap</div>
                                            <div className="text-lg font-black text-slate-900 text-center">₹{(additionalAmount / 100000).toFixed(0)}L</div>
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
                                    Milestone Calibration
                                </h2>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-10">
                                        <SliderInput label="Child's Age" value={childAge} min={0} max={weddingAge - 1} onChange={setChildAge} suffix=" Yrs" />
                                        <SliderInput label="Target Event Age" value={weddingAge} min={21} max={35} onChange={setWeddingAge} suffix=" Yrs" />
                                        <SliderInput label="Current Celebration Cost" value={currentCost} min={1000000} max={25000000} step={500000} onChange={setCurrentCost} prefix="₹" />
                                        <SliderInput label="Existing Seed Capital" value={existingSavings} min={0} max={10000000} step={100000} onChange={setExistingSavings} prefix="₹" />
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
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <FaGlassCheers className="text-[10rem]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center">
                                    <FaHistory className="text-orange-500 mr-3" />
                                    Legacy Planning
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
                                    Curating bespoke wealth strategies to ensure your family's most significant celebrations are executed with absolute elegance and zero compromise.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors">
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Entry SIP</span>
                                        <span className="text-white font-black">₹10,000</span>
                                    </div>
                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors">
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Asset Lock</span>
                                        <span className="text-white font-black">Flexible</span>
                                    </div>
                                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors">
                                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Transparency</span>
                                        <span className="text-white font-black">Real-time</span>
                                    </div>
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
                        <h2 className="text-4xl font-extrabold mb-4">The Celebration Protocol</h2>
                        <p className="text-slate-400 text-lg font-medium">A systematic framework for event sovereignty.</p>
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
                        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10 capitalize">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Design the Future <br /> of Your Family Legacy.
                            </h2>
                            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Start engineering an elite wedding fund today. Secure the capital needed for an uncompromised multi-generational celebration.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-orange-500 text-white font-black py-5 px-12 rounded-2xl hover:bg-orange-400 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl shadow-orange-500/20 group"
                            >
                                Secure the Milestone
                                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


export default ChildWedding;

