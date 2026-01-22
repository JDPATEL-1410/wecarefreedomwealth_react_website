import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaBullseye,
    FaHome,
    FaGraduationCap,
    FaRing,
    FaUmbrella,
    FaChartLine,
    FaCheckCircle,
    FaArrowRight,
    FaRocket,
    FaHistory,
    FaChess,
    FaShieldAlt,
    FaBalanceScale
} from 'react-icons/fa';

const GoalBaseInvesting = () => {
    const goals = [
        {
            icon: FaHome,
            title: "Dream Home Acquisition",
            description: "Capital deployment strategies tailored for high-value real estate acquisition and legacy building.",
            timeline: "5-10 Years",
            color: "from-orange-500 to-red-500",
            link: "/goals/dream-home"
        },
        {
            icon: FaGraduationCap,
            title: "Global Education Provision",
            description: "Ensuring unrestricted access to world-class education through inflation-adjusted corpus building.",
            timeline: "10-15 Years",
            color: "from-blue-500 to-indigo-600",
            link: "/goals/child-education"
        },
        {
            icon: FaRing,
            title: "Legacy Celebrations",
            description: "Strategic wealth accumulation for significant life milestones and multi-generational celebrations.",
            timeline: "15-20 Years",
            color: "from-purple-500 to-pink-500",
            link: "/goals/child-wedding"
        },
        {
            icon: FaUmbrella,
            title: "Financial Independence",
            description: "Advanced retirement architectures designed for absolute freedom and perpetual cash flow.",
            timeline: "20+ Years",
            color: "from-emerald-500 to-teal-600",
            link: "/goals/retirement"
        },
        {
            icon: FaShieldAlt,
            title: "Liquidity Reserve",
            description: "Institutional-grade emergency reserves providing absolute security against market volatility.",
            timeline: "Immediate",
            color: "from-amber-400 to-orange-500",
            link: "/goals/emergency-fund"
        },
        {
            icon: FaChartLine,
            title: "Alpha Wealth Creation",
            description: "Aggressive wealth compounding strategies focused on high-conviction growth opportunities.",
            timeline: "15+ Years",
            color: "from-slate-700 to-slate-900",
            link: "/goals/wealth-creation"
        }
    ];

    const benefits = [
        {
            title: "Precision Targeting",
            text: "Move beyond generic benchmarks to achieve specific, quantifiable life milestones."
        },
        {
            title: "Dynamic Allocation",
            text: "Asset allocation that evolves based on your proximity to the target goal date."
        },
        {
            title: "Tax Optimization",
            text: "Structuring investments to maximize post-tax returns across different goal horizons."
        },
        {
            title: "Behavioral Alpha",
            text: "Maintaining discipline during market stress by tethering investments to tangible goals."
        }
    ];

    const process = [
        {
            step: "01",
            title: "Vision Clarification",
            description: "Deep-dive analysis to quantify your aspirations into actionable financial targets."
        },
        {
            step: "02",
            title: "Gap Stratification",
            description: "Computational assessment of current assets against future liabilities and requirements."
        },
        {
            step: "03",
            title: "Architecture Design",
            description: "Bespoke investment blueprinting using advanced asset correlation models."
        },
        {
            step: "04",
            title: "Execution & Flow",
            description: "Systematic capital deployment into optimized vehicles with automated rebalancing."
        },
        {
            step: "05",
            title: "Performance Audit",
            description: "Continuous monitoring and strategic pivots to ensure 100% goal attainment probability."
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
                                <FaBullseye className="text-orange-600 text-sm" />
                                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Strategy First</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                Goal-Based <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                    Architecture
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                                Transcend generic investing. We architect bespoke financial frameworks designed to deliver absolute certainty for your life's most ambitious milestones.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center group"
                                >
                                    Start Architecting
                                    <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:block relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Success Probability', val: '99.4%', icon: FaChess },
                                    { label: 'Strategic Clarity', val: '100%', icon: FaBullseye },
                                    { label: 'Wealth Compounding', val: 'Alpha', icon: FaRocket },
                                    { label: 'Risk Mitigation', val: 'Tier-1', icon: FaShieldAlt }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl shadow-orange-900/5"
                                    >
                                        <stat.icon className="text-orange-500 text-2xl mb-3" />
                                        <div className="text-2xl font-black text-slate-900">{stat.val}</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                                    The Philosophy of <br />
                                    <span className="text-orange-600">Intentional Wealth</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                                    Traditional investing focuses on market benchmarks—we focus on your life metrics. Goal-based investing is the science of aligning capital deployment with temporal needs, ensuring your money is exactly where it needs to be, right when you need it.
                                </p>
                                <div className="space-y-6">
                                    {benefits.map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-4">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                                                <FaCheckCircle className="text-orange-600 text-sm" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                                <p className="text-slate-500">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <FaBalanceScale className="text-[15rem]" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                                        <span className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                                            <FaHistory className="text-white" />
                                        </span>
                                        Temporal Efficiency
                                    </h3>
                                    <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                                        We divide your wealth into tactical buckets, each optimized for its specific time horizon and risk tolerance. This eliminates the "anxiety of the unknown" and replaces it with the "certainty of a plan."
                                    </p>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                                            <div className="text-orange-400 font-bold mb-1">Short-Term</div>
                                            <div className="text-sm text-slate-400">Capital Preservation & Liquidity</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                                            <div className="text-orange-400 font-bold mb-1">Long-Term</div>
                                            <div className="text-sm text-slate-400">Compounding & Growth Alpha</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals Matrix */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Strategic <span className="text-orange-500">Milestones</span>
                        </h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                            Tailored architectures for every phase of your financial evolution.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link
                                    to={goal.link}
                                    className="block bg-slate-800/50 backdrop-blur-md border border-slate-700 p-10 rounded-[2.5rem] h-full hover:bg-slate-800 hover:border-orange-500/50 transition-all duration-500 group-hover:-translate-y-2"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <goal.icon className="text-white text-3xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{goal.title}</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                                        {goal.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-700/50">
                                        <div className="flex items-center text-sm font-bold text-orange-500 uppercase tracking-widest">
                                            <FaHistory className="mr-2" />
                                            {goal.timeline}
                                        </div>
                                        <FaArrowRight className="text-slate-500 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Framework */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-primary">
                            The Implementation <span className="text-orange-600">Framework</span>
                        </h2>
                        <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
                            A rigorous process designed for absolute goal attainment.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-0 left-8 md:left-1/2 w-px h-full bg-slate-100 hidden md:block"></div>

                        <div className="space-y-12">
                            {process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="flex-1 hidden md:block"></div>

                                    <div className="relative z-10 w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-orange-500 font-black text-2xl shadow-xl shadow-slate-900/10 border-4 border-white">
                                        {step.step}
                                    </div>

                                    <div className="flex-1 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-colors">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                        <div className="relative z-10 capitalize">
                            <FaRocket className="text-6xl text-orange-500 mx-auto mb-10 animate-bounce" />
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Ready to Architect <br /> Your Financial Future?
                            </h2>
                            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Join the elite group of investors who prioritize certainty over speculation. Start your goal-based journey today.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-orange-500 text-white font-black py-5 px-12 rounded-2xl hover:bg-orange-400 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl shadow-orange-500/20 group"
                            >
                                Secure My Future
                                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GoalBaseInvesting;

