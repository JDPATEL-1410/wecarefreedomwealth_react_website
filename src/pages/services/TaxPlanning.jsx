import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaFileInvoiceDollar,
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
    FaLightbulb,
    FaUniversity,
    FaShieldAlt,
    FaGem
} from 'react-icons/fa';

const TaxPlanning = () => {
    const taxSavingOptions = [
        {
            title: "Section 80C Protocols",
            description: "Deduction optimization up to ₹1.5 Lakh.",
            instruments: ["ELSS (Tax-Saving Equities)", "PPF & EPF Multipliers", "Life Insurance Premiums", "Sovereign NSC Strips"],
            color: "from-blue-600 to-blue-800"
        },
        {
            title: "Section 80D Health Shield",
            description: "Medical premium fiscal deductions.",
            instruments: ["Up to ₹25,000 for self/family", "Up to ₹50,000 for senior citizens", "Preventive check-up modifiers"],
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "NPS Alpha (80CCD)",
            description: "Additional ₹50,000 retail deduction.",
            instruments: ["National Pension System (Tier 1)", "Exclusive over-and-above 80C", "Market-linked growth engines"],
            color: "from-slate-600 to-slate-800"
        },
        {
            title: "Section 24(b) Leverage",
            description: "Home loan interest fiscal shields.",
            instruments: ["Up to ₹2 Lakh for self-occupied", "Interest deduction on acquisition", "Principal recovery via 80C"],
            color: "from-red-600 to-red-800"
        }
    ];

    const benefits = [
        "Systemic reduction of gross tax outflow",
        "Maximization of net investible take-home capital",
        "Seamless integration with wealth creation cycles",
        "Deterministic planning for high-value fiscal goals",
        "Optimized asset-location strategies",
        "Rigorous adherence to legislative frameworks"
    ];

    const services = [
        {
            title: "Assurance & Filing",
            description: "Institutional-grade ITR audit and multi-source documentation."
        },
        {
            title: "Fiscal Optimization",
            description: "Strategic modelling to identify every possible deduction path."
        },
        {
            title: "Yield Architecture",
            description: "Aligning tax saves with high-CAGR growth vehicles."
        },
        {
            title: "Entity Compliance",
            description: "Ensuring end-to-end alignment with CBDT regulations."
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
                            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Fiscal Resource Optimization</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Tax <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">Sovereignty.</span>
                        </h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
                            Retain your wealth. We engineer strategic tax-saving mandates that legally minimize liabilities while accelerating your long-term capital accumulation.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">₹1.5L+</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Base Deductions</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-3xl font-black">30%</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Potential Tax Save</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-orange-600 text-3xl font-black">Tier-A</span>
                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Compliance Grade</span>
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
                                Professional <span className="text-orange-600">Fiscal Engineering</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Tax planning is the architectural analysis of your financial structure to ensure maximum fiscal efficiency. It is the legal pathway to minimizing liabilities and redeploying that capital into growth engines.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Our mandates focus on utilizing every available provision of the Income Tax Act to shield your earnings and maximize your net generational wealth.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center">
                                    <FaLightbulb className="text-orange-600 mr-2" /> Strategic Insight
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Effective tax planning should initiate in April, not March. Strategic asset-location over 12 months improves IRR by up to 2.5%.
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
                            <h3 className="text-2xl font-black mb-8">Fiscal Benefits</h3>
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

            {/* Tax Matrix */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Deduction Spectrum</h3>
                        <h2 className="text-4xl font-black text-slate-900">Fiscal Shield Framework</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {taxSavingOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <FaShieldAlt className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{option.title}</h3>
                                <p className="text-orange-600 font-extrabold text-sm mb-6">{option.description}</p>
                                <div className="space-y-3">
                                    {option.instruments.map((instrument, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <FaCheckCircle className="text-orange-500 text-xs shrink-0" />
                                            <p className="text-slate-600 text-xs font-bold">{instrument}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Pillars */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-4">Engagement Model</h3>
                        <h2 className="text-4xl font-black text-slate-900">Tax Advisory Pillars</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 text-center"
                            >
                                <h3 className="text-lg font-black text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.description}</p>
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
                            <FaFileInvoiceDollar className="text-6xl mx-auto mb-8 text-white/90" />
                            <h2 className="text-4xl sm:text-5xl font-black mb-8">Initiate Fiscal Audit</h2>
                            <p className="text-xl mb-12 text-white/90 font-medium max-w-2xl mx-auto">
                                Optimize your tax exposure. Schedule a consultation with our fiscal advisory desk.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-flex items-center shadow-2xl"
                            >
                                Contact Tax Desk <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxPlanning;
