import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaGraduationCap,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaChartLine,
    FaShieldAlt,
    FaPiggyBank,
    FaUniversity,
    FaBookReader,
    FaGem,
    FaHistory,
    FaGlobeAmericas
} from 'react-icons/fa';
import SliderInput from '../../components/SliderInput';

const ChildEducation = () => {
    const [childAge, setChildAge] = useState(5);
    const [educationAge, setEducationAge] = useState(18);
    const [currentCost, setCurrentCost] = useState(2500000);
    const [existingSavings, setExistingSavings] = useState(500000);

    const yearsToGoal = educationAge - childAge;
    const educationInflation = 0.10; // 10% education inflation
    const returnRate = 0.12;
    const monthlyRate = returnRate / 12;
    const months = yearsToGoal * 12;

    // Calculate future education cost
    const futureEducationCost = currentCost * Math.pow(1 + educationInflation, yearsToGoal);

    // Future value of existing savings
    const futureValueExisting = existingSavings * Math.pow(1 + returnRate, yearsToGoal);

    // Additional amount needed
    const additionalAmount = Math.max(0, futureEducationCost - futureValueExisting);

    // Monthly SIP needed
    const monthlySIP = additionalAmount > 0 && months > 0
        ? (additionalAmount * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
        : 0;

    const benefits = [
        "Uncompromised access to elite global institutions",
        "Inflation-shielded educational corpus",
        "Strategic reduction in loan dependency",
        "Structural tax optimization (Sec 80C)",
        "Early-mover compounding advantages",
        "Psychological security for the next generation"
    ];

    const steps = [
        {
            step: "01",
            title: "Institution Auditing",
            description: "Research target global costs with 10% inflation adjustment."
        },
        {
            step: "02",
            title: "Timeline Calibration",
            description: "Define exact capital deployment windows for undergraduate and masters."
        },
        {
            step: "03",
            title: "Capital Deployment",
            description: "Execute systematic long-term growth SIPs in high-conviction vehicles."
        },
        {
            step: "04",
            title: "Portfolio Optimization",
            description: "Annual rebalancing based on educational trends and proximity to goal."
        }
    ];

    const investmentOptions = [
        {
            title: "Global Equity Funds",
            description: "Capture international growth for overseas education requirements.",
            returns: "12-15% p.a.",
            icon: FaGlobeAmericas,
            color: "from-blue-600 to-indigo-700"
        },
        {
            title: "Concentrated Growth",
            description: "High-conviction equity portfolios for aggressive compounding.",
            returns: "15-18% p.a.",
            icon: FaChartLine,
            color: "from-orange-500 to-red-600"
        },
        {
            title: "Hybrid Protection",
            description: "Balanced growth with lower volatility as you approach the goal.",
            returns: "10-12% p.a.",
            icon: FaShieldAlt,
            color: "from-slate-700 to-slate-900"
        }
    ];

    const educationMilestones = [
        {
            title: "Primary Academic",
            age: "6-10 years",
            estimatedCost: "₹5-12 Lakhs",
            icon: FaBookReader
        },
        {
            title: "Secondary Foundation",
            age: "11-18 years",
            estimatedCost: "₹15-30 Lakhs",
            icon: FaUniversity
        },
        {
            title: "Undergraduate Ivy",
            age: "18-22 years",
            estimatedCost: "₹50-1.5 Cr",
            icon: FaGraduationCap
        },
        {
            title: "Specialized Masters",
            age: "22-25 years",
            estimatedCost: "₹1.5-3.5 Cr",
            icon: FaGem
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
                                <FaGraduationCap className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Gen-Alpha Readiness</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Education <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Futures.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Architecting intellectual legacies. We engineer high-growth educational funds that ensure your child's aspirations are never constrained by capital.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">10%</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Edu Inflation</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 text-3xl font-black">₹{(futureEducationCost / 10000000).toFixed(1)}Cr</span>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Future Cost</span>
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
                                    Fund Architecture
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
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Horizon</div>
                                            <div className="text-lg font-black text-slate-900 text-center">{yearsToGoal} Years</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-center">Target Multiplier</div>
                                            <div className="text-lg font-black text-slate-900 text-center">{(futureEducationCost / currentCost).toFixed(1)}x</div>
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
                                    Education Goal Calibration
                                </h2>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-10">
                                        <SliderInput label="Child's Current Age" value={childAge} min={0} max={educationAge - 1} onChange={setChildAge} suffix=" Yrs" />
                                        <SliderInput label="Target Start Age" value={educationAge} min={15} max={25} onChange={setEducationAge} suffix=" Yrs" />
                                        <SliderInput label="Current Course Cost" value={currentCost} min={500000} max={20000000} step={500000} onChange={setCurrentCost} prefix="₹" />
                                        <SliderInput label="Current Allocation" value={existingSavings} min={0} max={10000000} step={100000} onChange={setExistingSavings} prefix="₹" />
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

                        {/* Sidebar: Milestones */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white h-fit sticky top-24"
                            >
                                <h3 className="text-2xl font-bold mb-10 flex items-center">
                                    <FaHistory className="text-orange-500 mr-3" />
                                    Career Milestones
                                </h3>
                                <div className="space-y-10 relative">
                                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-800"></div>
                                    {educationMilestones.map((m, i) => (
                                        <div key={i} className="relative pl-10">
                                            <div className="absolute left-0 top-1.5 w-4 h-4 bg-orange-600 rounded-full border-4 border-[#0f172a] z-10"></div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{m.age}</div>
                                            <h5 className="text-lg font-bold text-white mb-1">{m.title}</h5>
                                            <div className="text-orange-500 font-black">{m.estimatedCost}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold mb-4">The Excellence Protocol</h2>
                        <p className="text-slate-400 text-lg font-medium">A systematic framework for academic sovereignty.</p>
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
                                Don't Let Inflation <br /> Limit Their Potential.
                            </h2>
                            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Start engineering a world-class educational corpus today. Every month deferred increases the capital required exponentially.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-xl group"
                            >
                                Secure Their Legacy
                                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


export default ChildEducation;

