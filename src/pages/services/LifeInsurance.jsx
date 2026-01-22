import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaUmbrella,
    FaCheckCircle,
    FaArrowRight,
    FaShieldAlt,
    FaHeart,
    FaHome,
    FaGem,
    FaUserShield
} from 'react-icons/fa';

const LifeInsurance = () => {
    const insuranceTypes = [
        {
            icon: FaShieldAlt,
            title: "Term Life Protection",
            description: "Pure institutional protection offering high-sum assured at minimal cost.",
            coverage: "₹1 Crore - ₹10 Crore+",
            color: "from-blue-600 to-blue-800"
        },
        {
            icon: FaHeart,
            title: "Critical Illness Shield",
            description: "Comprehensive medical coverage for high-burn life events and surgeries.",
            coverage: "₹5 Lakh - ₹1 Crore",
            color: "from-orange-500 to-orange-700"
        },
        {
            icon: FaGem,
            title: "Hybrid Wealth Plans",
            description: "Dynamic capital growth coupled with sovereign-grade life protection.",
            coverage: "Customizable",
            color: "from-slate-600 to-slate-800"
        }
    ];

    const benefits = [
        "Sovereign-grade financial security for beneficiaries",
        "Optimized tax shields under Section 80C & 10(10D)",
        "Psychological sovereignty through crisis readiness",
        "Institutional-grade premiums for elite-level coverage",
        "Integrated critical illness and accidental riders",
        "Maturity-based capital recovery in specific mandates"
    ];

    const whyImportant = [
        {
            title: "Income Recovery",
            description: "Ensures systemic stability during primary earner transitions."
        },
        {
            title: "Debt Liquidation",
            description: "Proactive shielding against outstanding fiscal liabilities."
        },
        {
            title: "Legacy Preservation",
            description: "Achieving multi-generational goal fulfillment protocols."
        },
        {
            title: "Retirement Yield",
            description: "Structured pension-equivalent benefits in later cycles."
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
                            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Risk Management Protocol</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Legacy <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">Protection.</span>
                        </h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                            Engineering resilience. We architect comprehensive insurance frameworks designed to safeguard your family's financial sovereignty against life's unpredictable volatilities.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">₹1Cr+</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Base Sum Assured</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-3xl font-black">20+</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Plan Architectures</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">100%</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Settlement Focus</span>
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
                                Safeguarding <span className="text-orange-600">Generational Assets</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Life insurance is the primary pillar of a robust wealth mandate. It ensures that your architectural goals for your family remain intact, regardless of personal absence.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                We utilize high-alpha protection strategies that maximize coverage-to-premium ratios, ensuring your capital is efficiently deployed for both safety and growth.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center">
                                    <FaUserShield className="text-orange-600 mr-2" /> Strategic Insight
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Adequate term protection should represent at least 15-20x of your annual burn rate to ensure true income replacement.
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
                            <h3 className="text-2xl font-black mb-8">Risk Mandates</h3>
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

            {/* Product Spectrum */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Protection Matrix</h3>
                        <h2 className="text-4xl font-black text-slate-900">Insurance Architecture</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {insuranceTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <type.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{type.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{type.description}</p>
                                <div className="pt-8 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-slate-400">Sum Assured Target</span>
                                    <span className="text-orange-600 font-black">{type.coverage}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logical Rationale */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Systemic Value</h3>
                        <h2 className="text-4xl font-black text-slate-900">The Protection Rationale</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyImportant.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 text-center"
                            >
                                <h3 className="text-lg font-black text-slate-900 mb-4">{reason.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{reason.description}</p>
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
                            <FaUmbrella className="text-6xl mx-auto mb-8 text-white/90" />
                            <h2 className="text-4xl sm:text-5xl font-black mb-8">Execute Protection Mandate</h2>
                            <p className="text-xl mb-12 text-white/90 font-medium max-w-2xl mx-auto">
                                Secure your family's future with institutional-grade coverage. Our desks will audit your current protection gap.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
                            >
                                Contact Protection Desk <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LifeInsurance;
