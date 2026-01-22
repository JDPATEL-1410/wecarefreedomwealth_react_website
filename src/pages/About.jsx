import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRocket, FaEye, FaUsers, FaChartLine, FaTrophy,
  FaShieldAlt, FaHandshake, FaBullseye, FaArrowRight,
  FaLightbulb, FaHistory, FaGem
} from 'react-icons/fa';

import vasudev_thakker from '../assets/team/vasudev-thakker.jpg';
import geetaben_thakker from '../assets/team/geetaben-thakker.jpg';
import nikhil_thakkar from '../assets/team/nikhil-thakker.jpg';
import megha_thakkar from '../assets/team/megha-thakker.jpg';
import dharmesh_kunadia from '../assets/team/dharmesh-kunadia.jpg';
import dhruvik_shah from '../assets/team/dhruvik-shah.jpg';
import tushar_shah from '../assets/team/tushar-shah.jpg';
import kamlesh_patel from '../assets/team/kamlesh-patel.jpg';
import nishith_pandya from '../assets/team/nishith-pandya.png';
import hetal_mehta from '../assets/team/hetal-mehta.jpg';
import rajesh_chauhan from '../assets/team/rajesh-chauhan.jpg';
import prakash_machhi from '../assets/team/prakash-machhi.jpg';
import vaidehi_patel from '../assets/team/vaidehi-patel.jpg';
import pritesh_thakor from '../assets/team/pritesh-thakor.jpg';
import pravin_solanki from '../assets/team/pravin-solanki.jpg';
import dhruvi_sheth from '../assets/team/dhruvi-sheth.jpg';
import chintal_patel from '../assets/team/chintal-patel.jpg';
import vijay_vaghela from '../assets/team/vijay-vaghela.jpg';
import rahul_solanki from '../assets/team/rahul-solanki.jpg';
import pratik_shah from '../assets/team/pratik-shah.jpg';
import meenaben_gohel from '../assets/team/meenaben-gohel.jpg';

import groupImage from '../assets/groupimage.png';

const About = () => {
  const leadership = [
    { name: "Shri Vasudev Thakker", role: "Founder & Chairman", img: vasudev_thakker, exp: "35+ Years", bio: "Established the firm in 1989 with a vision to democratize financial literacy." },
    { name: "Lt. Geetaben Thakker", role: "Co-Founder", img: geetaben_thakker, exp: "30+ Years", bio: "The heart of our client-centric philosophy and relationship building." },
    { name: "Nikhil Thakkar", role: "Director", img: nikhil_thakkar, exp: "15+ Years", bio: "Leading the firm's strategic expansion and digital-first advisory model." },
    { name: "Megha Thakkar", role: "Director", img: megha_thakkar, exp: "12+ Years", bio: "Ensuring operational excellence and superior client experience." }
  ];

  const headDept = [
    { name: "Nishith Pandya", role: "Insurance Head", img: nishith_pandya },
    { name: "Dharmesh Kunadia", role: "Associate Partner", img: dharmesh_kunadia },
    { name: "Dhruvik Shah", role: "Associate Partner", img: dhruvik_shah },
    { name: "Tushar Shah", role: "Associate Partner", img: tushar_shah },
    { name: "Kamlesh Patel", role: "General Manager", img: kamlesh_patel },
    { name: "Hetal Mehta", role: "Back Office Head", img: hetal_mehta },
    { name: "Rajesh Chauhan", role: "Associate Partner", img: rajesh_chauhan },
    { name: "Prakash Machhi", role: "Insurance Head", img: prakash_machhi },
    { name: "Vaidehi Patel", role: "Operations Lead", img: vaidehi_patel },
    { name: "Pritesh Thakor", role: "IT Head", img: pritesh_thakor }
  ];

  return (
    <div className="bg-[#f8fafc] font-sans selection:bg-orange-100 selection:text-orange-600">
      {/* Cinematic Light Header */}
      <section
        className="relative h-[65vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: 'linear-gradient(135deg, #ffe5bd 0%, #fffdf7 35%, #c7f1ff 100%)'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
          <img
            src={groupImage}
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 grayscale mix-blend-multiply"
            alt="Legacy"
          />
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
                className="inline-flex items-center space-x-3 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-4 py-2 rounded-full mb-8"
              >
                <FaHistory className="text-orange-600 text-sm" />
                <span className="text-orange-900 font-bold text-xs uppercase tracking-[0.2em]">Established 1989</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Legacy.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-12 font-medium">
                For over 35 years, we've helped families navigate the complex world of finance with institutional precision and human-centric care.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <span className="text-slate-900 text-3xl font-black">35+</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Years of Trust</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-orange-600 text-3xl font-black">10k+</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Families Protected</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[4rem] shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <FaHandshake className="text-orange-500 text-5xl mb-8" />
                <h3 className="text-3xl font-black text-slate-900 mb-6 italic">
                  "Our Word is <br /> our Bond."
                </h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  - WCFW Fundamental Protocol
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story & Evolution */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] p-8 sm:p-20 border border-slate-100"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="h-px w-12 bg-orange-500"></span>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">The Human Protocol</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  From Vision to <br />
                  <span className="text-orange-600">Institutional Reality</span>
                </h2>
                <div className="space-y-8 text-slate-500 text-lg leading-relaxed font-medium">
                  <p>In 1989, <span className="text-slate-900 font-black">Shri Vasudev Thakker</span> founded WeCare with a singular mission: to dismantle the barriers to financial literacy. He believed wealth wasn't an end state, but a vehicle for absolute independence.</p>
                  <p>Today, that vision has transformed into an institutional powerhouse, guiding over <span className="text-orange-600 font-black underline decoration-orange-500 decoration-4 underline-offset-4">10,000+ elite families</span> and managing a combined legacy of trust spanning generations.</p>
                </div>

                <div className="mt-12 flex items-center space-x-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                    <FaGem className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl">The Gold Standard</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Quality Driven Advisory</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/5 blur-[80px] rounded-full"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img src={groupImage} alt="Our Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-orange-400 font-black text-sm uppercase tracking-widest mb-2">The Architecture of Trust</p>
                    <p className="text-white text-2xl font-bold leading-tight">Elite Team WCFW</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership - Elite Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-orange-600 font-extrabold uppercase tracking-[0.3em] text-xs mb-4">Founding Protocol</h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Architects of Wealth</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {leadership.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] mb-6 shadow-sm">
                  <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-slate-900 font-black text-lg leading-tight mb-1">{member.name}</h4>
                      <p className="text-orange-600 font-bold text-xs uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Impactful Design */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md rounded-[3rem] p-16 border border-white/10 group"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-orange-600/20 group-hover:scale-110 transition-transform">
                <FaRocket className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Our Mission</h3>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To cultivate <span className="text-white">absolute financial literacy</span> across the sub-continent, enabling families to secure a stress-free existence through scientific capital engineering and disciplined deployment.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md rounded-[3rem] p-16 border border-white/10 group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10 border border-white/20 group-hover:scale-110 transition-transform">
                <FaEye className="text-orange-500 text-3xl" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Our Vision</h3>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To empower <span className="text-white">1,000,000 individual lives</span> with sophisticated financial wisdom by 2025, architecting a sustainable roadmap for generational prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-16 sm:p-24 rounded-[4rem] border border-slate-100 shadow-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-8 leading-tight italic decoration-orange-500 decoration-8 underline-offset-8">
              "Building Legacies, <br /> Together."
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Ready to architect your own financial legacy? Let's build a future where your capital works for your vision.
            </p>
            <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-slate-900 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-105 group">
              Schedule a Vision Meeting <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

